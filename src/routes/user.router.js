import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, loginUser, logoutUser, refreshTheAccessToken, registerUser } from "../controllers/register.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
      {
        name: "avatar",     //The name should be same in front end form fields.
        maxCount: 1         //The number of files you want to upload.
      },

      {
        name: "coverimage",
        maxCount: 1
      }
    ]),
    registerUser);

    router.route("/login").post(loginUser)

    //Secured Routes:
    //Secured Routes are those routes that are dependent on some other task. 
    //The logout functionality only works when the user is logged in. 
    router.route("/logout").post(verifyJWT, logoutUser)
    router.route("/refresh-token").post(refreshTheAccessToken)
    router.route("/get-current-user").post(verifyJWT,getCurrentUser)
    router.route("/change-password").post(verifyJWT, changeCurrentPassword) 
    
//https:localhost:8000/api/v1/users/register

//export {router};
export default router; // This time we are using default method because we want to give some unique name to the router import statement in app.js file