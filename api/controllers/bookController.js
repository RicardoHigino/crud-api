const book = require('../models/bookModel')

// GET ALL
exports.lista_todos_os_livros = function(req, res) {
    book.find({}, function(err, livros){
        if(err) {
            res.send(err)
        }
        res.json(livros)
    })
}

// GET ID
exports.lista_um_livros = function(req, res) {
    book.findOne({"_id": req.params.livroId}, function(err, livro) {
        if(err) {
            res.send(err)
        }
        res.json(livro)
    })
}

// POST
exports.adiciona_um_livro = function(req, res) {
    const novo_livro = new book(req.body)
    novo_livro.save(function(err, book) {
        if(err) {
            res.send(err)
        }
        res.json(book)
    })
}

// PUT
exports.atualiza_um_livro = function(req, res) {
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true}, 
        function(err, book) {
            if (err){
                res.send(err);
            }
            res.json(book);
        });
}

// DELETE
exports.remove_um_livro = function(req, res) {
    book.deleteOne({_id: req.params.livroId}, function(err, book) {
        if(err){
            res.send(err)
        }
        res.json({"Mensagem": "Livro deletado com sucesso"})
    })
}