const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
    title: String,
    publisher: String,
    coverArtUrl: String,
    completed: Boolean,
});

const Farm = mongoose.model('Farm', FarmSchema);

module.exports = Farm;
