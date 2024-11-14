import { getAllContacts } from "./actions/getAllContacts";
import ContactsList from "@/components/Organism/ContactsList";

async function Home() {
  const contacts = await getAllContacts();

  return <ContactsList contacts={contacts} />;
}

export default Home;
