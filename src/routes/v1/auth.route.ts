import express from "express";

const authRouter = express.Router();

authRouter.post("/login", () => {});
authRouter.post("/signup", () => {});
authRouter.get("/isUsernameExists", () => {});
authRouter.get("/refresh", () => {});

export default authRouter;
