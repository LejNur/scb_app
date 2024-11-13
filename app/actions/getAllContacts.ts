export async function getAllContacts() {
  try {
    const res = await fetch("http://localhost:3000/api/contacts");
    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}
