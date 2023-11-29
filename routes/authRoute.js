//creating routes with express.
import express from "express";
import {
	registerController,
	loginController,
	testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object.(nedded if we arerouting from seperate file)
const router = express.Router();

//routing for register of
// METHOD = POST
router.post("/register", registerController);

//LOGIN ROUTE || POST req.
router.post("/login", loginController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);
//url ke baad or controller se pehle kitne bhi middleware create kr k  add kr sakte h.

export default router;
