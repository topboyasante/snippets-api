import express from "express";

const SnippetsRouter = express.Router();

SnippetsRouter.get("/", () => {});
SnippetsRouter.post("/", () => {});
SnippetsRouter.get("/:id", () => {});
SnippetsRouter.put("/:id", () => {});
SnippetsRouter.delete("/:id", () => {});

export default SnippetsRouter;