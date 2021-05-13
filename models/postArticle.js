import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    text: String,
    Author: String,
    selectedImg: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostArticle = mongoose.model('PostArticle', postSchema);

export default PostArticle;