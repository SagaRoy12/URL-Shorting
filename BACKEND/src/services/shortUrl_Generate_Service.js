import { generateNanoid } from "../utility/helperFunction.js"
import { shortUrlSaver, findCustomShortUrl } from "../dataAccessObject/shortUrl.dao.js"
import { findUrlByFullUrl } from "../dataAccessObject/shortUrl.dao.js"
import { ConflictError } from "../utility/errorHandeler.js"

export const createShortUrlWithUserService = async (url, userId, slug = null) => {
    console.log('Service received userId:', userId, 'slug:', slug);

    // Only check for existing URL if no custom slug is provided
    // This allows users to create multiple custom short URLs for the same destination
    if (!slug || !slug.trim()) {
        const existingUrl = await findUrlByFullUrl(url, userId);
        if (existingUrl) {
            console.log('Returning existing URL:', existingUrl);
            return existingUrl; // Return existing short URL
        }
    }

    // Check if custom slug already exists
    if (slug && slug.trim()) {
        const existingCustomUrl = await findCustomShortUrl(slug);
        if (existingCustomUrl) {
            throw new ConflictError("Custom URL already exists with this slug");
        }
    }

    const generatedShortUrlWithUser = (slug && slug.trim()) ? slug : generateNanoid(7)
    console.log('Generated short URL:', generatedShortUrlWithUser);
    const savedUrl = await shortUrlSaver(generatedShortUrlWithUser, url, userId)
    return savedUrl;
}


export const createShortUrlWithOutUserService = async (url, userId, slug = null) => {
    // Check if custom slug already exists
    if (slug && slug.trim()) {
        const existingCustomUrl = await findCustomShortUrl(slug);
        if (existingCustomUrl) {
            throw new ConflictError("Custom URL already exists with this slug");
        }
    }

    const generatedShortUrlWithoutUser = (slug && slug.trim()) ? slug : generateNanoid(7)

    if (!generatedShortUrlWithoutUser) {
        throw new Error("Short url not generated")
    }
    const savedUrl = await shortUrlSaver(generatedShortUrlWithoutUser, url, userId)
    return savedUrl
}



