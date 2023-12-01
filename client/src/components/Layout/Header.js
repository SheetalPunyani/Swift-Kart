//making it a functional component using.
// rafce=react arrow fn. (component) with export.
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../Context/auth";
import toast from "react-hot-toast";

const Header = () => {
	const [auth, setAuth] = useAuth(); //useAuth m se get kreg.
	const handlelogut = () => {
		setAuth({
			...auth,
			user: null,
			token: null,
		}); //setAuth m remove krenge user&token baki as it is rheg. then loclal storage clear bcz phle local storage cler kr to page refresh hht h.
		localStorage.removeItem("auth");
		toast.success("Logged out successfully");
	};
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo01'
						aria-controls='navbarTogglerDemo01'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
						<Link to='/' className='navbar-brand'>
							<GiShoppingBag /> Swift-Kart
							{/* 🛒 */}
						</Link>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink to='/' className='nav-link '>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink to='/category' className='nav-link '>
									Category
								</NavLink>
							</li>
							{!auth.user ? (
								<>
									<li className='nav-item'>
										<NavLink to='/register' className='nav-link'>
											Register
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='/login' className='nav-link'>
											Login
										</NavLink>
									</li>
								</>
							) : (
								<li className='nav-item'>
									<NavLink
										onClick={handlelogut}
										to='/login'
										className='nav-link'
									>
										LOGUT
									</NavLink>
								</li>
							)}
							<li className='nav-item'>
								<NavLink to='/cart' className='nav-link'>
									Cart (0)
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
