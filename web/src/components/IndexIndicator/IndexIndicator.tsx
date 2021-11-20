import React from "react";

import styles from "./IndexIndicator.module.css";

interface Props {
  indexValue: number;
}

export const IndexIndicator: React.FunctionComponent<Props> = ({
  indexValue,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.indicator}>{indexValue}%</div>
    </div>
  );
};
