import express from "express";
import authRouter from "./v1/auth.route";
import usersRouter from "./v1/users.route";
import deserializeUser from "../middleware/deserializeUser";

const v1_api = express.Router();

v1_api.use("/auth", authRouter);
v1_api.use("/users", deserializeUser, usersRouter);


export default v1_api;