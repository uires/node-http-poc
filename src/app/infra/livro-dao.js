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

    adiciona(livro) {
        
        return new Promise(

            (resolver, reject) => {

                this._database.run(`
                    INSERT INTO livros (
                        titulo,
                        preco, 
                        descricao                    
                    ) VALUES (?, ?, ?)
                    `,
                    [
                        livro.titulo,
                        livro.preco,
                        livro.descricao
                    ],
                    function(error) {

                        if(error)   console.log(error);
                        return reject('Não foi possível adicionar o livro!');
                    }
                )
            }
        );
    }


    editar(livro) {

        return new Promise(
            (resolver, reject) => {

                this._database.run(`
                    UPDATE livro SET 
                        titulo = ?,
                        descricao = ?,
                        preco = ?
                    WHERE 
                        id = ?;
                    `,
                    [
                        livro.titulo,
                        livro.descricao,
                        livro.preco,
                        livro.id
                    ],
                    (error) => {
                        if(error) return reject('Não foi possível editar o livro!');
                        return resolver();
                    }
                )
            }
        )
    }

    remover(id) {
        
        return new Promise(
            (resolver, reject) => {
                this._database.get(`
                    DELETE FROM livros WHERE id = ?
                `);
            }, 
            [id],
            (error) => {
                if(error)
                    return reject('Não foi possível editar o livro!');
                return resolve();
            }
        ); 
    }
}

module.exports = LivroDAO;