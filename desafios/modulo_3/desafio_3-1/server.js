const express = require("express")
const nunjucks = require("nunjucks")
const videos = require("./data")

const server = express()

//arquivos staticos (css)
server.use(express.static("public"))

//configuração do nunjucks para o tipo de arquivo
server.set("view engine", "njk")

//local (pasta a onde está o arquivo)
nunjucks.configure("views", {
    express: server
})

server.listen(5000, function () {
    console.log("Server ok")
})

//retorno da rota principal (/)
server.get("/", function (req, res) {
    return res.render("about")
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos })
})
