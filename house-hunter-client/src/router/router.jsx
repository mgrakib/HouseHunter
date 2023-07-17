/** @format */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingUp from "../pages/SingUp/SingUp";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import HouseOwner from "../pages/DashboardPages/HouseOwner/HouseOwner";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/singup",
				element: <SingUp />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
	{
		path: "/dashboard/house-owner",
		element: <Dashboard />,
		children: [
			{
				path: "/dashboard/house-owner",
				element: <HouseOwner />
			},
		],
	},
	{
		path: "/dashboard/house-renter",
		element: <Dashboard />,
	},
]);

export default router