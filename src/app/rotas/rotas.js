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

    app.get('/livros', function (request, response) {

        const livrodao = new LivroDAO(database);
        livrodao.lista(function (erro, resultados) {

            response.marko(
                require('../views/livros/lista/lista.marko'),
                    {
                        livros: resultados
                    }
                );
            }
        );
    });
}
