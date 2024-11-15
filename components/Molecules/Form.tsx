"use client";
import { addNewContact } from "@/app/actions/addNewContact";
import { updateContact } from "@/app/actions/updateContact";
import { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import { useParams, useRouter } from "next/navigation";
import Toast from "../Atoms/Toast";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favorite: boolean;
  id: string;
}

interface Props {
  formData?: FormData;
}

export default function Form({ formData: initialData }: Props) {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(
    initialData || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      id: "",
      favorite: false,
    }
  );
  const [errors, setErrors] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      try {
        await updateContact(id as string, formData);
        setToastVisible(true);
        setMessage(`${formData.firstName} successfully updated!`);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (error) {
        if (error instanceof Error) setErrors(error.message);
      }
    } else {
      try {
        await addNewContact(formData);
        setToastVisible(true);
        setMessage(
          `${formData.firstName} ${formData.lastName}
           successfully added to your contacts list!`
        );
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } catch (error) {
        if (error instanceof Error) setErrors(error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: name === "favorite" ? checked : value,
    });
  };

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  return (
    <>
      {toastVisible && (
        <Toast
          message={message}
          className=" text-forestGreen bg-successGreen"
        />
      )}
      {errors && (
        <Toast
          message={errors}
          className=" text-dangerRed bg-dangerRedDark bg-opacity-70"
          onClose={() => {
            setToastVisible(false);
            setErrors("");
          }}
        />
      )}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 mt-10">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="block py-2.5 px-0 w-full text-sm text-softWhite bg-transparent border-0 border-b-2  appearance-none dark:text-softWhite focus:outline-none focus:ring-0 focus:border-chartreuse peer"
            placeholder=""
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <label
            htmlFor="firstName"
            className="peer-focus:font-medium absolute text-sm text-softWhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-chartreuseDarker  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-opacity-60"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="block py-2.5 px-0 w-full text-sm text-softWhite bg-transparent border-0 border-b-2  appearance-none dark:text-softWhite focus:outline-none focus:ring-0 focus:border-chartreuse peer"
            placeholder=" "
            required
            value={formData.lastName}
            onChange={handleChange}
          />
          <label
            htmlFor="lastName"
            className="peer-focus:font-medium absolute text-sm text-softWhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-chartreuseDarker  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-opacity-60"
          >
            Last Name
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-softWhite bg-transparent border-0 border-b-2  appearance-none dark:text-softWhite focus:outline-none focus:ring-0 focus:border-chartreuse peer"
              placeholder=" "
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-softWhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-chartreuseDarker  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-opacity-60"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="phone"
              id="phone"
              pattern="\d{2,3}-\d+"
              className="block py-2.5 px-0 w-full text-sm text-softWhite bg-transparent border-0 border-b-2  appearance-none dark:text-softWhite focus:outline-none focus:ring-0 focus:border-chartreuse peer"
              placeholder=" "
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-softWhite duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-chartreuseDarker  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-opacity-60"
            >
              Phone number (123-456789)
            </label>
          </div>
        </div>

        <div className="inline-flex items-center">
          <label
            className="flex items-center cursor-pointer relative"
            htmlFor="check-2"
          >
            <input
              type="checkbox"
              name="favorite"
              checked={formData.favorite}
              onChange={handleChange}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-softWhite checked:bg-chartreuse checked:border-chartreuseDarker"
              id="check-2"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="smokyBlack"
                stroke="smokyBlack"
                strokeWidth="2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="cursor-pointer ml-2 text-softWhite text-opacity-60 text-sm"
            htmlFor="check-2"
          >
            Add to favorites
          </label>
        </div>

        <Button
          label="Submit"
          type="submit"
          className="block my-4 text-smokyBlack bg-chartreuse hover:bg-chartreuseDarker focus:ring-4 focus:outline-none focus:ring-chartreuse font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  "
        ></Button>
      </form>
    </>
  );
}
