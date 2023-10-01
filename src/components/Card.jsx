/* eslint-disable react/prop-types */
// import awsLogo from '../assets/awsLogo.svg'
// import gcpLogo from '../assets/gcpLogo.svg'

function Card(props) {
	const cardData = props.cardData;
	// console.log(props);
	const src = cardData.logo;
	console.log(props.onclick.setActiveTab);
	// onClick={props.onclick}
	// const handleActiveTab =()=>{
	// 	props.onclick(setActiveTab=()=>(prevArray)=>{
	// 		[...prevArray, props.cardData]
	// 	})
	// }
	
	return (
		<div
			className='shadow-lg px-3 py-2 flex rounded-2xl mr-3 justify-between h-42 w-48'
			>
			<h1 className='font-semibold'>{props.cardData.title}</h1>
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
