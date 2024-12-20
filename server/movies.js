const {Schema} = require('mongoose');
const { cast } = require('sequelize');

// Define schema -> using this schema we will create a model

const movieSchema = new Schema({
    title: [
    {
        type: String,
        required: true
    },
    ],

    description: [
    {
        type: String,
        required: true,
    },
    ],

    genre: [
    {
        type: String
    },
    ],
    director: [
    {
        type: String
    },
    ],
    cast: [
    {
        type: String
    },
    ],
    year: [
    {
        type: Number,
        required: true
    },
    ],

});