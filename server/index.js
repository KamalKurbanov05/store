require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');


const PORT = process.env.PORT || 5000;
const sequelize = require('./db');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log('port => :', PORT, "asdfasdf"));
    } catch(e) {
        console.log('errr->',e)
    }
}

start();