/** @format */

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [errorPass, setErrorPass] = useState(null);
    const [errorUser, setErrorUser] = useState(null);
    const navigation = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => {
		const { email, password } = data;

		console.log(data);
		const vlaue = { email, password };
		axios("http://localhost:5000/login-user", {
			params: data
        }).then(res => {
            const status = res?.data?.message;
            if (status === "password-didn't match") {
                setErrorPass(status);
            } else if (status === "user-not-found") {
                setErrorUser(status);
            } else {
                localStorage.setItem('email', email)
                navigation('/');
            }
        });
	};
	return (
		<div className='bg-secondary-bg-color py-4 min-h-[calc(100vh-70px)]'>
			<Container>
				<div>
					<h4 className='text-[20px] font-semibold'>Login</h4>
				</div>

				<div className='my-5'>
					<div className='flex items-center justify-center'>
						<div className='px-10 bg-white rounded-md border w-1/3 shadow-lg'>
							<form onSubmit={handleSubmit(onSubmit)}>
								<p className='text-[18px] py-5 border-b text-center'>
									Login
								</p>

								<div className='py-5'>
									{/* email  */}
									<div className='mt-4'>
										<label
											htmlFor=''
											className='font-semibold'
										>
											<span className='text-red-500'>
												*
											</span>{" "}
											Email :
										</label>
										<div>
											<input
												type='email'
												{...register("email", {
													required: true,
												})}
												aria-invalid={
													errors.firstName
														? "true"
														: "false"
												}
												id=''
												className='border outline-none w-full py-[6px] px-2 rounded-sm'
											/>
											{errors.email?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[10px] text-red-500'
												>
													Email is required
												</p>
											)}
										</div>
									</div>
									{/* password  */}
									<div className='mt-4'>
										<label
											htmlFor=''
											className='font-semibold'
										>
											<span className='text-red-500'>
												*
											</span>{" "}
											Password :
										</label>
										<div>
											<input
												type='password'
												{...register("password", {
													required: true,
												})}
												aria-invalid={
													errors.firstName
														? "true"
														: "false"
												}
												id=''
												className='border outline-none w-full py-[6px] px-2 rounded-sm'
											/>
											{errors.password?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[10px] text-red-500'
												>
													Password is required
												</p>
											)}
										</div>
									</div>

									<div className='mt-4'>
										<button
											type='submit'
											className='py-[8px] px-2 rounded-sm bg-brand-color w-full text-white'
										>
											Login
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className='text-center'>
					Don't have an account?{" "}
					<Link
						to={"/singup"}
						className='text-brand-color border-b'
					>
						Sing Up
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default Login;
