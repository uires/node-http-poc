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
        response.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );
    });
}
