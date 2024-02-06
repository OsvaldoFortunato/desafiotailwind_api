const { response } = require("express");
const mongodbCliente = require("../models/Cliente.js");
const { MongoClient } = require("mongodb");

exports.criarCliente = (req, response) => {
  const cliente = {
    primeiro_nome: req.body.primeiro_nome,
    ultimo_nome: req.body.ultimo_nome,
    email: req.body.email,
  };

  try {
    mongodbCliente.collection.insertOne(cliente);
    const json = {
      mensagem: "cliente foi salvo!",
    };

    response.json(json);
  } catch (error) {
    console.log(error);
    response.json({
      error: error.toString(),
    });
    console.log("Registro nao foi salvo!");
  }
};

exports.todosClientes = (req, response) => {
  mongodbCliente
    .find()
    .then((documento) => {
      response.json(documento);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.totalDeClientes = (req, response) => {
  mongodbCliente
    .find()
    .then((registro) => {
        const total = registro.length

        response.json(
            {
                total_registro : total.toString()
            }
        )
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.apagarCliente = (req,response) =>{

    
}


