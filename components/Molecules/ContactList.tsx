"use client";

import { IContact } from "@/models/Contact";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Atoms/Button";
import { updateContact } from "@/app/actions/updateContact";
import { deleteContact } from "@/app/actions/deleteContact";

interface ContactsListProps {
  contacts: IContact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  const [contactList, setContactList] = useState<IContact[]>(contacts);

  const handleDelete = async (id: string) => {
    await deleteContact(id);
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleToggleFavorites = async (id: string, contact: IContact) => {
    const updatedContact = { ...contact, favorite: !contact.favorite };
    await updateContact(id, updatedContact);
  };

  return (
    <div>
      {contactList.map((contact: IContact) => (
        <div key={contact.id}>
          <h2>{contact.firstName}</h2>
          <p>{contact.email}</p>
          <Link href={`/edit/${contact.id}`}>Edit contact</Link>
          <Button
            label="Delete contact"
            onClick={() => handleDelete(contact.id)}
          />
          <Button
            label={
              contact.favorite ? "Remove from favorites" : "Add to favorites"
            }
            onClick={() => handleToggleFavorites(contact.id, contact)}
          />
        </div>
      ))}
    </div>
  );
}
