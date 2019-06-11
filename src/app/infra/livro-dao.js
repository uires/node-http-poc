class LivroDAO {

    constructor(database) {

        this._database = database;
    }

    lista() {
        return new Promise((resolve, reject) => {
            
            this._database.all('SELECT * FROM livros',
                (erro, resultados) => {

                    if (erro) return reject('Não foi possível listar os livros');
                    return resolve(resultados);
                }
            );
        });
    }

    adiciona() {
        
    }
}

module.exports = LivroDAO;