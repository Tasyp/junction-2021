import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { Apartment } from "../../lib/api";

import styles from "./IndexCoins.module.css";

interface Props {
  apartment: Apartment;
}

export const IndexCoins: React.FunctionComponent<Props> = ({ apartment }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Amount of coins</span>
      <div className={styles.coin}>
        <span className={styles.coinCount}>{apartment.green_coin_count}</span>
        <img className={styles.coinIcon} src="/green-index.png" />
      </div>
      <div className={styles.tip}>
        <div className={styles.tipTitle}>Tip of the day</div>
        <div className={styles.tipDescription}>
          “We’ve noticed that your shower uses more than 12 liters of water per
          minute. If you reduce your daily shower from 10 minutes to 5,
          you&#39;ll cut your water consumption with 22 thousand liters every
          year.”
        </div>
      </div>
      <div className={styles.graph}>
        <ResponsiveContainer
          className={styles.graphContainer}
          width="100%"
          height="100%"
        >
          <BarChart data={apartment.weekly_consumption}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="index" fill="#345587" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.continueGame}>
        <div className={styles.continueOverlay}>Continue playing</div>
      </div>
    </div>
  );
};
