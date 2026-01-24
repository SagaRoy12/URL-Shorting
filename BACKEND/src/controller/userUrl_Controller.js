import { getAllUrlsByUserIdDao } from "../dataAccessObject/userSearch.dao.js";
import { deleteUrlByIdAndUserId } from "../dataAccessObject/shortUrl.dao.js";
import tryCatchWrapperForErrorHandeling from "../utility/tryCatchWrapper.js";

export const getAllUrlsByUserController = tryCatchWrapperForErrorHandeling(async(req , res)=>{
    const {_id} = req.user;
        const allUrls = await getAllUrlsByUserIdDao(_id);
        res.status(200).json({allUrls}); // sending all urls of the user
})

export const deleteUrlController = tryCatchWrapperForErrorHandeling(async(req, res) => {
    const { urlId } = req.params;
    const userId = req.user._id;

    const deletedUrl = await deleteUrlByIdAndUserId(urlId, userId);
    
    if (!deletedUrl) {
        return res.status(404).json({ message: "URL not found or unauthorized" });
    }

    res.status(200).json({ 
        message: "URL deleted successfully",
        deletedUrl: deletedUrl 
    });
})
