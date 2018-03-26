// Define the location schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    male_residents: {type: Number, required: true},
    female_residents: {type: Number, required: true},
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

const locationDataSchema = new Schema({
    male_residents: {type: Number, required: true},
    female_residents: {type: Number, required: true},
    total_residents: {type: Number},
    locations: [locationSchema],
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

const LocationData = mongoose.model('LocationData', locationDataSchema);
module.exports = LocationData;
