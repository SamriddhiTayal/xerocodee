function Header() {
	return (
		<div
			className='inline-flex 
'>
			<img
				className='mt-4 ml-6'
				src='../../public/assets/logo4.png'
				alt='company logo'
				height={52}
				width={180}
			/>
			<div className='flex justify-between'>
				<div>
					<form>
						<div className='flex space-y-3'>
							<input
								className='bg-white rounded-3xl px-3 h-10 m-2'
								type='text'
								placeholder='Search'
							/>
							<button className='flex bg-blue-500 rounded-3xl p-1 ml-0 h-10'>
								<img
									src='../../public/assets/searchLogo.svg'
									alt=''
								/>
							</button>
						</div>
					</form>
				</div>

				<div className='inline-flex'>
					<button className='flex bg-yellow-300 rounded-3xl p-1 m-2 h-10'>
						<img
							className='bg-white rounded-3xl'
							src='../../public/assets/upgradeLogo.svg'
							alt=''
						/>
						<p>Upgrade Plan</p>
					</button>
					<button className='bg-white rounded-xl h-10 w-10 p-1 m-2'>
						<img
							src='../../public/assets/notifications.svg'
							alt=''
							height={30}
							width={30}
						/>
					</button>
					<button className='bg-white rounded-xl h-10 w-10 p-1 m-2'>
						<img
							src='../../public/assets/mailLogo.svg'
							alt=''
							height={30}
							width={30}
						/>
					</button>
					<button className='bg-white rounded-xl h-10 w-10 p-1 m-2'>
						<img
							src='../../public/assets/settings.svg'
							alt=''
							height={30}
							width={30}
						/>
					</button>
					<form>
						<select
							className='h-10 p-1 m-2 bg-blue-200'
							name='xerocodee'>
							<option value=''>XeroCodee</option>
						</select>
					</form>
					<button className='bg-white rounded-xl h-10 w-10 p-1 m-2'>
						<img
							src='../../public/assets/profileLogo.svg'
							alt=''
							height={30}
							width={30}
						/>
					</button>
				</div>
			</div>
		</div>	
	);
}
export default Header;
