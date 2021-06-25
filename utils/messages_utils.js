const Message = require('../models/message')

const getAllMessages = function(req){
    return Message.find()
}

const addMessage = function(req){
    let date = Date.now()
    req.body.created_at = date
    req.body.modified_at = date
    return new Message(req.body)
}




module.exports = {getAllMessages, addMessage}