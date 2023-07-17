/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingUp from "../pages/SingUp/SingUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/singup',
				element: <SingUp />
			},
			{
				path: '/login',
				element: <Login />
			},
		]
	},
]);

export default router