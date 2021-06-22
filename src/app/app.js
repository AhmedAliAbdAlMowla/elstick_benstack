const express = require("express");
const app =express();
const logger = require("morgan");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.get("/", async (req, res)=>{


res.status(200).json({
    messahe:"welcome : Ahmed Ali Ahmed"
});

});




module.exports = app;