import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { marketService } from '../services/marketService';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [markets, setMarkets] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [marketsRes, statsRes] = await Promise.all([
        marketService.getAllMarkets({ limit: 10 }),
        marketService.getStats(),
      ]);
      
      if (marketsRes.success) setMarkets(marketsRes.data.markets);
      if (statsRes.success) setStats(statsRes.data.stats);
    } catch (error) {
      console.error('Erreur de chargement:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getStatusColor = (status) => {
    const colors = {
      brouillon: '#999',
      publié: '#3498db',
      en_cours: '#f39c12',
      attribué: '#27ae60',
      annulé: '#e74c3c',
      terminé: '#95a5a6',
    };
    return colors[status] || '#666';
  };

  if (loading) {
    return <div style={styles.loading}>Chargement...</div>;
  }

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Marchés Publics</h1>
        <div style={styles.navLinks}>
          <span style={styles.userName}>{user?.firstName} {user?.lastName}</span>
          <button onClick={handleLogout} style={styles.logoutBtn}>Déconnexion</button>
        </div>
      </nav>

      <main style={styles.main}>
        <div style={styles.header}>
          <h2>Tableau de bord</h2>
          <button style={styles.newMarketBtn}>+ Nouveau marché</button>
        </div>

        {stats && (
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{stats.total}</div>
              <div style={styles.statLabel}>Total marchés</div>
            </div>
            <div style={{...styles.statCard, borderLeft: '4px solid #3498db'}}>
              <div style={styles.statValue}>{stats.publié}</div>
              <div style={styles.statLabel}>Publiés</div>
            </div>
            <div style={{...styles.statCard, borderLeft: '4px solid #f39c12'}}>
              <div style={styles.statValue}>{stats.en_cours}</div>
              <div style={styles.statLabel}>En cours</div>
            </div>
            <div style={{...styles.statCard, borderLeft: '4px solid #27ae60'}}>
              <div style={styles.statValue}>{stats.attribué}</div>
              <div style={styles.statLabel}>Attribués</div>
            </div>
          </div>
        )}

        <div style={styles.section}>
          <h3>Derniers marchés</h3>
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Titre</th>
                  <th>Acheteur</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {markets.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={styles.emptyCell}>Aucun marché trouvé</td>
                  </tr>
                ) : (
                  markets.map((market) => (
                    <tr key={market.id}>
                      <td style={styles.refCell}>{market.reference}</td>
                      <td>{market.title}</td>
                      <td>{market.buyerName}</td>
                      <td>{market.type}</td>
                      <td>
                        <span style={{
                          ...styles.statusBadge,
                          backgroundColor: getStatusColor(market.status)
                        }}>
                          {market.status}
                        </span>
                      </td>
                      <td>{new Date(market.publicationDate).toLocaleDateString('fr-FR')}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: '#f5f6fa',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  logo: {
    margin: 0,
    color: '#667eea',
    fontSize: '24px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  userName: {
    color: '#666',
  },
  logoutBtn: {
    padding: '8px 16px',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  main: {
    padding: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  newMarketBtn: {
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    background: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    color: '#666',
    marginTop: '5px',
  },
  section: {
    background: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  emptyCell: {
    padding: '40px',
    textAlign: 'center',
    color: '#999',
  },
  refCell: {
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '12px',
    textTransform: 'capitalize',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '18px',
    color: '#666',
  },
};

export default Dashboard;
