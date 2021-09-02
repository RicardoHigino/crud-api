const express = require('express');
const route = express.Router();
const livroController = require('./api/controllers/livroController')

//Rotas 
route.get('/livro', livroController.lista_todos_os_livros)
route.post('/livro', livroController.adiciona_um_livro)

route.get('/livro/:livroId', livroController.lista_um_livros)
route.put('/livro/:livroId', livroController.atualiza_um_livro)
route.delete('/livro/:livroId', livroController.remove_um_livro)


module.exports = routes;