import Card from "../../atoms/Card";

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
	return (
		<Card className="border border-reliableBlack310">
			{/* Tag */}
			<div className={`${!tag && "pb-8"}`}>{tag}</div>

			<div className="p-2">
				<img
					className="w-full object-cover mb-[10px]"
					src={coverImg}
					alt="Auto2000 promo image"
				/>
				<p className="text-xs font-medium text-reliableBlack mb-6">
					{title}
				</p>
				<p className="text-xs text-reliableBlack70">
					<span>{startDate}</span>
					<span> - </span>
					<span>{endDate}</span>
				</p>
			</div>
		</Card>
	);
};

CardPromo.defaultProps = {
	title: "",
	coverImg: "",
	startDate: "",
	endDate: "",
	tag: null,
};

export default CardPromo;
