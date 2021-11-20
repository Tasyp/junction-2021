import React from "react";
import Image from "next/image";

import styles from "./Achievements.module.css";
import {badgeContent, Type} from "../Badges/Badges";

interface Props {
  badges: {
    type: Type;
  }[];
}

export const Achievements: React.FunctionComponent<Props> = ({ badges }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>Join a Badge Challenge</h2>
    <div className={styles.badgesContainer}>
      {badges.map(({ type }) => (
        <div key={type} className={styles.badgeContainer}>
          <Image
            width={50}
            height={50}
            className={styles.badgeImage}
            src={badgeContent[type].img}
          />
          <p className={styles.badgeTitle}>{badgeContent[type].title}</p>
        </div>
      ))}
    </div>
  </div>
);
