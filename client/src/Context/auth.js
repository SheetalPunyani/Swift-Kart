import { useState, useEffect, useContext, createContext } from "react";
// we are creating context api(like redux toolkit api)-The Context API is a part of the React library and provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for sharing global data, such as themes or authentication status, across components.
// we are creating a global state to change the state of the if login to show logiut and remove the login register button.
//create context ki use se context create krnege and jaha bhi context use krna h  useContext hook use krlng.
const AuthContext = createContext();
// we are creating a context api to use the state of the user in the whole application.(similar to usage of useNavigate hook.)

//creating auth provider.
const AuthProvider = ({ children }) => {
	//creating state. initially ye ek object hga or iss object m user pass krenge and intialy use  ull rheg and token empty string rheg.
	//iss state ko auth provider m add kredenge(globally convert krdenge) fir isse khi se bhi acees krskte h authprovider ki thorugh.
	//destructuring children directly.
	//ab hum koi component ko wrap krdenge authprovider se to uss component ko authprovider ki state ka access milega. jaise index.js m browserrouter se app ko warp kre h.
	const [auth, setAuth] = useState({
		user: null,
		token: "",
	});
	//accesiing the localstorage to get the data of the user at initial time tbhi ek page pr continue stay krpyng.to do this using useeffect hook.
	useEffect(
		() => {
			const data = localStorage.getItem("auth");
			if (data) {
				const parseData = JSON.parse(data);
				setAuth({
					...auth, //to keep the previous data in auth as it is use ...auth.and then user or token ko fulfill kreng.
					user: parseData.user,
					token: parseData.token,
				});
			}
		},
		[auth] //dependency array m auth pss krng.
	);
	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			{/* jo bhi state h humare pass usko access krna h to value pass karyenge provider k ander auth &setauth to use khi bhi use krskteh.*/}
			{children}
		</AuthContext.Provider>
	);
};

// creating custom hook.all hooks start from use.
const useAuth = () => useContext(AuthContext);
//now we can use this useAuth hook anywhere in the application in any component. to get the state of the user.

export { useAuth, AuthProvider };
//now conext is created and we can use it anywhere in the application.
