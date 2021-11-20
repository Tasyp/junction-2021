import React from "react";

import Image from "next/image";

import styles from "./BarChart.module.css";

interface Props {
  title: string;
}

export const GameButton: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.gameHeading}>{title}</h2>
      <Image layout="fill" alt="GameButton" src="/game-splash.png" />
    </div>
  );
};
