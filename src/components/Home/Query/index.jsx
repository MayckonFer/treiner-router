import React from 'react';
import styles from './styles.module.scss';

import CalendarGray from '../../../assets/calendar-gray.svg';

export default function Query() {
  return (
    <div className={styles.containerQuery}>
      <h2 className={styles.titleQuery}>Próximas consultas</h2>

      <div className={styles.wrapperQuery}>
        <div className={styles.contentQuery}>
          <span className={styles.query}>
            <img src={CalendarGray} alt="icone calendario cinza" />
            15/04 - 10:00
          </span>
          <small className={styles.namePerson}>Pedro de Alcântara</small>
        </div>

        <div className={styles.contentQuery}>
          <span className={styles.query}>
            <img src={CalendarGray} alt="icone calendario cinza" />
            15/04 - 10:00
          </span>
          <small className={styles.namePerson}>Pedro de Alcântara</small>
        </div>

        <div className={styles.contentQuery}>
          <span className={styles.query}>
            <img src={CalendarGray} alt="icone calendario cinza" />
            15/04 - 10:00
          </span>
          <small className={styles.namePerson}>Pedro de Alcântara</small>
        </div>

        <a href="#" className={styles.scheduleButton}>Ver agenda completa</a>
      </div>
    </div>
  );
}