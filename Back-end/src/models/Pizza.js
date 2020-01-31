const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const DemandSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },

    endereco: {
        type: String,
        required: true,
    },

    massa: {
        type: String,
        required: true,
    },
    recheio: {
        type: String,
        required: true,
    },
    borda: {
        type: String,
        required: true,
    },
    tamanho: {
        type: String,
        required: true,
    },
    pontos:{
      type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

DemandSchema.plugin(mongoosePaginate);

mongoose.model('Pizza', DemandSchema);
