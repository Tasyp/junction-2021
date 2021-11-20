import React from "react";
import Link from "next/link";


import { Badges } from "../../components/Badges";

import styles from "./Achievements.module.css";

interface Props {
    badges: {
        name: string;
        title: string;
        img: string;
        description: string;
        received_at?: string;
    }[];
}

export const AchievementsContainer: React.FunctionComponent<Props> = ({badges}) => (
  <div className={styles.achievementsContainer}>
    <Link href="/achievement/666">
      <a>
        <Badges badges={badges} />
      </a>
    </Link>
  </div>
);
