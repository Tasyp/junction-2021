const dev = process.env.NODE_ENV !== "production";

export const baseEndpointAPI = dev
  ? "http://localhost:3000"
  : "https://junction-2021.vercel.app";
