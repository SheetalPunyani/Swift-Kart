//making this also fntional component by rafce.react arrow fn. with export (rafce) is a shortcut to create a functional component.
import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
	return (
		<Layout title={"Privacy Policy"}>
			<div className='row contactus '>
				<div className='col-md-6 '>
					<img
						src='/images/contactus.jpeg'
						alt='contactus'
						style={{ width: "100%" }}
					/>
				</div>
				<div className='col-md-4'>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
					<p>add privacy policy</p>
				</div>
			</div>
		</Layout>
	);
};

export default Policy;
