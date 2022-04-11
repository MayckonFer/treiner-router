import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Login() {
  return (
    <div className={styles.containerLogin}>

      <form className={styles.contentLogin}>

        <h2 className={styles.titleLogin}>Login</h2>
        <p className={styles.descriptionLogin}>Bem-vindo de volta, aqui você acessa a sua conta.</p>

        <div className={styles.wrapperLogin}>
          <input className={styles.inputLogin} type="email" placeholder="E-mail" required />
          <input className={styles.inputLogin} type="password" placeholder="Senha" required />
          <button
            type="submit"
            className={styles.buttonLogin}
          >
            Entrar
          </button>

          <Link to="/register" className={styles.regiterAccount}>Criar nova conta</Link>
          <Link to="/" className={styles.regiterAccount}>Voltar para Home</Link>
        </div>

      </form>

    </div>
  );
}