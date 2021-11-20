import React from "react";

import { Dashboard } from "../containers";
import { Apartment, fetchApartment } from "../lib/api";

const IndexPage = ({ apartment }: { apartment: Apartment }) => {
  return (
    <>
      <Dashboard apartment={apartment} />
      <style global jsx>{`
        html,
        body,
        #__next {
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const data = await fetchApartment("12");
  return {
    props: { apartment: data.apartment },
  };
}

export default IndexPage;
