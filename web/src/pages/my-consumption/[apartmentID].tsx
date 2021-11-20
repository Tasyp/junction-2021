import React from "react";

import { Apartment, getApartmentServerSideProps } from "../../lib/api";
import {IndexIndicator} from "../../components";

interface Props {
  apartment: Apartment;
}

function MyConsumptionPage({ apartment }: Props) {
  return (
    <>
      <h1>My consumption</h1>
      <div>
          <div>
              {apartment.devices.map(() => {})}
          </div>
          <IndexIndicator indexValue={apartment.statistics.green_index} />
      </div>
    </>
  );
}

export const getServerSideProps = getApartmentServerSideProps;

export default MyConsumptionPage;
