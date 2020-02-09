const express = require("express")
const nunjucks = require("nunjucks")

const data = require("./data")

const server = express()

server.use(express.static("public"))

//configurando nunjucks
server.set("view engine", "html")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.listen(5001, function(){
    console.log("Server up")
})

server.get("/", function (req, res) {
    return res.render("index", { items: data})
})

server.get("/recites-info", function (req, res) {
    return res.render("recites-info")
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/food-recipes", function (req, res) {
    return res.render("food-recipes", { items: data })
})