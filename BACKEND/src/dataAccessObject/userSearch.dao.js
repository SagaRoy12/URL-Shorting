import User from "../dbSchema/user.schema.js"
import ShortUrl from "../dbSchema/short.url.schema.js"

export const findUserByEmail = async (email) => {
    return await User.findOne({ email })
}

export const findUserByEmailandPassword = async (email) => {
    return await User.findOne({ email }).select("+password")
}

export const findUserById = async (id) => {
    return await User.findById(id)
}

export const getAllUrlsByUserIdDao = async(id)=>{
    return await ShortUrl.find({user: id})
}
