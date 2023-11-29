//making it a functional component using.
// rafce=react arrow fn. (component) with export.
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";
//react-hot-toast is a library for toast notification.
const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta charSet='utf-8' />

				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content={author} />
				<title>{title}</title>
			</Helmet>
			<Header />
			<main style={{ minHeight: "70vh" }}>
				<Toaster />
				{children}
				{/* layout tag ke bich ka content display karane k liye props ka use krte hai.props ka use krke child element ko show karyenge. OR directly dereffernce children i.e. put children in arrow fn. argument () &  {} inside main tag. */}
			</main>
			<Footer />
		</div>
	);
};
Layout.defaultProps = {
	title: "Swift-Kart - Ecommerce",
	description: "MERN PROJECT",
	keywords: "MERN,react,node,mongodb",
	//ye automatically lelega titile ,description otherwise you can give for each page.
};

export default Layout;
