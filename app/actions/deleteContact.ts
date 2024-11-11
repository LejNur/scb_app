export const deleteContact = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contact/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
