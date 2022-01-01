const mainService = require('../services/mainService')

exports.home = (req, res) => {
    const response = mainService.home()
    res.json(response)
}