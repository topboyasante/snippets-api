import type { Request, Response } from "express";
import { deleteUser, getUserById, isUserExists, updateUser } from "../services/users.service";
import type { IUserParams, IUserUpdate } from "../types";
import { userUpdateSchema } from "../schema/users.schema";
import { ZodError } from "zod";

export async function GetCurrentUserDetails(req: Request, res: Response) {
  try {
    const { id } = req.user;

    const user = await getUserById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export async function PutUserDetails(
  req: Request<
    IUserParams, 
    Record<string, never>, 
    IUserUpdate
  >, 
  res: Response
) {
  const body = req.body;
  const { id } = req.params;

  try {
    const userDetails = await userUpdateSchema.parseAsync(body);

    const currentUser = req.user;
    const isExist = await isUserExists({ id: currentUser.id });
    if (!isExist) {
      return res.status(404).send({ error: "User not found" });
    }

    if (id !== currentUser.id) {
      return res.status(403).send({ 
        error: "User not authorized to perform this action" 
      });
    }

    const updatedUser = await updateUser(id, userDetails);

    return res.status(200).send(updatedUser);
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).send(error);
    }
    return res.status(500).send({ error });
  }
}

export async function DeleteUser(req: Request<IUserParams>, res: Response) {
  const { id } = req.params;

  try {
    const currentUser = req.user;
    const isExist = await isUserExists({ id: currentUser.id });
    if (!isExist) {
      return res.status(404).send({ error: "User not found" });
    }

    if (id !== currentUser.id) {
      return res.status(403).send({ 
        error: "User not authorized to perform this action" 
      });
    }

    await deleteUser(id);

    return res.status(200).send({ message: "User deleted" });
  } catch (error) {
    return res.status(500).send({ error });
  }
}