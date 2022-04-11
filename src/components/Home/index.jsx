import React from 'react';
import styles from './styles.module.scss';

import Menu from './pages/Menu';
import Query from './pages/Query';
import Birthday from './pages/Birthday';
import Performed from './pages/Performed';

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