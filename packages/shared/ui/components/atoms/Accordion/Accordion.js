import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const Accordion = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<button
			className={`w-full mb-2 py-4 last:mb-0 border-b border-reliableBlack20 cursor-pointer transition-all duration-300 ${
				isActive && "border-transparent"
			}`}
			onClick={() => {
				toggleActive();
			}}
		>
			<div className="flex justify-between items-center">
				<p className="text-xs text-start font-medium text-reliableBlack lg:text-base">
					{title}
				</p>

				{isActive ? <MdRemove size={24} /> : <MdAdd size={24} />}
			</div>

			<p
				className={`text-start text-xs leading-relaxed h-0 overflow-hidden transition-all duration-300 lg:text-base lg:leading-relaxed ${
					isActive && "h-auto overflow-auto mt-4"
				}`}
			>
				{children}
			</p>
		</button>
	);
};

Accordion.defaultProps = {};

export default Accordion;
