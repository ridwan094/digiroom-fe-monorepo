import Card from "../../atoms/Card";

const CardCarProduct = ({ title, coverImg, price }) => {
	return (
		<Card className="p-4 border border-reliableBlack20 rounded">
			<img
				className="w-full mb-4 object-cover"
				src={coverImg}
				alt="Car product image auto2000"
			/>
			<p className="text-xl font-bold text-reliableblack mb-4">{title}</p>
			<p className="text-sm mb-1">Starting With</p>
			<p className="text-lg font-semibold text-supportiveRed">{price}</p>
		</Card>
	);
};

export default CardCarProduct;
