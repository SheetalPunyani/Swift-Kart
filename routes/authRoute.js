//creating routes with express.
import express from "express";
import {
	registerController,
	loginController,
	testController,
	forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object.(nedded if we arerouting from seperate file)
const router = express.Router();

//routing for register of
// METHOD = POST
router.post("/register", registerController);

//LOGIN ROUTE || POST req.
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test route
router.get("/test", requireSignIn, isAdmin, testController);
//url ke baad or controller se pehle kitne bhi middleware create kr k  add kr sakte h.

//protected user route auth.
router.get("/user-auth", requireSignIn, (req, res) => {
	res.status(200).send({
		ok: true,
	});
});

//protected admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
	//yah 2 condition chck hogi toke(requireSigin) & wo admin h y nhi (isAdmin).
	res.status(200).send({
		ok: true,
	});
});

export default router;
