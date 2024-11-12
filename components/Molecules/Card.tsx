"use client";
import { IContact } from "@/models/Contact";

import { useState } from "react";
import Button from "../Atoms/Button";

interface CardProps {
  contact: IContact;
  handleToggleFavorites: (id: string, contact: IContact) => void;
}

export default function Card({ contact, handleToggleFavorites }: CardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {contact.firstName} {contact.lastName}
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          {contact.email}
        </p>
        <button onClick={toggleVisibility}>...</button>
        {isOpen && (
          <>
            <p className="mt-2 text-gray-500">Event Description</p>
            <p className="mt-2 text-gray-500">Event Details...</p>

            <Button
              id={contact.id}
              label={
                <img
                  src={
                    contact.favorite
                      ? "/icons/heartIconOutline.svg"
                      : "/icons/heartIconSolid.svg"
                  }
                  alt={
                    contact.favorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                  className="h-10 w-10"
                />
              }
              onClick={() => handleToggleFavorites(contact.id, contact)}
            />
          </>
        )}
      </div>
    </div>
  );
}
