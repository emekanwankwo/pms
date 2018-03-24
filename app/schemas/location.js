// Define the location schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationDataSchema = new Schema({
    male_residents: Number,
    female_residents: Number,
    locations: [locationDataSchema],
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

const LocationData = mongoose.model('LocationData', locationDataSchema);
module.exports = LocationData;
