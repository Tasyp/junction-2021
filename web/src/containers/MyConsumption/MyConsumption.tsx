import React from "react";
import classnames from "classnames";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

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

  const data = apartment.devices.map((device) => ({
    subject: device.name,
    index: device.order,
  }));

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
      <div className={styles.graph}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="index"
              stroke="#345587"
              fill="#345587"
              fillOpacity={0.9}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
