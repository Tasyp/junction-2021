import React from "react";

import { NextPageContext } from "next";

import { Apartment, fetchApartment } from "../../lib/api";
import { takeFirst } from "../../lib/util";
import { Achievements } from "../../components/Achievements";

interface Props {
  apartment: Apartment;
}

function AchievementPage({ apartment }: Props) {
  return <Achievements achievements={apartment.badges} />;
}

export async function getServerSideProps({ query }: NextPageContext) {
  const { apartmentID } = query;

  const data = await fetchApartment(takeFirst(apartmentID), 100);
  return {
    props: { apartment: data.apartment },
  };
}

export default AchievementPage;
