import { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import Text from "../../atoms/Text";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./carousel.css";

const OtherPromo = ({
  data,
  type,
  arrows,
  pagination,
  perPage,
  items,
  title,
  classNameContainerOtherPromo = "",
}) => {
  // If response using html string
  // const [article, setArticle] = useState({ __html: "" });

  // useEffect(() => {
  //   async function createMarkUp() {
  //     return await { __html: data };
  //   }

  //   createMarkUp().then((result) => setArticle(result));
  // }, []);

  // return <div dangerouslySetInnerHTML={article} />;
  return (
    <div className={classNameContainerOtherPromo}>
      <Text.Head3 className="text-black">{title}</Text.Head3>
      <Splide
        aria-label="Carousel"
        hasTrack={false}
        options={{
          gap: "2rem",
          type,
          arrows,
          pagination,
          perPage,
        }}
      >
        <div className="relative justify-center items-center">
          <SplideTrack>
            {items.map((item) => (
              <SplideSlide key={item.src}>
                <div className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b-4 border-black">
                  <img src={item.src} className="w-full" />
                  <div className="px-4 flex flex-col justify-center gap-2 mb-4">
                    <Text.BodySmall className="text-black">
                      {item.date ? item.date : "-"}
                    </Text.BodySmall>
                    <Text.Headline5 className="text-black">
                      {item.headline ? item.headline : "-"}
                    </Text.Headline5>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

OtherPromo.defaultProps = {
  data: "",
  classNameContainerOtherPromo: "",
  title: "",
  type: "loop",
  arrows: true,
  pagination: true,
  perPage: 1,
  items: [],
};

export default OtherPromo;
