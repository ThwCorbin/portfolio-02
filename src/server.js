// Node.js builtin modules
const path = require("path");

// Third party libraries
const express = require("express");
const app = express();
// The app returned by express() is in fact a JavaScript Function, 
// which is passed to Node’s HTTP servers as a callback to handle requests

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
// The port will be ... or http://127.0.0.1:3000/
// Heroku generates the port or the port default is 3000 for local production

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.listen(port, () => console.log(`Server is up on port ${port}.`));
// Binds and listens for connections on the specified host and port.
// This method is identical to Node’s http.Server.listen().