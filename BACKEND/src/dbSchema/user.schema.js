import mongoose from "mongoose";
import bcrypt from "bcrypt";
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


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
// Hashing the Password before saving it to the database
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next()
    } else {
        this.password = await bcrypt.hash(this.password, 10)  // hashing using bycript
        next();
    }
})


// hiding the password anf __v from the response by converting the object to json and applying delete operation in it
userSchema.set(`toJSON`, {
    transform: function (doc, ret) {
        delete ret.password
        delete ret.__v
        return ret
    }
})
const User = mongoose.model('User', userSchema);
export default User;