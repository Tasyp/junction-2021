import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json({
    statistics: {
      green_index: 30,
    },
    badges: [
      {
        name: "November challenge",
        received_at: "2020-01-01T09:00:18",
      },
      {
        name: "December challenge",
      },
    ],
    people_count: 3,
    devices: {
      name: "Kitchen dishwasher",
      measurements: [
        {
          consumption: "11.569686",
          temp: "35.99203",
          flow_time: "56.762955",
          power_consumption: "0.4183294",
          timestamp: "2020-01-01T09:00:18",
        },
        {
          consumption: "56.70452",
          temp: "39.444153",
          flow_time: "287.90256",
          power_consumption: "2.2786624",
          timestamp: "2020-01-01T10:50:50",
        },
        {
          consumption: "36.05037",
          temp: "39.709408",
          flow_time: "215.50906",
          power_consumption: "1.4598348",
          timestamp: "2020-01-01T23:34:59",
        },
        {
          consumption: "24.071253",
          temp: "40.37769",
          flow_time: "148.69801",
          power_consumption: "0.99351615",
          timestamp: "2020-01-03T23:47:24",
        },
      ],
    },
  });
}
