import Prisma from "../lib/prisma";
import type { IUserCreate } from "../types";

export const createUser = async (user: IUserCreate) => {
  const newUser = await Prisma.users.create({
    data: {
      ...user,
    },
  });
  
  return newUser;
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
