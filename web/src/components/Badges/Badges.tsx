import React from "react";
import Image from "next/image";

import styles from "./Badges.module.css";

interface Props {
  badges: {
    name: string;
    title: string;
    img: string;
    description: string;
    received_at?: string;
  }[];
}

export const Badges: React.FunctionComponent<Props> = ({ badges }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Join a Badge Challenge</h2>
    <div className={styles.badgesContainer}>
      {badges.map(({ name, img, title }) => (
        <div key={name} className={styles.badgeContainer}>
          <Image
            width={50}
            height={50}
            className={styles.badgeImage}
            src={img}
          />
          <p className={styles.badgeTitle}>{title}</p>
        </div>
      ))}
    </div>
  </div>
);
