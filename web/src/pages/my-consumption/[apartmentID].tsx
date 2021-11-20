import React from "react";

import { Apartment, getApartmentServerSideProps } from "../../lib/api";
import { MyConsumptionContainer } from "../../containers/MyConsumption";

interface Props {
  apartment: Apartment;
}

function MyConsumptionPage({ apartment }: Props) {
  return <MyConsumptionContainer apartment={apartment} />;
}

export const getServerSideProps = getApartmentServerSideProps;

export default MyConsumptionPage;
