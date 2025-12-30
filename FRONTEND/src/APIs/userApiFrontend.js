import axiousInstance from "../utility/axiosInstance"

export const frontendUserLoginApi = async (email, password) => {
    const { data } = await axiousInstance.post("/api/auth/login", { email, password })
    return data
}
export const frontendUserRegisterApi = async (name , email , password) => {
    const { data } = await axiousInstance.post("/api/auth/register", { name , email , password })
    return data
}

export const frontendUserLogout = async () => {
    const { data } = await axiousInstance.post("/api/auth/logout")
    return data
}