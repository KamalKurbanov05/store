require('dotenv').config();
const express = require('express');
const models = require('./models/models');

const PORT = process.env.PORT || 5000;
const sequelize = require('./db');


const app = express();



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log('port => :', PORT));
    } catch(e) {
        console.log('errr->',e)
    }
}

start();