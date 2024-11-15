export async function getContact(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/contact/${id}`
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Something went wrong");
    }
    return res.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}
