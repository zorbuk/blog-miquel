const mongoose = require('mongoose')

const Entrada = mongoose.model('Entrada', {
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
})


module.exports = Entrada