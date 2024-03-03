import express from "express";
import authRouter from "./v1/auth.route";

const v1_api = express.Router();

v1_api.use("/auth", authRouter);

export default v1_api;