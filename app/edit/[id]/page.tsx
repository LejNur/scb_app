"use client";

import { useEffect, useState } from "react";
import { getContact } from "@/app/actions/getContact";
import Form from "@/components/Molecules/Form";
import { useParams } from "next/navigation";

export default function EditContact() {
  const params = useParams<{ tag: string; id: string }>();
  const id = params.id;

  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      if (id) {
        const contactData = await getContact(id);

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
