import {registerUserService} from "../services/authentication_Service.js"
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js"

export const registerUser =tryCatchWrapperForErrorHandeling( async (req, res)=>{

    const{name , email, password} = req.body

    const token = await registerUserService(name , email , password)
    console.log(token)
    res.status(200).json(token)
})

export const loginUser = async (req, res)=>{
    res.send("login user")
}