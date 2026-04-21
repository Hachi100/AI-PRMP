const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// Toutes les routes sont protégées
router.use(authMiddleware);

// Routes pour les marchés
router.get('/', marketController.getAllMarkets);
router.get('/stats', marketController.getMarketStats);
router.get('/:id', marketController.getMarketById);
router.post('/', roleMiddleware('admin', 'manager'), marketController.createMarket);
router.put('/:id', roleMiddleware('admin', 'manager'), marketController.updateMarket);
router.delete('/:id', roleMiddleware('admin'), marketController.deleteMarket);

module.exports = router;
