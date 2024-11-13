"use client";
import { IContact } from "@/models/Contact";
import { useState } from "react";
import Button from "../Atoms/Button";
import Link from "next/link";
import HeartIcon from "../icons/HeartIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import DotsIcon from "../icons/DotsIcon";
import PhoneIcon from "../icons/PhoneIcon";
import Modal from "./Modal";

interface CardProps {
  key: string;
  contact: IContact;
  handleToggleFavorites: (id: string, contact: IContact) => void;
  handleDelete: (id: string) => void;
}

export default function Card({
  contact,
  handleToggleFavorites,
  handleDelete,
}: CardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  const confirmDelete = () => {
    handleDelete(contact.id);
    setModalVisible(!modalVisible);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 flex-nowrap">
      <div className="p-8">
        <div className="flex justify-between align-baseline tracking-wide">
          <div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black">
              {contact.firstName} {contact.lastName}
            </p>
            <p className="block mt-1 text-sm leading-loose font-medium text-gray-500">
              {contact.email}
            </p>
          </div>

          <div className="flex gap-2 items-center justify-items-baseline">
            <Button
              id={contact.id}
              label={
                contact.favorite ? (
                  <HeartIcon fill="#8B0000" />
                ) : (
                  <HeartIcon fill="none" stroke="#8B0000" />
                )
              }
              onClick={() => handleToggleFavorites(contact.id, contact)}
            />

            <DotsIcon handleVisibility={toggleVisibility} />
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-between align-baseline mt-8 mx-1">
            <div className="flex justify-normal align-middle gap-3 mt-2">
              <PhoneIcon />
              <p className=" text-gray-500">{contact.phone}</p>
            </div>

            <div className="flex align-baseline gap-8">
              <Link href={`/edit/${contact.id}`}>
                <EditIcon />
              </Link>
              <Button
                label={<DeleteIcon />}
                onClick={() => setModalVisible(true)}
              />
            </div>
          </div>
        )}
      </div>
      {modalVisible && (
        <Modal
          message="Are you sure you want to delete this contact?"
          onConfirm={confirmDelete}
          onCancel={() => setModalVisible(false)}
        />
      )}
    </div>
  );
}
