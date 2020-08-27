var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url); // 어디로 가는지 확인
    response.end(fs.readFileSync(__dirname + url)); // 경로에 해당하는 파일을 읽어서 가지고 온다.

});
app.listen(3000);