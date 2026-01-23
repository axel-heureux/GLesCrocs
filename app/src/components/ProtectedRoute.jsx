import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * Composant protégé pour les routes admin
 * Redirige vers /login si non connecté ou pas admin
 * 
 * Usage:
 * <Route 
 *   path="/admin" 
 *   element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
 * />
 */
export function ProtectedRoute({ children, requiredRole = null }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem',
        color: '#666'
      }}>
        ⏳ Chargement...
      </div>
    );
  }

  // Pas connecté
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Rôle requis spécifique
  if (requiredRole !== null && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Rôle admin requis (role !== NULL)
  if (requiredRole === 'admin' && user.role === null) {
    return <Navigate to="/" replace />;
  }

  return children;
}
