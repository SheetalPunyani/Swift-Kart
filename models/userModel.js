import moongose from "mongoose";

const userSchema = new moongose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String, // String is shorthand for {type: String}
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true } //timestamp will store the created time of newly created user.
);

export default moongose.model("users", userSchema);
