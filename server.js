const server = require("express");
const bodyParser = require("body-parser");

const app = server();
/* confige express to use body parser as a middle ware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(server.static("nodejs-project"));
const cors = require("cors");
app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ message: res.body.msg });
});

app.get("/hi", (req, res) => {
  res.send("Hi momo");
});

app.get("/test", (req, res) => {
  res.send("you test now");
});

app.get("/findSum/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;
  console.log(num1, num2);
});

app.post("/addCommet", (req, res) => {
  res.send("comment Added ");
});

app.put("/editComment", (req, res) => {
  res.send("comment Edited");
});

app.delete("/deleteCommet", (req, res) => {
  res.send("comment Deleted! ");
});

app.get("/numbers", (req, res) => {
  res.sendFile(__dirname + "./views/numbers.html");
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
