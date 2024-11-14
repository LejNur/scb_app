interface NewContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const addNewContact = async (form: NewContact) => {
  try {
    const res = await fetch("http://localhost:3000/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
