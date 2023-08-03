import Link from "next/link";

const CardPromo = ({ title, coverImg, startDate, endDate }) => {
	return (
		<Link href="/">
			<div className="w-[228px] h-[150px] overflow-hidden object-cover mb-4">
				<img
					className="w-full h-full"
					src={coverImg}
					alt="Auto2000 promo image"
				/>
			</div>
			<p className="text-xs text-reliableBlack50 mb-1">
				<span>{startDate}</span>
				<span> - </span>
				<span>{endDate}</span>
			</p>
			<p className="text-sm font-semibold text-reliableBlack">{title}</p>
		</Link>
	);
};

export default CardPromo;
