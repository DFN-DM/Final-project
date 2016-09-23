var
	http = require("http"),
    moduleStatic = require("node-static"),
    file = new moduleStatic.Server("."),
	LISTEN_PORT = 8081;

http.createServer(function(req, res) {
	file.serve(req, res);
}).listen(LISTEN_PORT);

console.log("Server running on port " + LISTEN_PORT);
