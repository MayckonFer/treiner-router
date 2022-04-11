import React from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import UserImage from '../../../assets/user.png';
import Logo from '../../../assets/logo.svg';
import IconHome from '../../../assets/home-white.svg';
import IconCalendar from '../../../assets/calendar-purple.svg';

export default function Menu() {
  return (
    <header className={styles.menu}>
      <img src={Logo} alt="Logo do catalago" />

      <div className={styles.wrapperMenu}>
        <Link to="/" className={styles.buttonHome}>
          <img src={IconHome} alt="Icone de uma casa branca" />
          Home
        </Link>

        <Link to="/" className={styles.buttonAgenda}>
          <img src={IconCalendar} alt="icone de um calendario roxo" />
          Agenda
        </Link>
      </div>

      <div className={styles.wrapperSigniAndRegister}>
        <Link to="/login" className={styles.LoginHome}>
          <img className={styles.user} src={UserImage} alt="Icone user" />
          Login
        </Link>

        <Link to="/register" className={styles.RegisterHome}>Cadastrar-se</Link>
      </div>
    </header>
  );
}