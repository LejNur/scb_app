import { getAllContacts } from "./actions/getAllContacts";
import ContactsList from "@/components/Organism/ContactsList";

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
