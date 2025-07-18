import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    }
})

// function too generate avatar with the unique hash 
function generateAvatar(email){
   
    const hash = require('crypto').createHash('md5').update(email).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}?d=mp`
}

const User = mongoose.model('User', userSchema);
export default User;