//TEMPORARY NODE DEV SERVER ONLY

var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(7500);