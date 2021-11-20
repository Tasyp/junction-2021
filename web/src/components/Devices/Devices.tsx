import React from "react";

import styles from "./Devices.module.css";

interface Props {
  devices: {
    order: number;
    name: string;
    statistics: {
      week_pct: number;
      month_pct: number;
      year_pct: number;
    };
  }[];
  time: "week_pct" | "month_pct" | "year_pct";
}

export const Devices: React.FunctionComponent<Props> = ({ devices, time }) => {
  return (
    <div className={styles.container}>
      {devices.map(({ name, statistics }) => (
        <div key={name} className={styles.device}>
          <span className={styles.deviceName}>{name}</span>
          <ProgressBar amount={statistics[time]} />
        </div>
      ))}
      <span className={styles.indexCaption}>
            *Learn more about my consuption index
          </span>
    </div>
  );
};

const ProgressBar: React.FunctionComponent<{ amount: number }> = ({
  amount,
}) => (
  <div className={styles.progressContainer}>
    <span className={styles.amount}>{amount}%</span>
    <div className={styles.progress}>
      <div className={styles.progressBar} style={{ width: `${amount}%` }} />
    </div>
  </div>
);
