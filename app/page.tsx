export const dynamic = "force-dynamic";
import ContactsList from "@/components/Organism/ContactsList";
import { getAllContacts } from "./actions/getAllContacts";

export default async function Home() {
  const contacts = await getAllContacts();

  return (
    <>
      <ContactsList contacts={contacts} />
    </>
  );
}
