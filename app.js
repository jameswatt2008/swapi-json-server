const jsonServer = require("json-server");

const data = require("./data.json");
// const people = require("./people.json");

const server = jsonServer.create();

const serveStatic = require("serve-static");
const path = require("path");
server.use(
  serveStatic(path.join(__dirname, "public"), {
    maxAge: "1d",
  })
);

server.use((req, res, next) => {
  const { delay } = req.query;

  if (delay) {
    setTimeout(() => {
      next();
    }, Number(delay));
  } else {
    next();
  }
});

server.use(jsonServer.defaults());

const router = jsonServer.router(data);
server.use(router);

server.listen(3000);
console.log(`Server started on port 3000`);
