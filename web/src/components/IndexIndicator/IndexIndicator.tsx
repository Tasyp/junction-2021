import classnames from "classnames";
import React from "react";

import styles from "./IndexIndicator.module.css";

interface Props {
  indexValue: number;
}

export const IndexIndicator: React.FunctionComponent<Props> = ({
  indexValue,
}) => {
  const isRed = indexValue < 30;
  const isYellow = indexValue > 30 && indexValue < 70;

  return (
    <div
      className={classnames(styles.container, {
        [styles.red]: isRed,
        [styles.yellow]: isYellow,
      })}
    >
      <div className={styles.indicator}>{indexValue}%</div>
    </div>
  );
};
