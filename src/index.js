const express = require('express');
const connect = require('./config/database');

const app = express();

// const Tweet = require('./models/tweet');
const HashtagRepository = require('./repository/hashtag-repository')

app.listen(3000, async () => {
    console.log("server started at port 3000");
     await connect();
     console.log("Mongodb connected");
    
     let repo = new HashtagRepository();
     await  repo.bulkcreate([
        {
            title: 'Trend',
            tweets: []
        }, 
        {
            title: 'Excited',
            tweets: []
        },
        {
            title: 'Python',
            tweets: []
        },
        {
            title: 'Fun',
            tweets: []
        },{
            title: 'career',
            tweets: []
        }

     ])
});