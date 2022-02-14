import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
        minLength : 5,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
},{timestamps : true});

export const blog = mongoose.model('blog',blogSchema);
