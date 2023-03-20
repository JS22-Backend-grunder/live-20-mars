"use strict";
const express = require('express');
const app = express();
const PORT = 8000;
const insultsRouter = require('./routes/insults.js');
app.use(express.json());
//Sätt en basurl till alla routes så alla startar med /api/insults
//Sen säg att det är de routes som ligger i insultsRouter som kopplas till denna basurl
app.use('/api/insults', insultsRouter);
app.listen(PORT, () => {
    console.log('Server started');
});
