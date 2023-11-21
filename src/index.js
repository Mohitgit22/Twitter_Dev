const express = require('express');
const connect = require('./config/database');

const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async () => {
    console.log("server started at port 3000");
     await connect();
     console.log("Mongodb connected");


     //  const tweet = await Tweet.create({
     //     content: 'third tweet',
     //      userEmail: 'a@b.com',
     //  });

     //const tweets = await Tweet.find({ userEmail: 'a@b.com'});
     const tweetRepo = new TweetRepository();
     //  // const tweet = await tweetRepo.update('655336a853f246cb17ca749f', {content: ' GOOD to go'});

     //  const tweet = await tweetRepo.create({content: 'my tweet'});
     //  console.log(tweet);
     //  tweet.comments.push({content:'first comment'});
     //  await tweet.save();
     //  console.log(tweet)

     //  const tweet = await tweetRepo.create({content: 'Tweet with comment Schema'})
     //  console.log(tweet);
     //  const comment = await Comment.create({content: 'new comment'});
     //  tweet.comments.push(comment);
     //  await tweet.save();

     // const tweet = await tweetRepo.getwithComments('6553413e1e4c8f25d901f2ba');
    //  const tweet = await tweetRepo.getAll(0, 4);
    //  console.log(tweet[0].contentWithEmail);

    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);
});