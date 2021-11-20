import React from "react";

import { BarChart, CoinsButton, IndexIndicator } from "../../components";
import { Apartment, apartmentData } from "../../lib/api";

import { AchievementsContainer } from "../Achievements/Achievements";

import styles from "./Dashboard.module.css";

interface Props {
  apartment: Apartment;
}

export const Dashboard: React.FunctionComponent<Props> = ({ apartment }) => {
  const { statistics: { week } } = apartment;
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <a className={styles.invisibleLink} href="/my-consumption">
          <span className={styles.indexTitle}>Green index</span>
          <IndexIndicator indexValue={week.green_index} />
        </a>
        <CoinsButton coinCount={apartment.green_coin_count} className={styles.coinsButton} />
      </div>
      <AchievementsContainer badges={apartmentData.badges} />
      <div className={styles.chartContainer}>
        <BarChart
          className={styles.bar}
          title={"neighborhood"}
          from={week.neighborhood_index}
          to={100}
        />
        <BarChart
          className={styles.bar}
          title={"country"}
          from={week.country_index}
          to={100}
        />
        <BarChart
          className={styles.bar}
          title={"Sixfold (company-wide)"}
          from={week.company_index}
          to={100}
        />
      </div>
    </div>
  );
};
