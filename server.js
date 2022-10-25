const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { homeRoute } = require('./routes');

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/static')));

app.set('views', './views');
app.set('view engine', 'pug');

// ROUTE
app.use('/', homeRoute);

app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
})