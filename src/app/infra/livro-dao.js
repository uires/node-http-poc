class LivroDAO {

    constructor(database) {

        this._database = database;
    }

    lista(callback) {

        this._database.all('SELECT * FROM livros',
            (erro, resultados) =>
                callback(erro, resultados)

        );
    }
}

module.exports = LivroDAO;