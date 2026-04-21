# SaaS de Suivi des Marchés Publics

Une application complète pour la gestion et le suivi des marchés publics.

## 🚀 Fonctionnalités

### Backend (Node.js/Express)
- API RESTful sécurisée avec JWT
- Authentification et autorisation (rôles: admin, manager, viewer)
- Gestion des marchés publics (CRUD)
- Suivi des opportunités
- Gestion des tâches associées
- Base de données PostgreSQL avec Sequelize ORM

### Frontend (React + Vite)
- Interface utilisateur moderne et responsive
- Tableau de bord avec statistiques
- Gestion des connexions et inscriptions
- Liste et détail des marchés
- Protection des routes privées

## 📁 Structure du projet

```
/workspace
├── backend/
│   ├── config/          # Configuration DB
│   ├── controllers/     # Logique métier
│   ├── middleware/      # Auth & validation
│   ├── models/          # Modèles Sequelize
│   ├── routes/          # Routes API
│   ├── server.js        # Point d'entrée
│   └── .env             # Variables d'environnement
└── frontend/
    ├── src/
    │   ├── components/  # Composants réutilisables
    │   ├── context/     # Context React
    │   ├── pages/       # Pages de l'application
    │   ├── services/    # Services API
    │   └── App.jsx      # Composant principal
    └── .env             # Variables d'environnement
```

## 🛠️ Installation

### Prérequis
- Node.js >= 16
- PostgreSQL >= 12
- npm ou yarn

### Backend

```bash
cd backend
npm install

# Configurer la base de données dans .env
# DB_NAME=marches_publics
# DB_USER=postgres
# DB_PASSWORD=votre_mot_de_passe

# Créer la base de données
createdb marches_publics

# Démarrer le serveur
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔑 Endpoints API

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/profile` - Profil utilisateur
- `PUT /api/auth/profile` - Mise à jour profil

### Marchés
- `GET /api/markets` - Liste des marchés
- `GET /api/markets/:id` - Détail d'un marché
- `POST /api/markets` - Créer un marché
- `PUT /api/markets/:id` - Mettre à jour un marché
- `DELETE /api/markets/:id` - Supprimer un marché
- `GET /api/markets/stats` - Statistiques

## 📊 Modèles de données

### User
- id, email, password, firstName, lastName, role, company, isActive

### Market
- id, reference, title, description, type, procedure, estimatedAmount, status, buyerName, publicationDate, deadlineDate

### Opportunity
- id, marketId, userId, status, priority, goNoGo, probability, notes

### Task
- id, opportunityId, title, description, assignedTo, dueDate, status, priority

## 🔒 Sécurité

- Hachage des mots de passe avec bcrypt
- Authentification JWT
- Middleware de protection des routes
- Validation des rôles utilisateurs

## 🚀 Prochaines étapes

- [ ] Ajouter la gestion des documents
- [ ] Implémenter les notifications email
- [ ] Ajouter l'export PDF/Excel
- [ ] Intégrer un éditeur de texte riche
- [ ] Ajouter des graphiques avancés
- [ ] Mettre en place les tests automatisés
- [ ] Dockeriser l'application
- [ ] CI/CD pipeline

## 📝 Licence

ISC
