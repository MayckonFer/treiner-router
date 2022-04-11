import React from 'react';
import styles from './styles.module.scss';

export default function Birthday() {
  return (
    <div className={styles.containerBirthday}>
      <h2 className={styles.titleBirthday}>Aniversariantes</h2>

      <div className={styles.wrapperBirthday}>
        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>

        <span className={styles.birthdayData}>
          15/04 - <p className={styles.birthdayName}>Person</p>
        </span>
      </div>
    </div>
  );
}