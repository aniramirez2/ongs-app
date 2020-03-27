import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: localStorage.getItem('ongId')
        }
      });
      history.push('/profile')
    } catch (err) {
      alert('Error');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>
            Cadastrar novo caso
          </h1>
          <p>
            Faça seu cadastro, enete na plataforma e ajude a pessoas a encontrarem casos da sua ONG.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para a home
          </Link>
        </section>
        <form action="" onSubmit={handleNewIncident}>
          <input type="text" placeholder="Titutlo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea type="text" placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input type="text" placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}