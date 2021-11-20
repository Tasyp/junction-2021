import React from "react";

import { Dashboard } from "../containers";
import { Apartment, getApartmentServerSideProps } from "../lib/api";

interface Props {
  apartment: Apartment;
  index: string;
}

function IndexPage({ apartment }: Props) {
  return <Dashboard apartment={apartment} />;
}

export const getServerSideProps = getApartmentServerSideProps;

export default IndexPage;
