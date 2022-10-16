const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
        },
        "open_time": {
            type: String,
        },
        "address": {
            type: String,
        },
        "county":{
            type: String,
        },
        "website": {
            type: String,
        },
        "photo": {
            type: String,
        },
    }, { versionKey: false }
);


const Cafe = mongoose.model('Cafes', cafeSchema);

module.exports = Cafe;