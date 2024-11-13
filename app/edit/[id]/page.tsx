import { getContact } from "@/app/actions/getContact";
import Form from "@/components/Molecules/Form";
import React from "react";

interface Props {
  params: { id: string };
}

async function EditContact({ params }: Props) {
  const { id } = await params;
  const contact = await getContact(id);

  // const params = useParams<{ tag: string; id: string }>();
  // const id = params.id;

  // const [contact, setContact] = useState(null);

  // useEffect(() => {
  //   const fetchContact = async () => {
  //     if (params.id) {
  //       const contactData = await getContact(params.id);

  //       setContact(contactData);
  //     }
  //   };

  //   fetchContact();
  // }, [params.id]);

  // if (!contact) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Edit Contact</h1>
      <Form formData={contact} />
    </div>
  );
}
export default EditContact;
