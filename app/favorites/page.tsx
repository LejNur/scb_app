import ContactsList from "@/components/Organism/ContactsList";
import { getFavorites } from "../actions/getFavorites";

async function Favorites() {
  const favorites = await getFavorites();

  return <ContactsList contacts={favorites} />;
}

export default Favorites;
