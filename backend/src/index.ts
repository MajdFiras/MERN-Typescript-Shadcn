import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

/* MIDDLEWARE : Auto convert the body from request to json  */
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
