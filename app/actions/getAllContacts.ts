export async function getAllContacts() {
  try {
    const res = await fetch("http://localhost:3000/api/contacts");
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
