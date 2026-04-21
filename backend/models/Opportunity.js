const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Opportunity = sequelize.define('Opportunity', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  marketId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Markets',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.ENUM('veille', 'analyse', 'soumission', 'negociation', 'gagné', 'perdu'),
    defaultValue: 'veille',
  },
  priority: {
    type: DataTypes.ENUM('faible', 'moyenne', 'élevée', 'critique'),
    defaultValue: 'moyenne',
  },
  goNoGo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  goNoGoDate: {
    type: DataTypes.DATE,
  },
  submissionDate: {
    type: DataTypes.DATE,
  },
  decisionDate: {
    type: DataTypes.DATE,
  },
  awardedAmount: {
    type: DataTypes.DECIMAL(15, 2),
  },
  notes: {
    type: DataTypes.TEXT,
  },
  competitors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  probability: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 100,
    },
  },
}, {
  indexes: [
    { fields: ['marketId'] },
    { fields: ['userId'] },
    { fields: ['status'] },
  ],
});

module.exports = Opportunity;
