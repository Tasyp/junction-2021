import React from "react";

import { BarChart, IndexIndicator } from "../../components";
import { Apartment } from "../../lib/api";

import { Badges } from "../../components/Badge";
import { Type } from "../../components/Badge/Badges";

import styles from "./Dashboard.module.css";

export const Dashboard = ({ apartment }: { apartment: Apartment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <span className={styles.indexTitle}>Green index</span>
        <IndexIndicator indexValue={apartment.statistics.green_index} />
      </div>
      <div className={styles.achievementsContainer}>
        <Badges
          badges={[
            { type: Type.DECEMBER_CHALLENGE },
            { type: Type.MONTHLY_CHALLENGE },
            { type: Type.PERFECT_WEEK },
            { type: Type.NEW_RECORD },
            { type: Type.YOU_ARE_THE_BEST },
          ]}
        />
      </div>
      <div className={styles.chartContainer}>
        <BarChart
          className={styles.bar}
          title={"neighborhood"}
          from={25}
          to={50}
        />
        <BarChart className={styles.bar} title={"country"} from={33} to={50} />
        <BarChart
          className={styles.bar}
          title={"Sixfold (company-wide)"}
          from={25}
          to={100}
        />
      </div>
    </div>
  );
};
