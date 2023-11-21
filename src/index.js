const express = require('express');
const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log("server started at port 3000");
     await connect();
     console.log("Mongodb connected");
  
    const tweets = await Tweet.find({
        content: ["First tweet","my tweet","sfdsf"]
    });
    console.log(tweets);

});