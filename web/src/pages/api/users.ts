import path from "path";
import { readFileSync } from "fs";

import { NextApiRequest, NextApiResponse } from "next";

const orasDataDirPath = path.join("public", "raw-oras-data.json");
const orasDataDB = readFileSync(orasDataDirPath, "utf-8");

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json(orasDataDB);
}
