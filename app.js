const express = require("express");
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const PORT = 8081;
var cors = require('cors')


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


require("dotenv").config()

const palavra_passe= process.env.SENHA

const url = "mongodb+srv://osvaldosolver:".concat(palavra_passe)+"@empresaaluguel.wxv90xh.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB Atlas');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err);
});



const clienteRouters = require('./routes/clienteRouter')

app.use("/api/",clienteRouters)

app.listen(PORT, () => {
  console.log("Server Run on Port" + PORT.toString());
});
