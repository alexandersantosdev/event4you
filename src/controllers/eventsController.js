const eventsService = require('../services/eventsService')

exports.listAllEvents = async (req, res) => {
    const allEvents = await eventsService.list();
    if(allEvents) return res.json(allEvents);
    return res.json({message : "No events found!"})
}

exports.createEvent = async (req, res) => {
    const event = await eventsService.create(req)
    if (event) return res.json(event)
    return res.json({message : "Error creating the event"})
}