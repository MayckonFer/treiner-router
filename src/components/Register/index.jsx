import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Register() {
  return (
    <div className={styles.containerRegister}>
      <form className={styles.contentRegister}>
        <h2 className={styles.titleRegister}>Cadastre-se</h2>
        <p className={styles.descriptionRegister}>É rápido e fácil</p>

        <div className={styles.wrapperRegisterInputs}>
          <input className={styles.inputRegister} type="text" placeholder="Nome" required />
          <input className={styles.inputRegister} type="email" placeholder="E-mail" required />
          <input className={styles.inputRegister} type="password" placeholder="Senha" required />
        </div>

        <div className={styles.wrapperRegisterGenrer}>
          <label className={styles.titleGenrerRegister}>Gênero:</label>
          <div className={styles.genrerWrapperRegister}>
            <label htmlFor="Female" className={styles.genrer}>
              <input type="radio" id="Female" name="genrer" required />
              Feminino
            </label>

            <label htmlFor="Masculine" className={styles.genrer}>
              <input type="radio" id="Masculine" name="genrer" required />
              Masculino
            </label>
          </div>
        </div>

        <select className={styles.selectRegister}>
          <option value="1" selected disabled >Como nos conheceu?</option>
          <option value="2" required>Redes sociais (instagram, facebook, etc)</option>
          <option value="3" required>Google</option>
          <option value="4" required>Youtube</option>
          <option value="5" required>Indicação de amigos</option>
          <option value="6" required>Outros</option>
        </select>

        <label htmlFor="news" className={styles.checkRegister}>
          <input type="checkbox" id="news" />
          Quero receber as novidades do sistema por e-mail
        </label>

        <div className={styles.wrapperButtonsRegister}>
          <button
            type="submit"
            className={styles.buttonRegister}
          >
            Cadastrar
          </button>

          <Link to="/login" className={styles.backLogin}>Voltar para o Login </Link>
          <Link to="/" className={styles.backLogin}>Voltar para o Home </Link>
        </div>
      </form>
    </div>
  );
}