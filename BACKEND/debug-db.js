
import mongoose from 'mongoose';
import ShortUrl from './src/dbSchema/short.url.schema.js';
import dotenv from 'dotenv';
dotenv.config();

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB at " + process.env.MONGO_URI);

        console.log("Listing all ShortURLs:");
        const urls = await ShortUrl.find({});
        console.log(JSON.stringify(urls, null, 2));

        // Also try to find specifically by the method used in controller
        // Simulate a search if we had a specific ID, but here just showing all helps.

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
};
run();
