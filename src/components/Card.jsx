/* eslint-disable react/prop-types */
// import awsLogo from '../assets/awsLogo.svg'
// import gcpLogo from '../assets/gcpLogo.svg'

function Card(props) {
	const cardData = props.cardData;
	// console.log(props);
	const src = cardData.logo;
	// onClick={props.onclick}
	const handleActiveTab = (e) => {
		const currentObj = e.target.dataset;
		// console.log(currentObj);
		props.setActiveTab((prevArray) => {
			const obj = {
				title: currentObj.name,
				logo: currentObj.logo,
				color: currentObj.color,
				stroke: currentObj.strokeColor,
				step: currentObj.stepNum,
			};
			const newArray = [...prevArray, obj];
			return newArray;
		});
		props.handleClick();
	};

	return (
		<div
			className='shadow-lg px-3 py-2 flex rounded-2xl mr-3 justify-between h-42 w-48'
			onClick={handleActiveTab}
			data-step-num={cardData.stepNumber}
			data-name={cardData.title}
			data-logo={cardData.logo}
			data-color={cardData.color}
			data-stroke={cardData.strokeColor}>
			<div className="flex flex-col justify-between">
				<h1 className='font-semibold'>{props.cardData.title}</h1>
				<img
					src='../../public/assets/three-dots.svg'
					alt='dots'
					className='w-8'
				/>
			</div>
			{/* {console.log(props.cardData.title)} */}
			<div
				className={`${cardData.color} rounded-2xl border ${cardData.strokeColor} p-1 m-1 h-16 w-16 flex items-center`}>
				<img
					className='p-3 w-full'
					src={src}
					alt='Logo'
				/>
			</div>
		</div>
	);
}
export default Card;
