
import { createShortUrlWithUserService, createShortUrlWithOutUserService } from "../services/shortUrl_Generate_Service.js"
import { findUrlFromShortUrl } from "../dataAccessObject/shortUrl.dao.js"
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js"
import { findUserById } from "../dataAccessObject/userSearch.dao.js";

export const createShortUrlWithoutUser = tryCatchWrapperForErrorHandeling(async (req, res) => {

    const { url } = req.body // Extracting the URL from the request body
    if (!url) {
        throw new Error("URL is required");
    }
    const shortUrl = await createShortUrlWithOutUserService(url, null) // Pass null for userId

    res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl.short_url }) // Sending the full URL with the short URL appended

})

export const createShortUrlWithUser = tryCatchWrapperForErrorHandeling(async (req, res) => {

    const { url, slug } = req.body

    const userId = req.user?._id || "test-user-id" // Mock user ID for testing
    console.log(`userId: ${userId}`);

    if (!url) {
        throw new Error("URL is required");
    }

    const shortUrl = await createShortUrlWithUserService(url, userId)

    res.send(process.env.APP_URL + shortUrl.short_url)

})


// previous function has generated a ashort url annd now from that showt url we find and redirect
export const redirectFromShortUrl = tryCatchWrapperForErrorHandeling(async (req, res) => {
    const shortenedUrl = req.params.shortenedUrl;
    console.log('Looking for shortened URL:', shortenedUrl);

    const url = await findUrlFromShortUrl(shortenedUrl);
    console.log('Found URL:', url);

    if (!url) {
        return res.status(404).send('Short URL not found');
    }

    return res.redirect(url.full_url);
})

export const createCustomUrl = tryCatchWrapperForErrorHandeling(async (req, res) => {
    const { url, customSlug } = req.body;

    console.log('createCustomUrl called with:', { url, customSlug, hasUser: !!req.user });

    if (!url) {
        throw new Error("URL is required");
    }

    if (!customSlug) {
        throw new Error("Custom slug is required");
    }

    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "Authentication required to create custom URLs"
        });
    }

    console.log('Creating custom URL with userId:', req.user._id, 'customSlug:', customSlug);

    // Only authenticated users can create custom URLs
    const result = await createShortUrlWithUserService(url, req.user._id, customSlug);

    console.log('Custom URL created, result:', result);

    res.status(200).json({ shortUrl: process.env.APP_URL + result.short_url });
});
