
import { createUser } from "../dataAccessObject/userCreate.dao.js"
import { findUserByEmail, findUserByEmailandPassword } from "../dataAccessObject/userSearch.dao.js"
import { signedJsonWebToken } from "../jwt/jsonWebTokenSign.jwt.js"


// registering the user
export const registerUserService = async (name, email, password) => {
    const user = await findUserByEmail(email)
    if (user) {
        throw new Error("this user already exists")
    }
    const newUser = await createUser(name, email, password)
    const token = await signedJsonWebToken({ id: newUser._id })
    return { token, user }
}

// login the user
export const loginUserService = async (email, password) => {
    const user = await findUserByEmailandPassword(email);
    if (!user) {
        throw new Error("invalid Username or Password ❌")
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
        throw new Error("invalid Username or Password ❌")
    }
    const token = await signedJsonWebToken({ id: user._id })
    return { token, user };
}

