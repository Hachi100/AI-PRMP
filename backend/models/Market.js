const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Market = sequelize.define('Market', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  type: {
    type: DataTypes.ENUM('travaux', 'fournitures', 'services'),
    allowNull: false,
  },
  procedure: {
    type: DataTypes.ENUM('ouverte', 'restreinte', 'negociée', 'dialogue'),
    allowNull: false,
  },
  estimatedAmount: {
    type: DataTypes.DECIMAL(15, 2),
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'EUR',
  },
  publicationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deadlineDate: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM('brouillon', 'publié', 'en_cours', 'attribué', 'annulé', 'terminé'),
    defaultValue: 'brouillon',
  },
  buyerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyerEmail: {
    type: DataTypes.STRING,
  },
  cpvCodes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  documents: {
    type: DataTypes.JSONB,
    defaultValue: [],
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Market;
