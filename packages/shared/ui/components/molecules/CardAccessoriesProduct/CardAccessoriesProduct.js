import Card from "../../atoms/Card";

const CardAccessoriesProduct = ({
	title,
	coverImg,
	price,
	carTypes,
	discountPercentage,
}) => {
	return (
		<Card className="p-4 border border-[#D9D9D9] rounded">
			<img
				className="w-full mb-4 object-cover"
				src={coverImg}
				alt="Car accessories product image auto2000"
			/>
			<p className="text-base font-semibold text-reliableblack mb-1">
				{title}
			</p>
			<p className="text-sm font-regular">
				{carTypes.length &&
					carTypes.map((car, index) => (
						<span key={index}>
							<span>{car}</span>
							{index + 1 !== carTypes.length && (
								<span className="inline-block mx-1">|</span>
							)}
						</span>
					))}
			</p>

			{/* Card footer */}
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<p className="text-lg font-semibold text-supportiveRed">
						{price}
					</p>
					{discountPercentage && (
						<p className="text-sm">{discountPercentage}</p>
					)}
				</div>
				<p>button add</p>
			</div>
		</Card>
	);
};

CardAccessoriesProduct.defaultProps = {
	title: "",
	coverImg: "",
	price: "",
	carTypes: [],
	discountPercentage: null,
};

export default CardAccessoriesProduct;
