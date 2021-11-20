import React from "react";
import Image from "next/image";

import styles from "./Badges.module.css";

interface Props {
  badges: {
    type: Type;
  }[];
}

export enum Type {
  DECEMBER_CHALLENGE = "DECEMBER_CHALLENGE",
  MONTHLY_CHALLENGE = "MONTHLY_CHALLENGE",
  PERFECT_WEEK = "PERFECT_WEEK",
  NEW_RECORD = "NEW_RECORD",
  YOU_ARE_THE_BEST = "YOU_ARE_THE_BEST",
}

const badgeContent: { [key in Type]: { img: string; title: string } } = {
  DECEMBER_CHALLENGE: {
    img: "/december-challenge.png",
    title: "december challenge",
  },
  MONTHLY_CHALLENGE: {
    img: "/monthly-challenge.png",
    title: "monthly challenge",
  },
  PERFECT_WEEK: {
    img: "/perfect-week.png",
    title: "monthly challenge",
  },
  NEW_RECORD: {
    img: "/new-record.png",
    title: "new record",
  },
  YOU_ARE_THE_BEST: {
    img: "/you-are-the-best.png",
    title: "you are the best",
  },
};

export const Badges: React.FunctionComponent<Props> = ({ badges }) => (
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
