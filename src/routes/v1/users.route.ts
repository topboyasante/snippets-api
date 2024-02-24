import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", () => {});
usersRouter.get("/me", () => {});
usersRouter.get("/:id", () => {});
usersRouter.put("/:id", () => {});
usersRouter.delete("/:id", () => {});

export default usersRouter;
