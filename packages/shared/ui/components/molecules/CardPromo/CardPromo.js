import Card from "../../atoms/Card";

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
	return (
		<Card className="border border-reliableBlack-700 mb-4 transition-all ease-in-out duration-300 hover:scale-105">
			{/* Tag */}
			<div className={`${!tag && "pb-8"}`}>{tag}</div>

			<div className="p-2 lg:px-[10px] lg:pb-[10px]">
				<img
					className="w-full object-cover mb-[10px] overflow rounded-t-md"
					src={coverImg}
					alt="Auto2000 promo image"
				/>
				<p className="text-xs font-medium text-reliableBlack mb-6 lg:text-base">
					{title}
				</p>
				<p className="text-xs text-reliableBlack70 lg:text-base">
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
