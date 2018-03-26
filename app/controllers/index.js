const createLocation = require('./location').createLocation;
const getLocation = require('./location').getLocation;
const getAvailableLocations = require('./location').getAvailableLocations;
const updateLocation = require('./location').updateLocation;
const deleteLocation = require('./location').deleteLocation;

module.exports = {
    createLocation,
    getLocation,
    getAvailableLocations,
    updateLocation,
    deleteLocation
};
