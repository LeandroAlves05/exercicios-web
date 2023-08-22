function save(req, res) {
    res.send("User > save")
}

function receive(req, res) {
    res.send("User > receive")
}

module.exports = { save, receive }