import DashboardContainer from "../Container/DashboardContainer";

const SidBar = () => {
	const dashboardItem = (
		<>
			<li className='text-[14px] text-white bg-gray-color py-2 rounded  cursor-pointer px-2'>
				All Houses
			</li>
			
		</>
	);
    return (
		<div className='h-screen bg-black-color'>
			<DashboardContainer>
				<div>
					<div className=' cursor-pointer text-center '>
						<h1 className='uppercase text-3xl font-bold text-primary-color'>
							The ToLet
						</h1>
						<p className='leading-4 tracking-[1.5px] text-gray-color'>
							House Rent Solution
						</p>
					</div>
				</div>

				<div className="mt-5">
					<ul>{dashboardItem}</ul>
				</div>
			</DashboardContainer>
		</div>
	);
};

export default SidBar;