import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./src/router/index.js";
import cors from "cors";
dotenv.config();
const corsOptions = {
  origin: "*",
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));

app.use("/api/v1", router());

app.listen(process.env.PORT, () => {
  console.log(" Server Ok!");
});
