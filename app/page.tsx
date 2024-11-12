import SearchFilterSort from "@/components/Organism/SearchFilterSort";
import { getAllContacts } from "./actions/getAllContacts";
import ContactsList from "@/components/Molecules/ContactList";

async function Home() {
  const contacts = await getAllContacts();

  return (
    <>
      <h1>Contact List</h1>
      <ContactsList contacts={contacts} />
    </>
  );
}

export default Home;
