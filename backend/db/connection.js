import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("Deploy success to your DB, connected to DB");
} catch (error) {
  console.log(error);
}

let db = client.db("library");

export default db;
