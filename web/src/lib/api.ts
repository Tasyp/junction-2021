import { baseEndpointAPI } from "../config";

export const apartmentData = {
  statistics: {
    green_index: 30,
  },
  badges: [
    {
      name: "november_challenge",
      title: "November Challenge",
      description: "Reduce water usage by 500 liters",
      received_at: "2020-01-01T09:00:18",
    },
    {
      name: "december_challenge",
      title: "December Challenge",
      description: "Reduce water usage by 400 liters",
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
};

export type Apartment = typeof apartmentData;

interface ApartmentFetchResponse {
  error: Error | undefined;
  apartment: Apartment | [];
}

export async function fetchApartment(
  id: string
): Promise<ApartmentFetchResponse> {
  try {
    const url = new URL(`/api/apartments/${id}`, baseEndpointAPI);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (!data) {
      return {
        error: new Error("Not found"),
        apartment: [],
      };
    }

    return {
      error: undefined,
      apartment: data,
    };
  } catch (error) {
    return {
      error: error as Error,
      apartment: [],
    };
  }
}
