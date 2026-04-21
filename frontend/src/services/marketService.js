import api from './api';

export const marketService = {
  getAllMarkets: async (params = {}) => {
    const response = await api.get('/markets', { params });
    return response.data;
  },

  getMarketById: async (id) => {
    const response = await api.get(`/markets/${id}`);
    return response.data;
  },

  createMarket: async (marketData) => {
    const response = await api.post('/markets', marketData);
    return response.data;
  },

  updateMarket: async (id, marketData) => {
    const response = await api.put(`/markets/${id}`, marketData);
    return response.data;
  },

  deleteMarket: async (id) => {
    const response = await api.delete(`/markets/${id}`);
    return response.data;
  },

  getStats: async () => {
    const response = await api.get('/markets/stats');
    return response.data;
  },
};
