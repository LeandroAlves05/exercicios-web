module.exports = (app, text) => {
    function save(req, res){
        res.send("Product > save > " + text)
    }

    function receive(req, res) {
        res.send("Product > receive > " + text)
    }

    app.post("/product", save)
    app.get("/product", receive)

    return { save, receive }
}