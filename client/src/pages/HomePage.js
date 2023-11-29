//react arrow fn. with export (rafce) is a shortcut to create a functional component.
import React from "react";
import Layout from "./../components/Layout/Layout";
// import { Helmet } from "react-helmet";

const HomePage = () => {
	return (
		<Layout title={"best offers"}>
			<h1>HomePage</h1>
		</Layout>
	);
};

export default HomePage;
