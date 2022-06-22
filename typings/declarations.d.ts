declare module "*.scss";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_API_KEY: string;
    }
  }
}
