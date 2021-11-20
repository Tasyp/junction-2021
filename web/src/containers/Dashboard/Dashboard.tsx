import React from "react";

import { BarChart, IndexIndicator } from "../../components";
import { Apartment, apartmentData } from "../../lib/api";

import { AchievementsContainer } from "../Achievements/Achievements";

import styles from "./Dashboard.module.css";

interface Props {
  apartment: Apartment;
}

export const Dashboard: React.FunctionComponent<Props> = ({ apartment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <a href="/my-consumption">
          <span className={styles.indexTitle}>Green index</span>
          <IndexIndicator indexValue={apartment.statistics.green_index} />
        </a>
      </div>
      <AchievementsContainer badges={apartmentData.badges}  />
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
