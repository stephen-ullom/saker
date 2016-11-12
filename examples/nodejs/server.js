var http = require('http'),
    url = require('url'),
    saker = require('../../saker');

var server = http.createServer(function (req, res) {
    var path = url.parse(req.url).pathname;
    if(path === '/'){
        saker.render(res, './examples/nodejs/index.html', {
            code: 1,
            data: JSON.stringify({"name":"Sky","age":20}),
            title: 'saker',
            layout: __dirname + '/layout.html'
        });
    }else{
        res.writeHead(404);
        res.end('404 Not Found!');
    }
});
server.listen(8001);
console.info('Server is running on 8001 port, you can visit it with http://localhost:8001/');