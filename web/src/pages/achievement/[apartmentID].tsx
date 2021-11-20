import React from "react";

import { NextPageContext } from "next";

import { Apartment, fetchApartment } from "../../lib/api";
import { takeFirst } from "../../lib/util";

interface Props {
  apartment: Apartment;
}

function AchievementPage({ apartment }: Props) {
  return (
    <>
      <h1>Achievements of #{apartment.apartmentID}</h1>
      <div>{apartment.badges.length}</div>
    </>
  );
}

export async function getServerSideProps({ query }: NextPageContext) {
  const { apartmentID } = query;

  const data = await fetchApartment(takeFirst(apartmentID));
  return {
    props: { apartment: data.apartment },
  };
}

export default AchievementPage;
