import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import v1_api from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  return res.send("Snippets API v1.0.0");
});

app.use("/v1", v1_api);

export default app;
