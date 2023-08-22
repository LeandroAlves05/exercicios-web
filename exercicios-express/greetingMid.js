function greeting(nome) {
    return function(req, res, next) {
        console.log(`Greetings ${nome}!`)
        next()
    }
}

module.exports = greeting