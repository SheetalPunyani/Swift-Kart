import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base.(protecting users usng jsowebtoken)
export const requireSignIn = async (req, res, next) => {
	//this is middleware so it has thre arguments i.e. next object.
	//simple meaning of middlware is if request jab bhi hm get krenge uske bad me next validate hoga fir response send hoga. agar next nhil like to code execution pause hoga age ka code excute nhi hog.next se validate krenge authenticate user ko.

	try {
		const decode = JWT.verify(
			req.headers.authorization,
			process.env.JWT_SECRET
		); //token is in headers inside authorization.jaise hi decode hoga uske bad next call krdenge tbhi aage ka code excute hoga.
		req.user = decode; //passing decode to user ,jab tk decode nhi hoga tb tk user ki id nhi milegi.basicaaly decrypt kre h.
		next();
	} catch (error) {
		console.log(error);
	}
};
//admin access (role=1)
export const isAdmin = async (req, res, next) => {
	try {
		const user = await userModel.findById(req.user._id);
		if (user.role !== 1) {
			return res.status(401).send({
				success: false,
				message: "unauthorized access",
			});
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(401).send({
			success: false,
			error,
			message: "error in admin middleware",
		});
	}
};
