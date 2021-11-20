import React from "react";

import { BarChart, IndexIndicator } from "../../components";
import { Apartment, apartmentData } from "../../lib/api";

import { Badges } from "../../components/Badges";

import styles from "./Dashboard.module.css";

interface Props {
  apartment: Apartment;
}

export const Dashboard: React.FunctionComponent<Props> = ({ apartment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <span className={styles.indexTitle}>Green index</span>
        <IndexIndicator indexValue={apartment.statistics.green_index} />
      </div>
      <div className={styles.achievementsContainer}>
        <Badges badges={apartmentData.badges} />
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
