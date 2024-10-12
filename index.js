const express = require("express");
const app = express();
const products = require("./data/products.js");



app.get("/", (req, res) => {
    res.send("Hello World! ✋🏻");
});
app.get("/about", (req, res) => {
    res.send("Hello World! from about page🥲");
});
app.get("/contact", (req, res) => {
    res.send("contact user👍🏻");
});
app.get("/users/:name", (req, res) => {
    res.send(`Hello World! ${req.params.name} 😊🍬`);
});

app.get("/products", (req, res) => {
    res.send(products);
});


app.listen(3000, () => {        
    console.log("Server started on port 3000");
});

