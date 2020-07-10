import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

const Home = () =>{
  return (
    <div id="page-home">
      <div className="content">
        <header>
        <Link to="/">
            <img src={logo} alt="ecoleta" />
        </Link>
        </header>
          <main>
            <h1>Seu marketplace de coleta de resíduos. </h1>
            <p> Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

            <Link to="/create-point">
              <span>
                <FiLogIn/>
              </span>
              <strong> Cadastre um Ponto de Coleta</strong>
            </Link>
          </main>
      </div>
    </div>
  );
}
export default Home;