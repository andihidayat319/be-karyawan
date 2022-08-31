function errorHandler(error, res) {
    
    if (error.name === "SequelizeValidationError") {
        const messages = error.errors.map(el => {
            return el.message
        })
        res.status(400).json({
            messages
        })
    } else if (error.name === "Bad Request") {
        res.status(400).json({
            messages: "Bad Request"
        })
    } else if(error.name === "Not Found"){
        res.status(404).json({
            messages: "error not found"
        })
    } else if (error.name === "SequelizeUniqueConstraintError") {
        const messages = error.errors.map(el => {
            return el.message
        })
        res.status(409).json({
            messages
        })
    } else {
        res.status(500).json({
            messages: 'Internal Server Error'
        })
    }
}

module.exports = errorHandler