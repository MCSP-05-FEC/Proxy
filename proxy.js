var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3001',
    ServerTwo = 'http://localhost:3002',
    ServerThree = 'http://localhost:3003';
    ServerFour = 'http://localhost:3004';
 
app.all("/app1/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/item/*", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});
app.all("/app4/*", function(req, res) {
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: ServerFour});
});

app.listen(3000);









