import React from "react";

import { Apartment, getApartmentServerSideProps } from "../lib/api";

interface Props {
  apartment: Apartment;
}

function MyConsumptionPage({ apartment }: Props) {
  return (
    <>
      <h1>Achievements {apartment.people_count}</h1>
      <div>dsa</div>
    </>
  );
}

export const getServerSideProps = getApartmentServerSideProps;

export default MyConsumptionPage;
