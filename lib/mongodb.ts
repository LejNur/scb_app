// import mongoose from "mongoose";

// declare global {
//   var mongoose: any;
// }

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGO_URI environment variable inside .env.local"
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectToDatabase;
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "your-mongodb-uri-here";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
