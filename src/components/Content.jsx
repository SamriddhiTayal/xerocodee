import Card from './Card';
// import awsLogo from '../assets/awsLogo.svg';
import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../index.css';
import ToggleButton from './ToggleButton';
const cardData = [
	{
		title: 'AWS',
		logo: '../../public/assets/awsLogo.svg',
		id: '0',
		color: 'bg-[#FFF5E5]',
		strokeColor: 'border-[#FFDFA2]',
	},
	{
		title: 'GCP',
		logo: '../../public/assets/gcpLogo.svg',
		id: '1',
		color: 'bg-[#ECF3FE]',
		strokeColor: 'border-[#4192FF]',
	},
	{
		title: 'Github',
		logo: '../../public/assets/githubLogo.svg',
		id: '2',
		color: 'bg-[#E9E9E9]',
		strokeColor: 'border-[#C0C0C0]',
	},
	{
		title: 'Gitlab',
		logo: '../../public/assets/gitlabLogo.svg',
		id: '3',
		color: 'bg-[#FCECEA]',
		strokeColor: 'border-[#F77556]',
	},
	{
		title: 'Bitbucket',
		logo: '../../public/assets/bitbucketLogo.svg',
		id: '4',
		color: 'bg-[#E0ECFF]',
		strokeColor: 'border-[#4192FF]',
	},
	{
		title: 'MongoDB',
		logo: '../../public/assets/mongodblogo.svg',
		id: '5',
		color: 'bg-[#EDF5ED]',
		strokeColor: 'bg-[#34A853]',
	},
	{
		title: 'RedisDB',
		logo: '../../public/assets/redisLogo.svg',
		id: '6',
		color: 'bg-[#FBEAE9]',
		strokeColor: 'border-[#F77556]',
	},
	{
		title: 'Postgresql',
		logo: '../../public/assets/postgresqlLogo.svg',
		id: '7',
		color: 'bg-[#EBF0F4]',
		strokeColor: 'border-[#64BAFF]',
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

	const [step1, setStep1] = useState(false);
	const [step2, setStep2] = useState(false);
	const [step3, setStep3] = useState(false);
	const [activeTab, setActiveTab] = useState([]);
	const handleClick = () => {
		setProgress((progress) => progress + 100 / 3);
	};

	return (
		<div className='bg-white rounded-3xl p-3 w-full mx-5 mb-5'>
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
									onclick={setActiveTab}
								/>

								<Card
									cardData={cardData[1]}
									onclick={setActiveTab}
								/>
							</div>
						</div>
						<div className='text-base '>
							<h1 className='font-bold'>Step 2</h1>
							<p className='text-xs text-gray-700'>Connect to Source Code</p>
							<div className='flex'>
								<Card
									cardData={cardData[2]}
									onclick={setActiveTab}
								/>

								<Card
									cardData={cardData[3]}
									onclick={setActiveTab}
								/>

								<Card
									cardData={cardData[4]}
									onclick={setActiveTab}
								/>
							</div>
						</div>
						<div className='text-base '>
							<h1 className='font-bold'>Step 3</h1>
							<p className='text-xs text-gray-700'>Connect to DataSource</p>
							<div className='flex'>
								<Card
									cardData={cardData[5]}
									onclick={setActiveTab}
								/>

								<Card
									cardData={cardData[6]}
									onclick={setActiveTab}
								/>

								<Card
									cardData={cardData[7]}
									onclick={setActiveTab}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='shadow-lg rounded-lg m-4 p-2 flex flex-col items-center '>
					<div className='progress-bar-heading flex flex-col items-center py-3'>
						<p className='font-bold '>Your Progress</p>
						<p className='text-[#818181]'>towards xerocodee</p>
					</div>
					<CircularProgressbar
						className='w-32'
						value={Math.ceil(progress)}
						text={`${Math.ceil(progress)}%`}
					/>
					{step1 ? <div>Step 1 complete</div> : null}
					{console.log(activeTab)}
					{step2 ? <div>Step 2 complete</div> : null}
					{step3 ? <div>Step 3 complete</div> : null}
				</div>
			</div>
		</div>
	);
}
export default Content;
