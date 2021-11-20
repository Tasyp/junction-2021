import React from "react";

import classnames from "classnames";

import { Devices } from "../../components/Devices";
import { Apartment } from "../../lib/api";

import styles from "./MyConsumption.module.css";

interface Props {
  apartment: Apartment;
}

export const MyConsumptionContainer: React.FunctionComponent<Props> = ({
  apartment,
}) => {
  const [time, setTime] = React.useState<"week_pct" | "month_pct" | "year_pct">(
    "week_pct"
  );

  return (
    <>
      <h1 className={styles.heading}>My consumption</h1>
      <div className={styles.container}>
        <Devices devices={apartment.devices} time={time} />
        <p className={styles.timeControls}>
          <span
            className={classnames(styles.timeControl, {
              [styles.timeActive]: time === "week_pct",
            })}
            onClick={() => setTime("week_pct")}
          >
            Week
          </span>
          <span className={styles.timeControl}>/</span>
          <span
            className={classnames(styles.timeControl, {
              [styles.timeActive]: time === "month_pct",
            })}
            onClick={() => setTime("month_pct")}
          >
            Month
          </span>
          <span className={styles.timeControl}>/</span>
          <span
            className={classnames(styles.timeControl, {
              [styles.timeActive]: time === "year_pct",
            })}
            onClick={() => setTime("year_pct")}
          >
            Year
          </span>
        </p>
      </div>
    </>
  );
};
