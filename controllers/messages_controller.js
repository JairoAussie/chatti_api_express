const {getAllMessages, addMessage} = require('../utils/messages_utils')

const getMessages = function(req, res) {
    getAllMessages(req).exec((err, messages)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(messages)
    })
}

const makeMessage = function(req, res){
    addMessage(req).save((err, message)=>{
        if(err){
            res.status(422)
            return res.json({error: err.message})
        }
        res.status(201)
        res.send(message)
    })
}

module.exports = {getMessages, makeMessage}