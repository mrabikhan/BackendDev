import { Router } from "express";
import { registerUser } from "../controllers/register.controller.js";

const router = Router();

router.route("/register").post(registerUser);
//https:localhost:8000/api/v1/users/register

//export {router};
export default router; // This time we are using default method because we want to give some unique name to the router import statement in app.js file