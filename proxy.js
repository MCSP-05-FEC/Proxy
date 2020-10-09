var express  = require('express');
var app      = express();
var cors = require('cors')
const path = require("path");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:3001',
  ServerTwo = 'http://localhost:3002',
  ServerThree = 'http://localhost:3003',
  ServerFour = 'http://localhost:3004';

app.use(cors())

//app.use(express.static(path.join(__dirname , "index.html")));
app.use(express.static(path.join(`${__dirname}/public`)))


//larry initial render
app.all("/headerFooter", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});
//larry name click
app.all("/names/*", function(req, res) {
    console.log('redirecting to Server1');
    apiProxy.web(req, res, {target: serverOne});
});

app.all("/app2/*", function(req, res) {
    console.log('redirecting to Server2');
    apiProxy.web(req, res, {target: ServerTwo});
});
//johns initial render
app.all("/itemdetail", function(req, res) {
    console.log('redirecting to Server3');
    apiProxy.web(req, res, {target: ServerThree});
});
//johns temp button click
app.all("/item/*", cors(), function(req, res) {
    console.log(res)
    console.log('redirecting to Server3 item');
    apiProxy.web(req, res, {target: ServerThree});
});
// Jin initial render
app.all("/itemreview", function(req, res) {
    
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: ServerFour});
});
//jin route to review server
app.all("/targets/*", function(req, res) {
    
    console.log('redirecting to Server4');
    apiProxy.web(req, res, {target: ServerFour});
});


app.listen(3000);









