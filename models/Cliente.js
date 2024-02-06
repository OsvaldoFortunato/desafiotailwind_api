const mongoose =require("mongoose");

const cliente = new mongoose.Schema({
  primeiro_nome: {
    type: String,
    required: true,
  },
  ultimo_nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const Cliente = mongoose.model("cliente",cliente)
module.exports = Cliente
