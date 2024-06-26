import { Env } from "@/types";

const env: Env = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
  CURRENT_LANGUAGE: "en",
  NODE_ENV: process.env.NODE_ENV,
  // Can add secrets this way
  GOOGLE_CLIENT_ID: "",
};

export default env;
