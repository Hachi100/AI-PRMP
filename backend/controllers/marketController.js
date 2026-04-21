const { Market, Opportunity, User } = require('../models');
const { Op } = require('sequelize');

// Créer un marché
exports.createMarket = async (req, res) => {
  try {
    const marketData = req.body;
    
    const market = await Market.create({
      ...marketData,
      publicationDate: marketData.publicationDate || new Date(),
    });

    res.status(201).json({
      success: true,
      message: 'Marché créé avec succès',
      data: { market },
    });
  } catch (error) {
    console.error('Erreur lors de la création du marché:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la création du marché',
      error: error.message 
    });
  }
};

// Obtenir tous les marchés
exports.getAllMarkets = async (req, res) => {
  try {
    const { page = 1, limit = 20, status, type, search } = req.query;
    
    const where = {};
    
    if (status) where.status = status;
    if (type) where.type = type;
    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { reference: { [Op.iLike]: `%${search}%` } },
        { buyerName: { [Op.iLike]: `%${search}%` } },
      ];
    }

    const { count, rows } = await Market.findAndCountAll({
      where,
      limit: parseInt(limit),
      offset: (parseInt(page) - 1) * parseInt(limit),
      order: [['createdAt', 'DESC']],
    });

    res.json({
      success: true,
      data: {
        markets: rows,
        pagination: {
          total: count,
          page: parseInt(page),
          limit: parseInt(limit),
          pages: Math.ceil(count / parseInt(limit)),
        },
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des marchés:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la récupération des marchés',
      error: error.message 
    });
  }
};

// Obtenir un marché par ID
exports.getMarketById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const market = await Market.findByPk(id, {
      include: [{
        model: Opportunity,
        as: 'opportunities',
        include: [{
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email'],
        }],
      }],
    });

    if (!market) {
      return res.status(404).json({ 
        success: false, 
        message: 'Marché non trouvé' 
      });
    }

    res.json({
      success: true,
      data: { market },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du marché:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la récupération du marché',
      error: error.message 
    });
  }
};

// Mettre à jour un marché
exports.updateMarket = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const market = await Market.findByPk(id);
    
    if (!market) {
      return res.status(404).json({ 
        success: false, 
        message: 'Marché non trouvé' 
      });
    }

    await market.update(updateData);

    res.json({
      success: true,
      message: 'Marché mis à jour avec succès',
      data: { market },
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du marché:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la mise à jour du marché',
      error: error.message 
    });
  }
};

// Supprimer un marché
exports.deleteMarket = async (req, res) => {
  try {
    const { id } = req.params;
    
    const market = await Market.findByPk(id);
    
    if (!market) {
      return res.status(404).json({ 
        success: false, 
        message: 'Marché non trouvé' 
      });
    }

    await market.destroy();

    res.json({
      success: true,
      message: 'Marché supprimé avec succès',
    });
  } catch (error) {
    console.error('Erreur lors de la suppression du marché:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la suppression du marché',
      error: error.message 
    });
  }
};

// Obtenir les statistiques des marchés
exports.getMarketStats = async (req, res) => {
  try {
    const stats = await Promise.all([
      Market.count({ where: { status: 'brouillon' } }),
      Market.count({ where: { status: 'publié' } }),
      Market.count({ where: { status: 'en_cours' } }),
      Market.count({ where: { status: 'attribué' } }),
      Market.count(),
    ]);

    res.json({
      success: true,
      data: {
        stats: {
          brouillon: stats[0],
          publié: stats[1],
          en_cours: stats[2],
          attribué: stats[3],
          total: stats[4],
        },
      },
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la récupération des statistiques',
      error: error.message 
    });
  }
};
