import classnames from "classnames";
import React from "react";

import { BarChart, CoinsButton, IndexIndicator } from "../../components";
import { Apartment } from "../../lib/api";

import { AchievementsContainer } from "../Achievements/Achievements";

import styles from "./Dashboard.module.css";

interface Props {
  apartment: Apartment;
}

export const Dashboard: React.FunctionComponent<Props> = ({ apartment }) => {
  const {
    statistics: { week },
  } = apartment;

  const isRed = week.green_index < 30;
  const isYellow = week.green_index > 30 && week.green_index < 70;
  return (
    <div className={styles.container}>
      <div
        onClick={() => (window.location.href = "/coins")}
        className={classnames(styles.indexContainer, {
          [styles.redState]: isRed,
          [styles.yellowState]: isYellow,
        })}
      >
        <div className={classnames(styles.indexLinkContainer)}>
          <span className={styles.indexTitle}>Green Index</span>
          <IndexIndicator indexValue={week.green_index} />
        </div>
        <div className={styles.coinsButton}>
          <CoinsButton coinCount={apartment.green_coin_count} />
        </div>
      </div>
      <AchievementsContainer badges={apartment.badges} />
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
          title={"Global"}
          from={week.company_index}
          to={100}
        />
      </div>
    </div>
  );
};
