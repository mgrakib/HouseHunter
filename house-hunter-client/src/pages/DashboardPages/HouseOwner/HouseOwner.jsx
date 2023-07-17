import DashboardContainer from "../../../components/Container/DashboardContainer";

const HouseOwner = () => {
    return (
		<div className='bg-secondary-color h-screen overscroll-y-auto'>
			<DashboardContainer>
				<div>
					<h4 className='text-[22px] font-semibold text-center'>
						All Home
					</h4>
				</div>

				<div>
					<div className='overflow-x-auto'>
						<table className='table'>
							{/* head */}
							<thead>
								<tr>
									<th>Image</th>
									<th>Name</th>
									<th>Address</th>
									<th>Room Info</th>
									<th>Available Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									{/* img  */}
									<td>
										<div className='flex items-center space-x-3'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12 h-12'>
													<img
														src='/tailwind-css-component-profile-2@56w.png'
														alt='Avatar Tailwind CSS Component'
													/>
												</div>
											</div>
										</div>
									</td>
									{/* name  */}
									<td>
										<div>
											<div className='font-bold'>
												Hart Hagerty
											</div>
										</div>
									</td>
									{/* address  */}
									<td>Zemlak, Daniel and Leannon</td>

									{/* room info  */}
									<td>
										Bedrooms 2
										<br />
										Bathrooms 2
									</td>

									{/* delete  */}
                                    <td>
                                        2023-07-23 <br />
                                        2023-07-25</td>

									{/* edit  */}
									<td className="flex items-center gap-2">
										<button className='bg-red-500 py-1 px-2 rounded-md text-white relative top-1 hover:top-0 duration-300'>
											Delete
										</button>
										<button className='bg-brand-color py-1 px-4 rounded-md text-white relative top-1 hover:top-0 duration-300'>
											Edit
										</button>
										<button className='bg-brand-color py-1 px-4 rounded-md text-white relative top-1 hover:top-0 duration-300'>
											View
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</DashboardContainer>
		</div>
	);
};

export default HouseOwner;