const Location = require('./Location');
const Trip = require('./Trip');
const Traveler = require('./Traveler');

Traveler.hasMany(Trip);
Trip.belongsTo(Traveler);
Trip.belongsTo(Location);
Location.hasMany(Trip);

module.exports = { Traveler, Trip, Location };