import React from "react";

import { Dashboard } from "../containers";
import { Apartment, fetchApartment } from "../lib/api";

interface Props {
  apartment: Apartment;
}

function IndexPage({ apartment }: Props) {
  return <Dashboard apartment={apartment} />;
}

export async function getServerSideProps() {
  const data = await fetchApartment("12");
  return {
    props: { apartment: data.apartment },
  };
}

export default IndexPage;
