import { NextPageContext } from "next";

import { baseEndpointAPI } from "../config";

import { takeFirst } from "./util";

export const apartmentData = {
  apartmentID: "99",
  people_count: 3,
  statistics: {
    green_index: 30,
  },
  badges: [
    {
      name: "december_challenge",
      title: "December Challenge",
      img: "/december-challenge.png",
      description: "Reduce water usage by 500 liters",
      received_at: "2020-01-01T09:00:18",
      progress: 10,
    },
    {
      name: "monthly_challenge",
      title: "Monthly Challenge",
      img: "/monthly-challenge.png",
      description: "Reduce water usage by 400 liters",
      progress: 24,
    },
    {
      name: "perfect_week",
      title: "Perfect Week",
      img: "/perfect-week.png",
      description: "Reduce water usage by 400 liters",
      progress: 70,
    },
    {
      name: "new_record",
      title: "New Record",
      img: "/new-record.png",
      description: "Reduce water usage by 400 liters",
      progress: 10,
    },
    {
      name: "you_are_the_best",
      title: "You are the Best",
      img: "/you-are-the-best.png",
      description: "Reduce water usage by 400 liters",
      progress: 88,
    },
  ],
  devices: [
    {
      order: 1,
      name: "Dishwasher",
      statistics: {
        week_pct: 10,
        month_pct: 30,
        year_pct: 40,
      },
    },
    {
      order: 2,
      name: "Shower",
      statistics: {
        week_pct: 70,
        month_pct: 10,
        year_pct: 40,
      },
    },
    {
      order: 3,
      name: "Toilet",
      statistics: {
        week_pct: 14,
        month_pct: 21,
        year_pct: 34,
      },
    },
    {
      order: 4,
      name: "Kitchen faucet",
      statistics: {
        week_pct: 45,
        month_pct: 14,
        year_pct: 42,
      },
    },
    {
      order: 5,
      name: "Washing machine",
      statistics: {
        week_pct: 45,
        month_pct: 22,
        year_pct: 56,
      },
    },
    {
      order: 6,
      name: "Bathroom faucet",
      statistics: {
        week_pct: 5,
        month_pct: 12,
        year_pct: 66,
      },
    },
  ],
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

export async function getApartmentServerSideProps({ query }: NextPageContext) {
  const { apartmentID } = query;

  const data = await fetchApartment(takeFirst(apartmentID));
  return {
    props: { apartment: data.apartment },
  };
}
