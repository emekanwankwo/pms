const createLocation = require('../controllers').createLocation;
const getLocation = require('../controllers').getLocation;
const getAvailableLocations = require('../controllers').getAvailableLocations;
const updateLocation = require('../controllers').updateLocation;
const deleteLocation = require('../controllers').deleteLocation;

const Routes = (router) => {
    // create location
    router.route('/createLocation')
            .post(createLocation);

    // get a single location
    router.route('/getLocation/:id')
            .get(getLocation);
  
    // get available locations
    router.route('/getAvailableLocations')
            .get(getAvailableLocations);

    // update location
    router.route('/updateLocation/:id')
            .put(updateLocation);

    // delete location
    router.route('/deleteLocation/:id')
            .delete(deleteLocation);
  };
  
  module.exports = Routes;
