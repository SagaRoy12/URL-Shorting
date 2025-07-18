import User from "../dbSchema/user.schema.js"

export const createUser = async(name , email , password)=>{
    const newUser = new User({
        name,
        email,
        password
    })
    return await newUser.save()
}