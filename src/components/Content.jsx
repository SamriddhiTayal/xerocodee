import Card from './Card';
// import awsLogo from '../assets/awsLogo.svg';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../index.css';
const cardData = [
	{ title: 'AWS', logo: '../../public/assets/awsLogo.svg', id: '0' },
	{ title: 'GCP', logo: '../../public/assets/gcpLogo.svg', id: '1' },
	{ title: 'Github', logo: '../../public/assets/githubLogo.svg', id: '2' },
	{ title: 'Gitlab', logo: '../../public/assets/gitlabLogo.svg', id: '3' },
	{
		title: 'Bitbucket',
		logo: '../../public/assets/bitbucketLogo.svg',
		id: '4',
	},
	{ title: 'MongoDB', logo: '../../public/assets/mongodblogo.svg', id: '5' },
	{ title: 'RedisDB', logo: '../../public/assets/redisLogo.svg', id: '6' },
	{
		title: 'Postgresql',
		logo: '../../public/assets/postgresqlLogo.svg',
		id: '7',
	},
];

function Content() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (progress > 100) {
				setProgress(0);
			}
		});
	}, [progress]);
	return (
		<div className='flex bg-white rounded-3xl p-3'>
			<div>
				<div className='text-base '>
					<h1 className='font-bold'>Step 1</h1>
					<p className='text-xs text-gray-700'>Connect to cloud</p>
					<div className='flex'>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[0]} />
						</button>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[1]} />
						</button>
					</div>
				</div>
				<div className='text-base '>
					<h1 className='font-bold'>Step 2</h1>
					<p className='text-xs text-gray-700'>Connect to Source Code</p>
					<div className='flex'>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[2]} />
						</button>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[3]} />
						</button>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[4]} />
						</button>
					</div>
				</div>
				<div className='text-base '>
					<h1 className='font-bold'>Step 3</h1>
					<p className='text-xs text-gray-700'>Connect to DataSource</p>
					<div className='flex'>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[5]} />
						</button>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[6]} />
						</button>
						<button
							onClick={() => setProgress(progress + 100 / 3)}>
							<Card cardData={cardData[7]} />
						</button>
					</div>
				</div>
			</div>
			<div>
				Progress Bar: {Math.ceil(progress)}
				<CircularProgressbar
					value={Math.ceil(progress)}
					text={`${Math.ceil(progress)}%`}
				/>
			</div>
		</div>
	);
}
export default Content;
