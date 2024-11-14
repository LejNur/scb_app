export const dynamic = "force-dynamic";
import ContactsList from "@/components/Organism/ContactsList";
import { getFavorites } from "../actions/getFavorites";

export default async function Favorites() {
  const favorites = await getFavorites();

  return (
    <>
      <ContactsList contacts={favorites} />
    </>
  );
}
