import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
   res.status(300).json({
    message: "My first Controller"
   })
})

export {registerUser};