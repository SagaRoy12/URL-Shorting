

import axiosInstance from '../utility/axiosInstance'

// now checking if the user is authenticated or not and then sending the request to the backend
export const getShortUrlFromBackend = async (url, isAuthenticated, customSlug) => {
    try {
        const endpoint = isAuthenticated ? "/api/create/with-user" : "/api/create"
          const { data } = await axiosInstance.post(endpoint, { 
            url,
            slug: customSlug  
        }) 
        return data.shortUrl
    } catch (error) {
        console.log(error)
    }
}