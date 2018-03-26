// Define the location schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    male_residents: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : 'male_residents must be an integer value'
        }
    },
    female_residents: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : 'female_residents must be an integer value'
        }
    },
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

const locationDataSchema = new Schema({
    male_residents: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : 'male_residents must be an integer value'
        }
    },
    female_residents: {
        type: Number,
        required: true,
        validate : {
            validator : Number.isInteger,
            message   : 'female_residents must be an integer value'
        }
    },
    total_residents: {type: Number},
    locations: [locationSchema],
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
});

const LocationData = mongoose.model('LocationData', locationDataSchema);
module.exports = LocationData;
