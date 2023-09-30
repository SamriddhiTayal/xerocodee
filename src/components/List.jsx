

function List() {
	const services = [
		{ title: 'XeroCodee', id: '0' },
		{ title: 'Builder Center', id: '1' },
		{ title: 'Servive Board', id: '2' },
		{ title: 'Clusters', id: '3' },
		{ title: 'Databases', id: '4' },
		{ title: 'Environment', id: '5' },
		{ title: 'Workflow', id: '6' },
		{ title: 'Monitoring', id: '7' },
		{ title: 'Security', id: '8' },
		{ title: 'Web Hooks', id: '9' },
		{ title: 'Log Error', id: '10' },
	];
	// const listItem = services.map(service=>{

	return (
		<>
			<div>
				<ul>
					{services.map((service) => (
						<li
							key={service.id}
							className='hover:bg-white rounded-3xl px-5 py-2 mx-8' >
							<a href={service.id}>{service.title}</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
export default List;
