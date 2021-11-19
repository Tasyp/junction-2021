import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_request: NextApiRequest, response: NextApiResponse) {
  response
    .status(200)
    .json({
      "statistics": {
        "green_index": 30
      },
      "badges": [
        {
          "name": "November challenge",
          "received_at": "2020-01-01T09:00:18"
        },
        {
          "name": "December challenge"
        }
      ],
      "people_count": 3,
      "devices": {
        "name": "Kitchen dishwasher",
        "measurements": [
          {
            "Consumption": "11.569686",
            "Temp": "35.99203",
            "FlowTime": "56.762955",
            "Power_Consumption": "0.4183294",
            "TimeStamp": "2020-01-01T09:00:18"
          },
          {
            "Consumption": "56.70452",
            "Temp": "39.444153",
            "FlowTime": "287.90256",
            "Power_Consumption": "2.2786624",
            "TimeStamp": "2020-01-01T10:50:50"
          },
          {
            "Consumption": "36.05037",
            "Temp": "39.709408",
            "FlowTime": "215.50906",
            "Power_Consumption": "1.4598348",
            "TimeStamp": "2020-01-01T23:34:59"
          },
          {
            "Consumption": "24.071253",
            "Temp": "40.37769",
            "FlowTime": "148.69801",
            "Power_Consumption": "0.99351615",
            "TimeStamp": "2020-01-03T23:47:24"
          }
        ]
      }
    }
    );
}