const Event = require('../models/Event');

module.exports = {

    async getAll(){
        return await Event.find({})
    },

    async getAllActive(){
        return await Event.find({active: true})
    },

    async getOneEvent(filter){
        return await Event.findOne(filter)
    },

    async create(event){
        return Event.create(event)
    },

    async update(eventId, event){
        return await Event.findByIdAndUpdate(eventId, event)
    },

    async remove(eventId){
        return await Event.findByIdAndDelete(eventId)
    }
}