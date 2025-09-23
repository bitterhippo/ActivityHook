import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const uri = process.env.MONGO_URI!;
const client = new MongoClient(uri);
const dbName = "ActivityHookDB"; // choose your DB name
const collectionName = "githubActivity";

export async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return collection;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}

// Example: insert one activity document
export async function insertActivity(activity: any) {
  const collection = await connectDB();
  const result = await collection.insertOne(activity);
  console.log("Inserted document ID:", result.insertedId);
}

// Example: fetch all activity
export async function getAllActivities() {
  const collection = await connectDB();
  const docs = await collection.find({}).toArray();
  return docs;
}
