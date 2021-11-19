import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({ name: "Diesel" });
}
