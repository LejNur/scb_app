import ContactsList from "@/components/Molecules/ContactList";
import { getFavorites } from "../actions/getFavorites";

async function Home() {
  const favorites = await getFavorites();

  return (
    <>
      <h1>Contact List</h1>
      <ContactsList contacts={favorites}></ContactsList>
    </>
  );
}

export default Home;
