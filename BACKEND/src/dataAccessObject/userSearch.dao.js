import User from "../dbSchema/user.schema.js"

export const findUserByEmail = async(email)=>{
    return await User.findOne({email})
}

export const findUserById = async(id)=>{
    return await User.findById(id)
}

