import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favorite?: boolean;
  id: string;
}

const contactSchema = new Schema<IContact>({
  firstName: {
    type: String,
    minlength: 3,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    minlength: 3,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  phone: {
    type: String,
    minLength: 8,
    maxlength: 12,
    validate: {
      validator: function (v) {
        return /^\d{2,3}-\d+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
    required: [true, "User phone number is required"],
  },
  favorite: {
    type: Boolean,
    required: false,
  },
});

contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);

export default Contact;
