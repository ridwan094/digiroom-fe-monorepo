import { useEffect, useState } from "react";

const Tag = ({ children, severity, className }) => {
	const [bgColor, setBgColor] = useState(null);

	useEffect(() => {
		switch (severity) {
			case "info":
				setBgColor("bg-[#F6E195]");
				break;
			case "primary":
				setBgColor("bg-supportiveRed");
				break;
		}
	}, []);

	return (
		<span className={`inline-block py-1 px-[10px] ${bgColor} ${className}`}>
			<span className="text-xs font-regular text-reliableBlack90">
				{children}
			</span>
		</span>
	);
};

Tag.defaultProps = {
	severity: "info",
};

export default Tag;
