import express from "express";
import { PostAuthRefresh, PostAuthSignUp, getUsernameExistStatus, postAuthLogin } from "../../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post("/login", postAuthLogin);
authRouter.post("/signup", PostAuthSignUp);
authRouter.get("/is-username-exists", getUsernameExistStatus);
authRouter.post("/refresh", PostAuthRefresh);

export default authRouter;
