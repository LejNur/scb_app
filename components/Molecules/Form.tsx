"use client";
import { addNewContact } from "@/app/actions/addNewContact";
import { updateContact } from "@/app/actions/updateContact";
import { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import { useParams, useRouter } from "next/navigation";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favorite: boolean;
  id: string;
}

interface Props {
  formData?: FormData;
}

export default function Form({ formData: initialData }: Props) {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      id: "",
      favorite: false,
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (id) {
        await updateContact(id as string, formData);
        //ubaci neki success message
      } else {
        await addNewContact(formData);
        router.push("/");
      }
    } catch (error: any) {
      throw new Error("Error submitting the form", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: name === "favorite" ? checked : value,
    });
  };

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone number</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="favorite">Add to favorites</label>
      <input
        type="checkbox"
        name="favorite"
        checked={formData.favorite}
        onChange={handleChange}
      />
      <Button label="Add or edit contact" type="submit" />
    </form>
  );
}
