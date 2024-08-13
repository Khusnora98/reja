console.log('To Start Web Server');
const express = require("express");
const app = express();
const http = require ("http");


//1- Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2- Session code

//3- View code
app.set("views", "views");
app.set("view engine", "ejs");

//4 - Routing code
app.get("/hello", function(req, res){
   // res.end(`<h1 style = "background: yellow ">HELLO WORLD by Nora</h1>`);
   res.end(`<h1>HELLO WORLD</h1>`);
});
app.get("/gift", function(req, res){
    // res.end(`<h1 style = "background: yellow ">HELLO WORLD by Nora</h1>`);
    res.end(`<h1>You are in gift's page </h1>`);
 });
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server is running successfully on port: ${PORT}`);
});