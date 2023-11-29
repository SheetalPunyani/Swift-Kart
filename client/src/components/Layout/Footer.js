//making it a functional component using.
// rafce=react arrow fn. (component) with export.
import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
	return (
		<div className='footer'>
			{/* using bootstrap css classes. */}
			<h4 className='text-center'>
				Developed By{" "}
				<a
					href='https://www.instagram.com/Sheetal14__/'
					target='_blank' // opens the link in a new tab
					rel='noopener noreferrer'
				>
					Sheetal Punyani
				</a>
				&copy;
			</h4>
			<p className='text-center mt-3'>
				<Link to='/about'>About </Link>|<Link to='/contact'> Contact</Link>|
				<Link to='/policy'> Privacy Policy</Link>
			</p>
		</div>
	);
};

export default Layout;
