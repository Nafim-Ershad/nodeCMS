const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/static')));

app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
})