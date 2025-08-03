import {registerUserService} from "../services/authentication_Service.js"
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js"
import {cookieOptions} from "../config/cookieOptions.config.js"

export const registerUser =tryCatchWrapperForErrorHandeling( async (req, res)=>{

    const{name , email, password} = req.body

    const token = await registerUserService(name , email , password)

    //console.log(token)
   
    res.cookie("ACCES_TOKEN", token , cookieOptions)  // saving the cookie with the token and options

    res.status(200).json({message:"user registered"})
})

export const loginUser = async (req, res)=>{
    res.send("login user")
}