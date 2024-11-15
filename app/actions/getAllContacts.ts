export async function getAllContacts() {
  try {
    const res = await fetch(`/api/contacts`);
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
