import { NextApiRequest, NextApiResponse } from "next";
import { apartmentData } from "../../../lib/api";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { apartment } = request.query;

  response.status(200).json({
    ...apartmentData,
    apartmentID: apartment,
  });
}
