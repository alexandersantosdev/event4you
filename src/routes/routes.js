const { Router } = require('express')
const routes = Router()
const MainController = require('../controllers/mainController')
const EventsController = require('../controllers/eventsController')

routes.get('/', MainController.home)

routes.get('/events', EventsController.listAllEvents)
routes.post('/events', EventsController.createEvent)
module.exports = routes