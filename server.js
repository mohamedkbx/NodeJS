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

app.get("/numbers", (req, res) => {
  res.send("you test now");
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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
