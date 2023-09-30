// import awsLogo from '../assets/awsLogo.svg'
// import gcpLogo from '../assets/gcpLogo.svg'

const handleStep = ()=>{
	console.log("hie");
}

function Card(props) {
	const cardData = props.cardData;
	console.log(cardData.logo);
	const src = cardData.logo;
	return (
		<div
			className='shadow-lg px-3 py-2 flex rounded-2xl mr-3'
			onClick={handleStep}>
			<h1>{props.cardData.title}</h1>
			{/* {console.log(props.cardData.title)} */}
			<div className='bg-[#E0ECFF] rounded-2xl border border-[#4192FF] p-1 m-1'>
				<img
					className='p-3 '
					src={src}
					alt='Logo'
					height={60}
					width={60}
				/>
			</div>
		</div>
	);
}
export default Card;
