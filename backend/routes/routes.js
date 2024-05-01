import db from "../db/connection.js";
import { ObjectId } from "mongodb";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.originalname);
  },
});

const Upload = multer({ storage: storage });
// book
router.get("/", async (req, res) => {
  let collection = await db.collection("books");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("books");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Books not found").status(404);
  else res.send(result).status(200);
});

router.post("/", Upload.single("image"), async (req, res) => {
  try {
    const imageName = req.file.filename;
    const body = { ...req.body, imageName };
    let collection = await db.collection("books");
    let result = await collection.insertOne(body);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding data");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: {
        title: req.body.title,
        writer: req.body.writer,
        year: req.body.year,
        language: req.body.language,
      },
    };
    let collection = await db.collection("books");
    let result = await collection.updateOne(query, update);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating data");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let query = { _id: new ObjectId(req.params.id) };
    let collection = await db.collection("books");
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting data");
  }
});

export default router;
