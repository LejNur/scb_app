import { getContact } from "@/app/actions/getContact";
import Form from "@/components/Molecules/Form";
import React from "react";

async function EditContact({ params }: any) {
  const { id } = params;
  const contact = await getContact(id);

  return (
    <div>
      <h1 className="text-softWhite font-Lato tracking-wide text-2xl mx-auto text-center">
        Edit contact
      </h1>
      <Form formData={contact} />
    </div>
  );
}
export default EditContact;
