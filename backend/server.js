import express from "express";
import cors from "cors";
import record from "./routes/routes.js";
import account from "./routes/account.js";
import session from "express-session";
const app = express();
const PORT = process.env.PORT || "";

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "this-secret-nugget",
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/record", record);
app.use("/account", account);

app.listen(PORT, () => {
  console.log(`Server start at ${PORT}`);
});
