import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();
  async function handleregister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try {
      const response = await api.post('ongs', data);
      history.push('/');
      alert(`Seu ID de acesso ${response.data.id}`)
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>
            Cadastro
          </h1>
          <p>
            Faça seu cadastro, enete na plataforma e ajude a pessoas a encontrarem casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleregister}>
          <input type="text" placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input type="text" placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input type="text" placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input type="text" placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input type="text" placeholder="UF" style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};