const http = require('http');

const servidor = http.createServer(function(request, response) {
    
    let html;
    if(request.url === '/') {

        html = 
        `
            <html>
                <head>
                    <meta charset="UTF-8" />
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            </html>
        `;
    } else if(request.url == '/livros') {
        html = `
        <html>
            <head>
                <meta charset="UTF-8" />
            </head>
            <body>
                <h1>Listagem de Livros</h1>
            </body>
        </html>
    `;
    }
    response.end(html);
});
servidor.listen(3000);