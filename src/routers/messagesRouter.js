const express = require('express');
const Message = require('../models/messagesModel');
const router = new express.Router();

router.get('/messages', async (req,res) => {
    try {
        const messages = await Message.find({})
        return res.send(messages)
    } catch (err) {
        return res.status(500).send({error: err.message})
    }
})

router.post('/messages/add', async (req,res)=> {
    const message = new Message(req.body);
    try {
        await message.save();
        return res.send(message);
    } catch(err) {
        return res.status(400).send({error: err.message})
    }
})

module.exports = router;