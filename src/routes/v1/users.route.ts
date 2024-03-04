import express from "express";
import { DeleteUser, GetCurrentUserDetails, PutUserDetails } from "../../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.get("/me", GetCurrentUserDetails);
usersRouter.put("/:id", PutUserDetails);
usersRouter.delete("/:id", DeleteUser);

export default usersRouter;
