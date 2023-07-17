import { Link } from 'react-router-dom';
import { BsMoon } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";

import avatar from '../../assets/imgs/avatar.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const NavBar = () => {
	const { user } = useContext(AuthContext);
	console.log(user)
    const [activeLink, setActiveLink] = useState('home')
    const navItem = (
		<>
			<Link>
				<li
					onClick={() => setActiveLink("home")}
					className={`nav-items-link  ${
						activeLink === "home" && "border-brand-color"
					}`}
				>
					<HiHome /> Home
				</li>
			</Link>
			<Link>
				<li
					onClick={() => setActiveLink("dashboard")}
					className={`nav-items-link ${
						activeLink === "dashboard" && "border-brand-color"
					}`}
				>
					<RiDashboardLine /> Dashbaord
				</li>
			</Link>
		</>
	);
    const accountItems = (
		<>
			<li className={``}>
				<div className='flex items-center gap-2 text-[16px]'>
					<BsMoon />
					<FaRegBell />
				</div>
			</li>

			{user?.fullName ? (
				<Link
					onClick={() => setActiveLink("login/singin")}
					
				>
					<li className={` text-gray-color`}>{user?.fullName}</li>
				</Link>
			) : (
				<Link
					onClick={() => setActiveLink("login/singin")}
					to={"/singup"}
				>
					<li className={` text-gray-color`}>Login/Sinup</li>
				</Link>
			)}
		</>
	);
    return (
		<div className='text-gray-light flex items-center justify-between h-[60px]'>
			<div className=' cursor-pointer'>
				<h1 className='uppercase text-3xl font-bold '>The ToLet</h1>
				<p className='leading-4 tracking-[1.5px]'>
					House Rent Solution
				</p>
			</div>

			<div>
				<ul className='flex items-center gap-3'>{navItem}</ul>
			</div>
			<div>
				<ul className='flex items-center gap-5'>{accountItems}</ul>
			</div>
		</div>
	);
};

export default NavBar;