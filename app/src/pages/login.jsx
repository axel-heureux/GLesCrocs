import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirection automatique si utilisateur déjà connecté
  useEffect(() => {
    if (user) {
      // Si role == 'admin' ou role est un nombre → dashboard
      if (user.role === 'admin' || (typeof user.role === 'number' && user.role !== null)) {
        navigate('/admin');
      } else {
        // Sinon → page client
        navigate('/');
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Appel API pour vérifier les credentials en BD
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        username,
        password
      });

      const userData = {
        id: response.data.id,
        username: response.data.username,
        role: response.data.role,
        token: response.data.token
      };

      login(userData);

      // Redirection basée sur le role depuis la BD
      // Si role == 'admin' ou role est un nombre (et pas null) → dashboard
      if (userData.role === 'admin' || (typeof userData.role === 'number' && userData.role !== null)) {
        navigate('/admin');
      } else {
        // Sinon → page client
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la connexion');
      console.error('Erreur login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <nav className="top-navbar">
        <div className="logo-container">
          <div className="logo-placeholder">GLC</div>
          <span className="brand-name">GLESCROCS CANTINE</span>
        </div>
      </nav>

      <main className="login-main">
        <div className="login-card">
          <div className="login-header">
            <h1>🔐 Connexion Admin</h1>
            <p>Accédez à votre tableau de bord</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                disabled={loading}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button 
              type="submit" 
              className="btn-login"
              disabled={loading}
            >
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>

          <div className="login-footer">
            <p>Vérification des identifiants en base de données</p>
            <button 
              type="button"
              className="btn-back"
              onClick={() => navigate('/')}
            >
              ← Retour au menu client
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
