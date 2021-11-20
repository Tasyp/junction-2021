import React from "react";

import {BarChart, IndexIndicator} from "../components";
import {Badges, Type} from "../components/Badge/Badges";

const IndexPage: React.FunctionComponent = () => (
  <div>
    <IndexIndicator />
    <Badges badges={[{type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}, {type: Type.NOVEMBER_CHALLENGE}]} />
    <div style={{ background: "rgba(196, 196, 196, 0.1)" }}>
      <BarChart title={"neighborhood"} from={25} to={50} />
      <BarChart title={"country"} from={33} to={50} />
      <BarChart title={"Sixfold (company-wide)"} from={25} to={100} />
    </div>
  </div>
);

export default IndexPage;
