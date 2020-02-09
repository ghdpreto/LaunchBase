const express = require("express")
const nunjucks = require("nunjucks")

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
    return res.render("index")
})