//req,res bcz its a calllback fn.;
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
	try {
		const { name, email, password, phone, address, role } = req.body;
		//Validations
		if (!name) {
			return res.send({ error: "Name is required" });
		}
		if (!email) {
			return res.send({ message: "email is required" });
		}
		if (!password) {
			return res.send({ message: "password is required" });
		}
		if (!phone) {
			return res.send({ message: "phone no. is required" });
		}
		if (!address) {
			return res.send({ message: "address is required" });
		}
		// checking user
		const existingUser = await userModel.findOne({ email: email });
		//checking existing users.so that multiple accounts cannot be made with same email.
		if (existingUser) {
			return res.status(200).send({
				success: false,
				message: "Already registered please login",
			});
		}
		//registering user

		const hashedPassword = await hashPassword(password);
		//save
		const user = await new userModel({
			name,
			email,
			phone,
			address,
			password: hashedPassword, //key is password and its value ls writtn.
			role,
		}).save();
		res.status(201).send({
			success: true,
			message: "User registered successfully",
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			sucess: false,
			message: "error in registeration",
			error,
		});
	}
};

//POST METHOD Login route.
export const loginController = async (req, res) => {
	try {
		const { email, password } = req.body; //destructuring email and password from req.body.
		//validation
		if (!email || !password) {
			return res.status(404).send({
				success: false,
				message: "invalid email or password",
			});
		}
		//checking user exist or not.
		const user = await userModel.findOne({ email: email });
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "email is not registered",
			});
		}
		//comapre/matching password in database.
		const match = await comparePassword(password, user.password);
		if (!match) {
			//validation
			return res.status(200).send({
				success: false,
				message: "invalid password",
			});
		}
		//creating token if email and password is correct using json webtoken.
		const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});
		//after creating token sending response.
		res.status(200).send({
			success: true,
			message: "logged in successfully",
			user: {
				name: user.name,
				email: user.email,
				phonne: user.phone,
				address: user.address,
			},
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "error in login",
			error,
		});
	}
};

//test controller
export const testController = (req, res) => {
	res.send("protected route");
};
