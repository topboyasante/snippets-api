import Prisma from "../lib/prisma";
import { userUpdateSchema } from "../schema/users.schema";
import type { IUserCreate, IUserUpdate } from "../types";


export const getUserById = async (id: string) => {
  const user = await Prisma.users.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const createUser = async (user: IUserCreate) => {
  const newUser = await Prisma.users.create({
    data: {
      ...user,
    },
  });
  
  return newUser;
};

export const updateUser = async (id: string, user: IUserUpdate) => {
  const updatedUser = await Prisma.users.update({
    where: {
      id,
    },
    data: {
      ...user,
    },
  });

  const parsedUpdatedUser = userUpdateSchema.parse(updatedUser);
  return parsedUpdatedUser;
};

export const isUserExists = async (user: { id?: string; email?: string }) => {
  return !!(await Prisma.users.findUnique({
    where: {
      id: user.id,
      email: user.email,
    },
    select: {
      id: true,
    },
  }));
};

export const getUserByEmail = async (email: string) => {
  const user = await Prisma.users.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const isUsernameExists = async (username: string) => {
  return !!(await Prisma.users.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  }));
};

export const deleteUser = async (id: string) => {
  const deletedUser = await Prisma.users.delete({
    where: {
      id,
    },
  });

  return deletedUser;
};