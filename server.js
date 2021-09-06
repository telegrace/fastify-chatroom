const app = require("fastify")();
const dev = process.env.NODE_ENV !== "production";
const path = require("path");
// const cookieSession = require("cookie-session");

app.register(require("fastify-nextjs")).after(() => {
	app.next("/");
	app.next("/registration");
	app.next("/login");
	app.next("/forgot");
	app.next("/chat");
});

app.listen(3000, (err) => {
	if (err) throw err;
	console.log("Server listening on http://localhost:3000");
});
