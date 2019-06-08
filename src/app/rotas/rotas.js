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
        response.send(
            `
                <html>
                    <head>
                        <meta charset="UTF-8" />
                    </head>
                    <body>
                        <h1>Listagem Livros</h1>
                    </body>
                </html>
            `
        );
    });
}
