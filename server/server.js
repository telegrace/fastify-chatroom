const fastify = require("fastify")({ logger: true });
const app = fastify();
const cookieSession = require("cookie-session");

// sockets.io
const server = require("http").Server(app);
const io = require("socket.io")(server, {
	allowRequest: (req, callback) =>
		callback(null, req.headers.referer.startsWith("http://localhost:3000")),
});

let { secret } = require("./cookiesecret");
const csMiddleware = cookieSession({
	secret: secret,
	maxAge: 1000 * 60 * 60 * 24 * 90,
});
// Declare a route
app.get("/", async (request, reply) => {
	return { hello: "world" };
});

// Run the server!
const start = async () => {
	try {
		await app.listen(3000);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();
