const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        const token = authorization.substring(7)
        request.token = token
        next()
    } else {
        next()
    }

}

module.exports = { tokenExtractor }