import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
	try {
		const saltRound = 10;
		const hashedPassword = await bcrypt.hash(password, saltRound);
		return hashedPassword;
	} catch (error) {
		console.log(error);
	}
};
// MVC (Model-View-Controller): A design pattern that separates an application into three interconnected components: the Model, which represents the data and business logic; the View, which displays the data to the user; and the Controller, which handles user input and updates the Model and View accordingly.
export const comparePassword = async (password, hashedPassword) => {
	return await bcrypt.compare(password, hashedPassword);
};
