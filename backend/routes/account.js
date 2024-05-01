import db from "../db/connection.js";
import express from "express";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
const router = express.Router();
const auth = (req, res, next) => {};

router.get("/", async (req, res) => {
  let collection = await db.collection("account");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let query = { _id: new ObjectId(req.params.id) };
  let collection = await db.collection("account");
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  try {
    let acc = {
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
    };
    let collection = await db.collection("account");
    let finded = await collection.findOne({ username: acc.username });
    if (finded) {
      res.send({ message: "username sudah dipakai" }).status(500);
    } else {
      const password = await bcrypt.hash(acc.password, 10);
      acc.password = password;
      const result = await collection.insertOne(acc);
      res.send(result).status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error adding account");
  }
});

router.post("/login", async (req, res) => {
  let acc = {
    username: req.body.username,
    password: req.body.password,
  };
  let collection = await db.collection("account");
  let finded = await collection.findOne({ username: acc.username });
  const passwordMatch = await bcrypt.compare(acc.password, finded.password);
  if (passwordMatch) {
    let token = jwt.sign(finded, "secretkey", { expiresIn: "1h" });
    console.log("ini bener jir");
    res.send({ token: token }).status(200);
  } else {
    const message = "Akun sudah pernah dibuat";
    res.send(message).status(500);
  }
});

export default router;
