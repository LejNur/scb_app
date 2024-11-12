import ContactsList from "@/components/Organism/ContactsList";
import { getFavorites } from "../actions/getFavorites";

async function Favorites() {
  const favorites = await getFavorites();

  return (
    <>
      <h1>Contact List</h1>

      <ContactsList contacts={favorites} />
    </>
  );
}

export default Favorites;
