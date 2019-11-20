const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContatoSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipos de dados
        auto: true, //é autorgerado?
        required: true // é obrigatório
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    celular: {
        type: String,
        required: true,
    },
    fotoPerfil: {
        type: String,
        required: false
    },
    dataNascimento:{
        type: Date,
        required: true
    }
})

const ContatosColletion = mongoose.model('contato', ContatoSchema)

module.exports = ContatosColletion