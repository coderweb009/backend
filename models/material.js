const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({

    name: {
        type: String,
        required: false
    }
});

const material = module.exports = mongoose.model('material', materialSchema);