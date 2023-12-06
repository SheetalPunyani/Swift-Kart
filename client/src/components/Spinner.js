import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
	const [count, setCount] = useState(3);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		//use effect m initially ek function call kreng.
		const interval = setInterval(() => {
			setCount((prevValue) => --prevValue); //initially count 3 h to -- hg .
		}, 1000);
		count === 0 &&
			navigate(`/${path}`, {
				state: location.pathname, //if its 0 query string m path hoga.
			});
		return () => clearInterval(interval); //clear interval mtlb count 0 hoga to interval clear hoga.
	}, [count, navigate, location, path]);
	return (
		<>
			<div
				className='d-flex flex-column justify-content-center align-items-center'
				style={{ height: "100vh" }}
			>
				<h1 className='Text-center'>redirecting to you in {count} second </h1>
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</>
	);
};

export default Spinner;
