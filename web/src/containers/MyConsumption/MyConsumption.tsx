import React from "react";

import classnames from "classnames";

import { Devices } from "../../components/Devices";
import { IndexIndicator } from "../../components";
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
  const indexValue: "week" | "month" | "year" = React.useMemo(() => {
    switch (time) {
      case "week_pct":
        return "week";
      case "month_pct":
        return "month";
      case "year_pct":
        return "year";
    }
  }, [time]);

  return (
    <>
      <h1 className={styles.heading}>My consumption</h1>
      <div className={styles.container}>
        <Devices devices={apartment.devices} time={time} />
        <div className={styles.indexContainer}>
          <h2 className={styles.indexHeading}>Overall index*</h2>
          <IndexIndicator
            indexValue={apartment.statistics[indexValue].green_index}
          />
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
      </div>
    </>
  );
};
