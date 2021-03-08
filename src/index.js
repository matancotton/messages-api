const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const router = require('./routers/messagesRouter');

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, ()=> {
    console.log('The Server is up and running on port', port)
})