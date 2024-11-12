import { FormData } from "@/components/Molecules/Form";

export const updateContact = async (id: string, form: FormData) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
