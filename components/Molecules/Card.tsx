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
    <div className="w-full max-w-md mx-auto bg-smokyBlack shadow-lg shadow-neutral-900 text-softWhite overflow-hidden md:max-w-2xl m-5 flex-nowrap ">
      <div className="p-8">
        <div className="flex justify-between align-baseline tracking-wide">
          <div>
            <p className="block mt-1 text-2xl font-Lato tracking-widest font-light">
              {contact.firstName} {contact.lastName}
            </p>
            <p className="block mt-1 text-sm font-Lato tracking-wider font-think opacity-60">
              {contact.email}
            </p>
          </div>

          <div className="flex gap-2 items-center justify-items-baseline">
            <Button
              onClick={() => handleToggleFavorites(contact.id, contact)}
              id={contact.id}
              label={
                contact.favorite ? (
                  <HeartIcon
                    fill="#DC3545"
                    className="w-8 active:animate-ping animate-once animate-duration-[2000ms]"
                  />
                ) : (
                  <HeartIcon
                    fill="none"
                    stroke="#DC3545"
                    className="w-8 active:animate-ping animate-once animate-duration-[2000ms]"
                  />
                )
              }
            />

            <DotsIcon handleVisibility={toggleVisibility} />
          </div>
        </div>

        <div
          className={`flex justify-between items-baseline mt-2 mx-1 transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex justify-normal align-middle gap-3 mt-6">
            <PhoneIcon />
            <p className="opacity-80">{contact.phone}</p>
          </div>

          <div className="flex items-center gap-8">
            <Link href={`/edit/${contact.id}`}>
              <EditIcon />
            </Link>
            <Button
              label={<DeleteIcon />}
              onClick={() => setModalVisible(true)}
            />
          </div>
        </div>
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
