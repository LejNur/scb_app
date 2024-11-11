"use client";

import { useEffect, useState } from "react";
import { getContact } from "@/app/actions/getContact";
import Form from "@/components/Molecules/Form";
import { useParams } from "next/navigation";
import Button from "@/components/Atoms/Button";

export default function EditContact() {
  const { id } = useParams();

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      if (id) {
        const contactData = await getContact(id as string);

        setContact(contactData);
      }
    };

    fetchContact();
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Contact</h1>
      <Form formData={contact} />
    </div>
  );
}
