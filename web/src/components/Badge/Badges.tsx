import React from "react";

import styles from "./Badges.module.css";

interface Props {
  badges: {
    type: Type;
  }[];
}

export enum Type {
  NOVEMBER_CHALLENGE = "NOVEMBER_CHALLENGE",
}

const badgeContent: { [key in Type]: {img: string; title: string} } = {
    NOVEMBER_CHALLENGE: {img: 'http://csshexagon.com/img/meow.jpg', title: 'DecemberChallenge'}
}


export const Badges: React.FunctionComponent<Props> = ({ badges }) => {
  return (
    <div className={styles.container}>
      {badges.map(({ type }) => {
        switch (type) {
          case Type.NOVEMBER_CHALLENGE:
            return (<div className={styles.badgeContainer}>
              <div className={styles.badge} key={type} style={{backgroundImage: `url(${badgeContent[type].img})`}}>
                <div className={styles.badgeTop} />
                <div className={styles.badgeBottom} />
              </div>
              <div className={styles.badgeTitle}>{badgeContent[type].title}</div>
            </div>
            );
          default:
            return <div />;
        }
      })}
    </div>
  );
};
