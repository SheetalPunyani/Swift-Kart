import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
	const [ok, setOk] = useState(false); //initially set to false
	const [auth, setAuth] = useAuth(); //destructuring the auth state from the useAuth hook
	//now to GET it from the server,  use useEffect hook
	useEffect(() => {
		const authCheck = async () => {
			const res = await axios.get(
				"/api/v1/auth/user-auth"
				//axios se user-auth api in authRoute.js ko hit kryeng.
				//bu default jo bhi req jaygi usme headers rhega using axios in context api auth .js
			);
			if (res.data.ok) {
				setOk(true);
			} else {
				setOk(false);
			}
		};
		if (auth?.token) authCheck();
	}, [auth?.token]);
	//Outlet is used to perform nested routing.

	return ok ? <Outlet /> : <Spinner />;
}
