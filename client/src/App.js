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
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/User";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />

				<Route path='/dashboard' element={<PrivateRoute />}>
					<Route path='user' element={<Dashboard />} />
					<Route path='user/orders' element={<Orders />} />
					<Route path='user/profile' element={<Profile />} />
				</Route>
				<Route path='/dashboard' element={<AdminRoute />}>
					<Route path='admin' element={<AdminDashboard />} />
					<Route path='admin/create-category' element={<CreateCategory />} />
					<Route path='admin/create-product' element={<CreateProduct />} />
					<Route path='admin/users' element={<Users />} />
				</Route>
				<Route path='/register' element={<Register />} />
				<Route path='/forgot-password' element={<ForgotPasssword />} />
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
