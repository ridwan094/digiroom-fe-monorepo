import { useRef } from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);
	const accordionContent = useRef(null);

	const toggleIndex = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null);
			return;
		}

		const height = accordionContent.current.scrollHeight;

		console.log(height);

		setActiveIndex(index);
	};

	return data.map((item, index) => (
		<button
			key={index}
			className={`w-full mb-2 py-4 last:mb-0 border-b border-reliableBlack20 cursor-pointer transition-all duration-300 ${
				activeIndex === index && "border-transparent"
			}`}
			onClick={() => {
				toggleIndex(index);
			}}
		>
			<div className="flex justify-between items-center">
				<p className="text-xl font-medium text-reliableBlack">
					{item.title}
				</p>

				{activeIndex === index ? <FaMinus /> : <FaPlus />}
			</div>

			<p
				className={`text-start h-0 overflow-hidden transition-all duration-300 ${
					activeIndex === index && "h-auto overflow-auto mt-4"
				}`}
				ref={accordionContent}
			>
				{item.content}
			</p>
		</button>
	));
};

export default Accordion;
