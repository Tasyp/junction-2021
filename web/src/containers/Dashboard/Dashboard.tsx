import React from 'react';

import { BarChart, IndexIndicator } from '../../components';

import styles from './Dashboard.module.css';

export const Dashboard: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.indexContainer}>
        <IndexIndicator indexValue={80} />
      </div>
      <div className={styles.chartContainer}>
        <BarChart title={"neighborhood"} from={25} to={50} />
        <BarChart title={"country"} from={33} to={50} />
        <BarChart title={"Sixfold (company-wide)"} from={25} to={100} />
      </div>
    </div>
  );
};