import { NextApiRequest, NextApiResponse } from "next";

import { generateApartment } from "../../../lib/api";
import { arrayStrToNumber } from "../../../lib/util";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { apartment, indexLimit } = request.query;
  const index = Math.min(arrayStrToNumber(indexLimit, 100), 100);

  response.status(200).json({
    ...generateApartment(index),
    apartmentID: apartment,
  });
}
