const sequelize = require('.')
const { DataTypes } = require('sequelize');

const Event = sequelize.define('Events', {
  name: DataTypes.STRING,
  adultsOnly: DataTypes.BOOLEAN,
  attendees: DataTypes.INTEGER,
  description: DataTypes.STRING,
});

Event.sync();

module.exports = Event