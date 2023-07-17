/** @format */

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import axios from "axios";

const SingUp = () => {
	const naviage = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => {
		const {email } = data;
		axios.post("http://localhost:5000/generat-new-user", data).then(data => {
			console.log(data)
			localStorage.setItem('email', email)
			naviage('/');
		})
	};

	return (
		<div className='bg-secondary-bg-color py-4'>
			<Container>
				<div>
					<h4 className='text-[20px] font-semibold'>Sing Up</h4>
				</div>

				<div className='my-5'>
					<div className='flex items-center justify-center'>
						<div className='px-10 bg-white rounded-md border w-1/3 shadow-lg'>
							<form onSubmit={handleSubmit(onSubmit)}>
								<p className='text-[18px] py-5 border-b text-center'>
									Sing Up
								</p>

								<div className='py-5'>
									{/* Full Name */}
									<div>
										<label
											htmlFor=''
											className='font-semibold'
										>
											<span className='text-red-500'>
												*
											</span>{" "}
											Full Name :
										</label>
										<div>
											<input
												type='text'
												{...register("fullName", {
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
											{errors.fullName?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[10px] text-red-500'
												>
													Full Name is required
												</p>
											)}
										</div>
									</div>
									{/* role  */}
									<div className='mt-4'>
										<label
											htmlFor=''
											className='font-semibold'
										>
											<span className='text-red-500'>
												*
											</span>{" "}
											Role :
										</label>
										<div>
											<select
												{...register("role", {
													required: true,
												})}
												id=''
												className='border outline-none w-full py-[6px] px-2 rounded-sm'
											>
												<option value=''>
													Select Role
												</option>
												<option value='owner'>
													Owner
												</option>
												<option value='renter'>
													Renter
												</option>
											</select>
											{errors.role?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[10px] text-red-500'
												>
													Role is required
												</p>
											)}
										</div>
									</div>
									{/* phone  */}
									<div className='mt-4'>
										<label
											htmlFor=''
											className='font-semibold'
										>
											<span className='text-red-500'>
												*
											</span>{" "}
											Phone Number :
										</label>
										<div>
											<input
												type='tel'
												{...register("phone", {
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
											{errors.phone?.type ===
												"required" && (
												<p
													role='alert'
													className='text-[10px] text-red-500'
												>
													Phone Number is required
												</p>
											)}
										</div>
									</div>

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
											Sing Up
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div className='text-center'>
					Already have account?{" "}
					<Link to={'/login'} className='text-brand-color border-b'>Login</Link>
				</div>
			</Container>
		</div>
	);
};

export default SingUp;
