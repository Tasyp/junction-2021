import { NextApiRequest, NextApiResponse } from "next";

import { generateApartment } from "../../lib/api";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json(generateApartment(100));
}
