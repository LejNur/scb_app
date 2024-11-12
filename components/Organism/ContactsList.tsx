"use client";

import { IContact } from "@/models/Contact";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Atoms/Button";
import { updateContact } from "@/app/actions/updateContact";
import { deleteContact } from "@/app/actions/deleteContact";
import SearchFilterSort from "../Molecules/SearchFilterSort";
import Card from "../Molecules/Card";

interface ContactsListProps {
  contacts: IContact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  const [contactList, setContactList] = useState<IContact[]>(contacts);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<
    "firstName" | "lastName" | "email"
  >("firstName");

  const sortContacts = (
    contacts: IContact[],
    field: "firstName" | "lastName" | "email",
    order: "asc" | "desc"
  ) => {
    return [...contacts].sort((a, b) => {
      let aValue = a[field].toLowerCase();
      let bValue = b[field].toLowerCase();

      if (aValue < bValue) {
        return order === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  //ova je radila prije nego sto sam odlucila da smontiram sve
  const filteredContacts = contactList.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (field: "firstName" | "lastName" | "email") => {
    if (field === sortField) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // Apply sorting to filtered contacts
  const sortedContacts = sortContacts(filteredContacts, sortField, sortOrder);

  const handleDelete = async (id: string) => {
    await deleteContact(id);
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleToggleFavorites = async (id: string, contact: IContact) => {
    const updatedContact = { ...contact, favorite: !contact.favorite };
    const res = await updateContact(id, updatedContact);

    const updatedContactList = contactList.map((contact) =>
      contact.id === id ? res : contact
    );
    setContactList(updatedContactList);
  };

  return (
    <div>
      <SearchFilterSort
        search={searchQuery}
        setSearch={setSearchQuery}
        sortOrder={sortOrder}
        sortField={sortField}
        handleSort={handleSort}
      />

      {sortedContacts.map((contact: IContact) => (
        <div key={contact.id}>
          <Card
            contact={contact}
            handleToggleFavorites={handleToggleFavorites}
          />

          <Link href={`/edit/${contact.id}`}>Edit contact</Link>
          <Button
            label="Delete contact"
            onClick={() => handleDelete(contact.id)}
          />
          {/* <Button
            id={contact.id}
            label={
              contact.favorite ? "Remove from favorites" : "Add to favorites"
            }
            onClick={() => handleToggleFavorites(contact.id, contact)}
          /> */}
        </div>
      ))}
    </div>
  );
}