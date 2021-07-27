const express = require('express');
const app = express();
const db = requrie('./configs/dbConfig.js')

app.use(db());
app.use(express.json());
app.use(express.urlencoded());


