//react arrow fn. with export (rafce) is a shortcut to create a functional component.
import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../Context/auth";

const HomePage = () => {
	const [auth, setAuth] = useAuth();
	// getting auth from useauthand displaying it.
	return (
		<Layout title={"best offers"}>
			<h1>HomePage</h1>
			<pre>{JSON.stringify(auth, null, 4)}</pre>
		</Layout>
	);
};

export default HomePage;
