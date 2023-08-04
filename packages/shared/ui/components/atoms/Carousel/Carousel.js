import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./carousel.css";

const Carousel = ({ type, arrows, pagination, perPage, items }) => {
	return (
		<Splide
			aria-label="Carousel"
			hasTrack={false}
			options={{
				type,
				arrows,
				pagination,
				perPage,
			}}
		>
			<div className="relative">
				<SplideTrack>
					{items.map((item) => (
						<SplideSlide key={item.src}>
							<div className="w-full h-full overflow-hidden object-cover rounded-lg">
								<img className="w-full h-full" src={item.src} />
							</div>
						</SplideSlide>
					))}
				</SplideTrack>
			</div>
		</Splide>
	);
};

Carousel.defaultProps = {
	type: "loop",
	arrows: true,
	pagination: true,
	perPage: 1,
	items: [],
};

export default Carousel;
