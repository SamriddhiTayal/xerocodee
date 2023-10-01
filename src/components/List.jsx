function List() {
	const services = [
		{
			title: 'XeroCodee',
			id: '0',
			logo: '../../public/assets/xerocode-logo.svg',
		},
		{
			title: 'Builder Center',
			id: '1',
			logo: '../../public/assets/builder-center-logo.svg',
		},
		{
			title: 'Servive Board',
			id: '2',
			logo: '../../public/assets/service-board-logo.svg',
		},
		{
			title: 'Clusters',
			id: '3',
			logo: '../../public/assets/clusters-logo.svg',
		},
		{
			title: 'Databases',
			id: '4',
			logo: '../../public/assets/database-logo.svg',
		},
		{
			title: 'Environment',
			id: '5',
			logo: '../../public/assets/environment-logo.svg',
		},
		{
			title: 'Workflow',
			id: '6',
			logo: '../../public/assets/workflow-logo.svg',
		},
		{
			title: 'Monitoring',
			id: '7',
			logo: '../../public/assets/monitoring-logo.svg',
		},
		{
			title: 'Security',
			id: '8',
			logo: '../../public/assets/security-logo.svg',
		},
		{
			title: 'Web Hooks',
			id: '9',
			logo: '../../public/assets/web-hooks-logo.svg',
		},
		{
			title: 'Log Error',
			id: '10',
			logo: '../../public/assets/log-error-logo.svg',
		},
	];

	return (
		<>
			<div className='pt-3'>
				<ul>
					{services.map((service) => (
						<li
							key={service.id}
							className='hover:bg-white rounded-3xl px-3 py-2 mx-8 flex whitespace-nowrap space-x-4'>
							<img
								src={service.logo}
								alt='logo'
								height={20}
								width={20}
								className='pr-1'
							/>
							<a href={service.id}>{service.title}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
export default List;
