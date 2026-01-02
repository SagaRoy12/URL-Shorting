import { registerUserService, loginUserService } from "../services/authentication_Service.js"
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js"
import { cookieOptions } from "../config/cookieOptions.config.js"

export const registerUser = tryCatchWrapperForErrorHandeling(async (req, res) => {

    const { name, email, password } = req.body

    const {token , user} = await registerUserService(name, email, password)

    //console.log(token)
    req.user = user
    res.cookie("ACCES_TOKEN", token, cookieOptions)  // saving the cookie with the token and options

    res.status(200).json({ message: "user registered" })
})

export const loginUser = tryCatchWrapperForErrorHandeling(async (req, res) => {
    const { email, password } = req.body

    const { token, user } = await loginUserService(email, password) 

    req.user = user
    res.cookie("ACCES_TOKEN", token, cookieOptions)

    res.status(200).json({ user: user, message: "user logged in" })
})