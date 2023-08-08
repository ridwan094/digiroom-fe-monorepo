import { useState, useEffect } from 'react';
import Text from '../../atoms/Text';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './carousel.css';

const OtherPromo = ({
  data,
  type,
  arrows,
  pagination,
  perPage,
  items,
  title,
  classNameContainer,
  block,
  ...props
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
  const classNameAssigned = [
    'relative flex flex-col justify-center gap-4 mb-20',
    block ? 'w-full' : '',
    classNameContainer,
  ];

  return (
    <div className={classNameAssigned.join(' ')}>
      <Text.Head3 className="text-base font-semibold text-reliableBlack md:text-2xl">
        {title}
      </Text.Head3>
      <Splide
        aria-label="Carousel"
        hasTrack={false}
        options={{
          type,
          arrows,
          pagination,
          perPage,
          ...props,
        }}
      >
        <div className="justify-center items-center">
          <SplideTrack>
            {items.map((item) => (
              <SplideSlide
                key={item.src}
                className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b-4 border-black"
              >
                <img src={item.src} className="w-full" alt="Auto2000 other promotions" />
                <div className="flex flex-col justify-center gap-2 mb-5">
                  <Text.BodySmall className="text-[10px] text-black md:text-[12px]">
                    {item.date ? item.date : '-'}
                  </Text.BodySmall>
                  <Text.Headline5 className="text-base font-semibold text-black md:">
                    {item.headline ? item.headline : '-'}
                  </Text.Headline5>
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
  data: '',
  title: '',
  type: 'loop',
  arrows: true,
  pagination: true,
  perPage: 1,
  items: [],
  block: true,
  classNameContainer: '',
};

export default OtherPromo;
