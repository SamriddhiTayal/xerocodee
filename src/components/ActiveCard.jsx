/* eslint-disable react/prop-types */
function ActiveCard(props){
  const tab = props.tab;
  console.log(tab);
  return (
		<div className='m-1 '>
			<p className='text-[#797979] text-xs font-semibold m-1'>Step {tab.step}</p>
			<div
				className={`${tab.color} rounded-xl border ${tab.strokeColor} px-3 flex items-center`}>
				<div className='flex flex-col px-3'>
					<p className='font-semibold '>{tab.title}</p>
					<p className='text-[#797979] text-xs font-semibold'>
						Status: Complete
					</p>
				</div>
				<div className='bg-white rounded-xl border ${tab.strokeColor} m-1'>
					<img
						className='p-3'
						src={tab.logo}
						alt='Logo'
						height={50}
						width={50}
					/>
				</div>
				<img
					src='../../public/assets/grey-dots.svg'
					alt='dots'
					className='h-6'
				/>
			</div>
		</div>
	);
}
export default ActiveCard;