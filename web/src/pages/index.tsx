import React from "react";

import { Dashboard } from "../containers";

const IndexPage: React.FunctionComponent = () => (
  <>
    <Dashboard />
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

export default IndexPage;
