export async function getContact(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`);
    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}
