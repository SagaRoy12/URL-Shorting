import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
        unique: true
    },
    short_url: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    clicks: {
        type: Number,
        default: 0,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // taking reference from User model
    }

});

shortUrlSchema.index({ full_url: 1, user: 1 }, { unique: true });  // unique index for full_url and user

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
export default ShortUrl;
