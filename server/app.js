const express = require("express");
const app = express();
const cron = require("node-cron");
const fileUpload = require("express-fileupload");
const uploadRoute = require("./routes/upload");

app.use(fileUpload());
app.use("/api/file", uploadRoute);

var port = 3001;
app.listen(port, () => console.log("Up and running on port " + port));
