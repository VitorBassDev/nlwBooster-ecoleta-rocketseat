import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

const CreatePoint = () =>{
  return(
    <div id="page-create-point">
      <header>
        <Link to="/">
            <img src={logo} alt="ecoleta" />
        </Link>

        <Link to="/">
          <FiArrowLeft/>
            Voltar para Home
        </Link>
      </header>

      <form >
        <h1> Cadastro do <br/> Ponto de Coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da Entidade</label>
            <input 
              type="text"
              name="name"
              id="name"
            />             
          </div>

          <div className="field-group">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              name="name"
              id="email"
            />             
          </div>

          <div className="field">
            <label htmlFor="name">Whatsapp</label>
            <input 
              type="text"
              name="whatsapp"
              id="whatsapp"
            />             
          </div>

          </div>
          
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta </h2>
          </legend>
        </fieldset>

      </form>
    </div>
  )
}

export default CreatePoint;