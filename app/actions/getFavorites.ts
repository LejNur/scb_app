export async function getFavorites() {
  try {
    const res = await fetch("http://localhost:3000/api/favorites");

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}
