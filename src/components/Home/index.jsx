import React from 'react';
import styles from './styles.module.scss';

import Menu from './Menu';
import Query from './Query';
import Birthday from './Birthday';
import Performed from './Performed';

export default function Home() {
  return (
    <div className={styles.containerMain}>
      <Menu />
      <main className={styles.content}>
        <Query />
        <Birthday />
        <Performed />
      </main>
    </div>
  );
}