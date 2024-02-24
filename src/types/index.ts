declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRE: string;
    }
  }
}
