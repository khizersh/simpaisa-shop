const express = require('express');
const app = express();
const cron = require("node-cron");
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const uploadRoute = require('./routes/upload');
app.use('/api/file', uploadRoute);

var host = '0.0.0.0';
var port = 3001;
app.listen(port, host, () => console.log("Up and running"));