import { NextApiRequest, NextApiResponse } from "next";

import { apartmentData } from "../../lib/api";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json(apartmentData);
}
