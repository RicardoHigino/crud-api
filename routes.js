const express = require('express');
const route = express.Router();
const livroController = require('./api/controllers/livroController')

// Retorna um livro
route.get('/livro/:livroId', livroController.lista_um_livros)

// Retorna todos os livros
route.get('/livro', livroController.lista_todos_os_livros)

// Adiciona um livro
route.post('/livro', livroController.adiciona_um_livro)

// Atualiza um livro
route.put('/livro/:livroId', livroController.atualiza_um_livro)

// Deleta um livro
route.delete('/livro/:livroId', livroController.remove_um_livro)


module.exports = route;