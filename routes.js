const express = require('express');
const route = express.Router();
const bookController = require('./api/controllers/bookController')

// Retorna um livro
route.get('/livro/:livroId', bookController.lista_um_livros)

// Retorna todos os livros
route.get('/livro', bookController.lista_todos_os_livros)

// Adiciona um livro
route.post('/livro', bookController.adiciona_um_livro)

// Atualiza um livro
route.put('/livro/:livroId', bookController.atualiza_um_livro)

// Deleta um livro
route.delete('/livro/:livroId', bookController.remove_um_livro)


module.exports = route;