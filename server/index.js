require('dotenv').config();
const express = require('express');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandle = require('./middleware/ErrorHandlingMiddleware');
const path = require('path')

const PORT = process.env.PORT || 5000;
const sequelize = require('./db');


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//обработка ошибок
app.use(errorHandle);


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