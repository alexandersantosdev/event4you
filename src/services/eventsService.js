const eventsRepository = require('../repositories/eventsRepository')

exports.list = async () => {
    const eventsList = await eventsRepository.getAll()

    if (eventsList.length > 0) return eventsList
    return false
}

exports.create = async (req) => {
    const event = req.body
    if(!event) return false
    const createEvent = await eventsRepository.create(event)
    if(!createEvent) return false
    
    return createEvent
}