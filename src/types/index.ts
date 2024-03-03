import type { z } from "zod";
import type { userCreateSchema, userLoginSchema } from "../schema/users.schema";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRE: string;
    }
  }
}

export type IUserLogin = z.infer<typeof userLoginSchema>;
export type IUserCreate = z.infer<typeof userCreateSchema>;