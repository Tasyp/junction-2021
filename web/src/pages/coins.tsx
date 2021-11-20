import React from "react";

import { IndexCoins } from "../containers";
import { Apartment, getApartmentServerSideProps } from "../lib/api";

interface Props {
  apartment: Apartment;
}

function CoinsPage({ apartment }: Props) {
  return <IndexCoins apartment={apartment} />;
}

export const getServerSideProps = getApartmentServerSideProps;

export default CoinsPage;
