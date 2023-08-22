const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const greeting = require("./greetingMid")
const userAPI = require("./API/user")
const productAPI = require("./API/product")
productAPI(app, "Com param!")


app.post("/user", userAPI.save)
app.get("/user", userAPI.receive)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(greeting("Leo"))

app.use((req, res, next) => {
    console.log("Before")
    next()
})

app.get("/clients/report", (req, res) => {
    res.send(`Client report: complete = ${req.query.completo} year = ${req.query.ano}`)
})

app.post("/body", (req, res) => {
    // let body = ""
    // req.on("data", function(piece){
    //     body += piece
    // })

    // req.on("end", function() {
    //     res.send(body)
    // })
    res.send(req.body)
})

app.get("/clients/:id", (req,res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.all("/nice", (req, res, next) => {
    console.log("During")
    res.json({
        data: [
            { id: 7, name: "Ana", position: 1 },
            { id: 34, name: "Bia", position: 2},
            { id: 73, name: "Carlos", position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    next()

    // res.json({
    //     name: "iPad 32 GB",
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // res.send("<i>Estou</i> <br> <h1>suaves</h1>")
})

app.use((req, res) => {
    console.log("After")
})

app.listen(3000, () => {
    console.log("Backend executando...")
})
