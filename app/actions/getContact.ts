export async function getContact(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Something went wrong");
    }
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
