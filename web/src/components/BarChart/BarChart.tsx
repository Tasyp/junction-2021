import React from "react";

import styles from "./BarChart.module.css";

interface Props {
  title: string;
  from: number;
  to: number;
  className?: string;
}

export const BarChart: React.FunctionComponent<Props> = ({
  title,
  from,
  to,
  className,
}) => {
  const filledAmount = `${getFilledAmount(from, to)}%`;

  return (
    <div className={className}>
      <span className={styles.title}>{title}</span>
      <div className={styles.chart}>
        <div className={styles.from} style={{ width: filledAmount }}>
          <span>{filledAmount}</span>
        </div>
      </div>
    </div>
  );
};

const getFilledAmount = (from: number, to: number): number => (from * 100) / to;
