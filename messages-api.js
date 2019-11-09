const express = require("express");
const app = express();
const port = 3000;

app.get("/test", (req, res) => res.send("Hello stranger!"));

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

let counterOfRequests = 0;
app.post("/messages", (req, res, next) => {
  const message = "Message received loud and clear";
  console.log(req.body.text);
  if (!req.body.text || !/\S/.test(req.body.text)) {
    return res
      .status(400)
      .send("You need to use text property in your request");
  } else {
    counterOfRequests++;
    return counterOfRequests > 5
      ? res.status(429).send("Stop sending these messages, please")
      : res.send({ message });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
