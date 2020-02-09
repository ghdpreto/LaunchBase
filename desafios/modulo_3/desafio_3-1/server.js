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
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log("Server ok")
})

//retorno da rota principal (/)
server.get("/", function (req, res) {
    const data = {
        avatar_url: "/images/logo.png",
        title: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        techs: ["NodeJS", "ReactJS", "React Native"],
        links: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/rocketseat"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/rocketseat_oficial/"
            },
            {
                name: "Twitter",
                url: "https://twitter.com/rocketseat"
            },
            {
                name: "Youtube",
                url: "https://www.youtube.com/rocketseat"
            },
            {
                name: "Discord",
                url: "https://discordapp.com/invite/gCRAFhc"
            },
            {
                name: "Email",
                url: "mailto:oi@rocketseat.com.br"
            },
        ]
    }
        

    return res.render("about", { data })
})

server.get("/portfolio", function (req, res) {
    return res.render("portfolio", { items: videos})
})


server.get("/video", function (req, res) {
    
    const id = req.query.id

    const video = videos.find(function(video){

        if (video.id == id) {
            return true
        }
    })

    if (!video) {
        res.send("404")
    }

    return res.render("video", { item: video })
})



server.use(function (req, res) {
    res.status(404).render("not-found")
})
