import Card from './Card';
// import awsLogo from '../assets/awsLogo.svg';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../index.css';
 
import ToggleButton from './ToggleButton';
import ActiveCard from './ActiveCard';
const cardData = [
	{
		title: 'AWS',
		logo: '../../public/assets/awsLogo.svg',
		id: '0',
		color: 'bg-[#FFF5E5]',
		strokeColor: 'border-[#FFDFA2]',
		stepNumber: '1',
	},
	{
		title: 'GCP',
		logo: '../../public/assets/gcpLogo.svg',
		id: '1',
		color: 'bg-[#ECF3FE]',
		strokeColor: 'border-[#4192FF]',
		stepNumber: '1',
	},
	{
		title: 'Github',
		logo: '../../public/assets/githubLogo.svg',
		id: '2',
		color: 'bg-[#E9E9E9]',
		strokeColor: 'border-[#C0C0C0]',
		stepNumber: '2',
	},
	{
		title: 'Gitlab',
		logo: '../../public/assets/gitlabLogo.svg',
		id: '3',
		color: 'bg-[#FCECEA]',
		strokeColor: 'border-[#F77556]',
		stepNumber: '2',
	},
	{
		title: 'Bitbucket',
		logo: '../../public/assets/bitbucketLogo.svg',
		id: '4',
		color: 'bg-[#E0ECFF]',
		strokeColor: 'border-[#4192FF]',
		stepNumber: '2',
	},
	{
		title: 'MongoDB',
		logo: '../../public/assets/mongodblogo.svg',
		id: '5',
		color: 'bg-[#EDF5ED]',
		strokeColor: 'bg-[#34A853]',
		stepNumber: '3',
	},
	{
		title: 'RedisDB',
		logo: '../../public/assets/redisLogo.svg',
		id: '6',
		color: 'bg-[#FBEAE9]',
		strokeColor: 'border-[#F77556]',
		stepNumber: '3',
	},
	{
		title: 'Postgresql',
		logo: '../../public/assets/postgresqlLogo.svg',
		id: '7',
		color: 'bg-[#EBF0F4]',
		strokeColor: 'border-[#64BAFF]',
		stepNumber: '3',
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

	const [activeTab, setActiveTab] = useState([]);
	const handleClick = () => {
		setProgress((progress) => progress + 100 / 3);
	};

	return (
		<div className='bg-white rounded-3xl p-3 flex-1 mx-5 mb-5'>
			<div className='flex justify-between shadow-lg m-4 p-2 rounded-2xl bg-gradient-to-t from-[#F6FAFF]'>
				<div className='welcome-message'>
					<h1 className='text-5xl p-3'>Hii Arya!!</h1>
					<p className='text-lg p-3'>Welcome to Xerocodee ecosystem 😎</p>
				</div>
				<div className='flex space-x-1'>
					<p>Test Mode </p>
					<ToggleButton />
					<p>Production Mode</p>
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='flex'>
					<img
						width={45}
						src='../../public/assets/steps.svg'
						alt='steps image'
					/>
					<div className='steps-container flex-col space-y-4 pl-5'>
						<div className='text-base '>
							<h1 className='font-bold'>Step 1</h1>
							<p className='text-xs text-gray-700'>Connect to cloud</p>
							<div className='flex'>
								<Card
									cardData={cardData[0]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>

								<Card
									cardData={cardData[1]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>
							</div>
						</div>
						<div className='text-base '>
							<h1 className='font-bold'>Step 2</h1>
							<p className='text-xs text-gray-700'>Connect to Source Code</p>
							<div className='flex'>
								<Card
									cardData={cardData[2]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>

								<Card
									cardData={cardData[3]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>

								<Card
									cardData={cardData[4]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>
							</div>
						</div>
						<div className='text-base '>
							<h1 className='font-bold'>Step 3</h1>
							<p className='text-xs text-gray-700'>Connect to DataSource</p>
							<div className='flex'>
								<Card
									cardData={cardData[5]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>

								<Card
									cardData={cardData[6]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>

								<Card
									cardData={cardData[7]}
									setActiveTab={setActiveTab}
									handleClick={handleClick}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='shadow-lg rounded-lg my-2 mx-4 p-2 flex flex-col items-center w-60'>
					<div className='progress-bar-heading flex flex-col items-center py-3'>
						<p className='font-bold '>Your Progress</p>
						<p className='text-[#818181]'>towards xerocodee</p>
					</div>
					<CircularProgressbar
						className='w-20 '
						value={Math.ceil(progress)}
						text={`${Math.ceil(progress)}%`}
					/>
					{activeTab.map((tab, index) => {
						return (
							<div key={index}>
								<ActiveCard tab={tab}/>
							</div>
						);
					})}
					{console.log(activeTab)}
				</div>
			</div>
		</div>
	);
}
export default Content;
