import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//configuring env;
dotenv.config();

//database config
connectDB();

const app = express();

//middleware.
app.use(cors());
app.use(express.json()); //can send json data in rquest or response by enabling json middleware.
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
	res.send("<h1>Welcome to Swift-Kart app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
	console.log(
		`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
			.white
	);
});
