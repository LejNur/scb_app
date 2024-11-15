import ContactsList from "@/components/Organism/ContactsList";
import { getFavorites } from "../actions/getFavorites";
export const dynamic = "force-dynamic";

export default async function Favorites() {
  const favorites = await getFavorites();

  return (
    <>
      <ContactsList contacts={favorites} />
    </>
  );
}
