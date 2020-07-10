import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker } from 'react-leaflet';

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
              <span>selecione o endereço no Mapa</span>
          </legend>

          <Map center={[-15.8055987, -48.1460885]} zoom={15}>
            <TileLayer
              
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-15.8055987, -48.1460885]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="cityf" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta </h2>
              <span>selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/baterias.svg" alt="teste"/>
            </li>
            <li className="selected">
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste"/>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de Coleta</button>
      </form>
    </div>
  )
}

export default CreatePoint;