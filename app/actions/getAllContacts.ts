export async function getAllContacts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contacts`
    );
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
