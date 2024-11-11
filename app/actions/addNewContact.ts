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
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
