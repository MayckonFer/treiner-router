import React from 'react';
import styles from './styles.module.scss';

import UserImage from '../../../assets/user.png';
import CalendarPurple from '../../../assets/calendar-purple-light.svg';

export default function Performed() {
  return (
    <div className={styles.wrapperLength}>
      <div className={styles.globalContainerLength}>
        <div className={styles.containerLength}>
          <span className={styles.contentLength}>
            <img src={UserImage} alt="icone user" />
            987
          </span>
          <p className={styles.descriptionLength}>Pacientes cadastrados</p>
        </div>

        <div className={styles.containerLength}>
          <span className={styles.contentLength}>
            <img src={CalendarPurple} alt="icone user" />
            158
          </span>
          <p className={styles.descriptionLength}>Consultas realizadas</p>
        </div>
      </div>
    </div>
  );
}