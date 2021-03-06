const LivroDAO = require('../infra/livro-dao');
const database = require('../../config/database');


module.exports = (app) => {
    app.get('/', function (request, response) {
        response.send(
            `
                <html>
                    <head>
                        <meta charset="UTF-8" />
                    </head>
                    <body>
                        <h1>Casa do Código</h1>
                    </body>
                </html>
            `
        );
    });

    app.get(
        '/livros', function (request, response) {
            const livrodao = new LivroDAO(database);
            livrodao.lista()
                .then(livros => response.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros
                    }
                )
                ).catch(erro => {
                    console.log(erro);
                });
        }
    );

    app.get(
        '/livros/form', function (request, response) {

            response.marko(require('../views/livros/form/formulario.marko'));
        }
    );

    app.post(
        '/livros', function (request, response) {
        
            const livrodao = new LivroDAO(database);
            livrodao.adiciona(request.body)
                .then(response.redirect('/livros'))
                .catch(erro => { console.log(erro); });
        }
    );
    
    /*
    app.get(
        '/livro/{id}', function(request, response) {
            const livrodao = new LivroDAO(databse);
            livrodao.buscar(request.body)
                .then()
                .catch(erro => { console.log(erro); });
        }
    );

    app.remove(
        '/livro/{id}', function(request, response) {
            const livrodao = new LivroDAO(databse);
            livrodao.remove(request.body)
                .then()
                .catch(erro => { console.log(erro); });
        }
    );

    app.put(
        '/livro/{id}', function(request, response) {
            const livrodao = new LivroDAO(database);
            livrodao.editar(request.body)
                .then(response.redirect('/livros'))
                .catch(error => { console.log(error) });
        }
    )
    */
}
