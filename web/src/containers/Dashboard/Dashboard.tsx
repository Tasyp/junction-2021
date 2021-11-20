import React from "react";

import { BarChart, IndexIndicator } from "../../components";
import { Apartment } from "../../lib/api";

import styles from "./Dashboard.module.css";

export const Dashboard = ({ apartment }: { apartment: Apartment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <IndexIndicator indexValue={apartment.statistics.green_index} />
      </div>
      <div className={styles.chartContainer}>
        <BarChart title={"neighborhood"} from={25} to={50} />
        <BarChart title={"country"} from={33} to={50} />
        <BarChart title={"Sixfold (company-wide)"} from={25} to={100} />
      </div>
    </div>
  );
};
