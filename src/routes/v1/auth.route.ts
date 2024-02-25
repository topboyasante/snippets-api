import express from "express";

const authRouter = express.Router();

authRouter.post("/login", () => {});
authRouter.post("/signup", () => {});
authRouter.get("/is-username-exists", () => {});
authRouter.get("/refresh", () => {});

export default authRouter;
