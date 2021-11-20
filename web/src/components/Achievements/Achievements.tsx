import React from "react";
import Image from "next/image";

import styles from "./Achievements.module.css";

interface Props {
  achievements: {
    name: string;
    title: string;
    img: string;
    description?: string;
    received_at?: string;
  }[];
}

export const Achievements: React.FunctionComponent<Props> = ({
  achievements,
}) => (
  <div className={styles.container}>
    <h2 className={styles.heading}>Achievements</h2>
    <div className={styles.achievementsContainer}>
      {achievements.map(({ name, title, img, description }) => (
        <div key={name} className={styles.achievementContainer}>
          <Image
            width={85}
            height={77}
            className={styles.badgeImage}
            src={img}
          />
          <div className={styles.achievementText}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <ProgressBar amount={15} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

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
