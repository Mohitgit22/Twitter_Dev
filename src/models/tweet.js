const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
    },
    userEmail : {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{
    timestamps: true
});


// for custom queries we can write this with the help of virtuals
tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \nCreated by: ${this.userEmail}`;
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;