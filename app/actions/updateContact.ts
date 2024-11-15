import { FormData } from "@/components/Molecules/Form";

export const updateContact = async (id: string, form: FormData) => {
  try {
    const res = await fetch(`/api/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
