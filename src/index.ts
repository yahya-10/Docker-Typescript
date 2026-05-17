import express from "express";
import dotenv from "dotenv";

import { pool } from "./config/database.ts";
import { asyncHandler, errorHandler } from "./shared/ErrorRequestHandler.ts";

const app = express();

dotenv.config();
app.use(express.json());
app.use(errorHandler);

app.get(
  "/",
  asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  }),
);

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});
