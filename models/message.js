const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Message = new Schema({
    m_text: {
        type: String,
        required: true
    },
    username:{
        type: String, 
        required: true
    }, 
    created_at:{
        type: Date, 
        required: true
    }, 
    modified_at:{
        type: Date, 
        required: true
    }
})

module.exports = mongoose.model("Message", Message)