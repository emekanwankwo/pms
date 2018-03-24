const LocationData = require('../schemas').LocationData;

class LocationService {
  constructor() {}

  /**
   * Create new location
   * @param data location data
   * @param done callback
   */

  createLocation(data, done) {
    let newLocation = new LocationData(data);
    return newLocation.save((err, location) => {
        if (err) {
            done(err);
        } else{
           done(null, location);
        }
      });
  }

  /**
   * Get available locations
   * @param done callback
   */
  getAvailableLocations(done) {
    return LocationData.find({}, (err, locations) => {
      if (err) {
        done(err);
      } else {
        done(null, locations);
      }
    });
  }

  /**
   * Get a single location
   * @param locationId location id
   * @param done callback
   */
  getLocation(locationId, done) {
    return LocationData.find({_id: locationId}, (err, location) => {
      if (err) {
        done(err);
      } else {
        done(null, location);
      }
    });
  }

 /**
   * Update location
   * @param locationId location id
   * @param updateData location update data
   * @param done callback
   */
  updateLocation(locationId, updateData, done) {
    return LocationData.findOneAndUpdate({_id: locationId}, updateData,
      (err, location) => {
      if (err) {
        done(err);
      } else {
        done(null, location);
      }
    });
  }

 /**
   * Delete a location
   * @param locationId location id
   * @param done callback
   * @returns object
   */
  deleteLocation(locationId, done) {
    return LocationData.findOneAndRemove({_id: locationId},
      (err, location) => {
      if (err) {
        done(err);
      } else {
        done(null, location);
      }
    });
  }
}

module.exports = LocationService;
