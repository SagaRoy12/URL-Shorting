

import axiosInstance from '../utility/axiosInstance'    

export const getShortUrlFromBackend = async (url)=>{
    try {
        const {data} = await axiosInstance.post("/api/create" , {url})
        return data.shortUrl
    } catch (error) {
        console.log(error)
    }
}