const server = require("express");

const app = server();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/hi", (req, res) => {
  res.send("Hi momo");
});
app.get("/test", (req, res) => {
  res.send("you test now");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
