import React from "react";
import classNames from "classnames";

import styles from "./CoinsButton.module.css";

interface Props {
  className?: string;
  coinCount: number;
}

export const CoinsButton: React.FunctionComponent<Props> = ({
  className,
  coinCount,
}) => {
  return (
    <a className={classNames(styles.coinsButton, className)} href="/coins">
      {coinCount}
      <img className={styles.coinIcon} src="/green-index.png" />
    </a>
  );
};
