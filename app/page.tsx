import ContactsList from "@/components/Organism/ContactsList";
import { getAllContacts } from "./actions/getAllContacts";
export const dynamic = "force-dynamic";

export default async function Home() {
  const contacts = await getAllContacts();

  return (
    <>
      <ContactsList contacts={contacts} />
    </>
  );
}
