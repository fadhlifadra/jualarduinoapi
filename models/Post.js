const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);