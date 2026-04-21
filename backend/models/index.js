const User = require('./User');
const Market = require('./Market');
const Opportunity = require('./Opportunity');
const Task = require('./Task');

// Relations
Market.hasMany(Opportunity, { foreignKey: 'marketId', as: 'opportunities' });
Opportunity.belongsTo(Market, { foreignKey: 'marketId', as: 'market' });

User.hasMany(Opportunity, { foreignKey: 'userId', as: 'opportunities' });
Opportunity.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Opportunity.hasMany(Task, { foreignKey: 'opportunityId', as: 'tasks' });
Task.belongsTo(Opportunity, { foreignKey: 'opportunityId', as: 'opportunity' });

User.hasMany(Task, { foreignKey: 'assignedTo', as: 'assignedTasks' });
Task.belongsTo(User, { foreignKey: 'assignedTo', as: 'assignee' });

module.exports = {
  User,
  Market,
  Opportunity,
  Task,
};
