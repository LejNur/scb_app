export const deleteContact = async (id: string) => {
  try {
    const res = await fetch(`/api/contact/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Something went wrong");
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
