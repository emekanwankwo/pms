const LocationService = require('../services/location');
const locationService = new LocationService();

/**
 * Create location
 * @param req http request object
 * @param res http response
 */
const createLocation = (req, res) => {
    locationService.createLocation(req.body, (err, location) => {
    if (!err) {
      return res.status(201)
        .send(location);
    } else {
      return res.status(400)
        .send({ message: 'Could not create new location', error: err});
    }
  });
};

/**
 * Get all available locations
 * @param req http request object
 * @param res http response
 */
const getAvailableLocations = (req, res) => {
    locationService.getAvailableLocations((err, location) => {
    if (!err) {
        return res.status(200).send(location);
    } else {
        return res.status(400).send({ message: 'Unable to get location', error: err});
    }   
  });
};

/**
 * Get single location
 * @param req http request object
 * @param res http response
 */
const getLocation = (req, res) => {
    const locationId = req.params.id;
    locationService.getLocation(locationId, (err, location) => {
    if (!err) {
        return res.status(200).send(location);
    } else {
        return res.status(404).send({ message: 'Location not found!', error: err });
    }
  });
};

/**
 * Update a location
 * @param req http request object
 * @param res http response
 */
const updateLocation = (req, res) => {
    const locationId = req.params.id;
    const updateData = req.body;
    locationService.updateLocation(locationId, updateData, (err, location) => {
    if (!err) {
      return res.status(200).send(location);
    } else {
      return res.status(404).send({ message: 'Location not found!', error: err});
    }
  });
};

/**
 * Delete a location
 * @param req http request object
 * @param res http response
 */
const deleteLocation = (req, res) => {
    const locationId = req.params.id;
    locationService.deleteLocation(locationId, (err, data) => {
    if (!err) {
      return res.status(200).send({message: 'Location removed!'})
    } else {
      return res.status(404).send({ message: 'Location not found!', error: err});
    }
  });
};

module.exports = {
    createLocation,
    getLocation,
    getAvailableLocations,
    updateLocation,
    deleteLocation
};
