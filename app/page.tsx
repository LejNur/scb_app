import { getAllContacts } from "./actions/getAllContacts";
import ContactsList from "@/components/Organism/ContactsList";

export default async function Home() {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    return null;
  }
  const contacts = await getAllContacts();

  return (
    <>
      <ContactsList contacts={contacts} />
    </>
  );
}
