//app.js m layout ki jarurat nhi h.
import { Routes, Route } from "react-router-dom";
//Routes work like a container and iske ander sare Route ko rkh skte h.isse routes create krenge.
/* element ki property se koi bhi componenet ko show kara skte h. */
//path me url me * ka mtlb h agar upr wale route nhi h to * wala route execute hoga.
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />

				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/Policy' element={<Policy />} />
				<Route path='*' element={<Pagenotfound />} />
			</Routes>
		</>
	);
}

export default App;
