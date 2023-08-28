import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import { Card, Tag } from 'ui/components/atoms';

const OtherPromo = ({ items, classNameContainer, ...props }) => {
  const [isMobile, setIsmobile] = useState(false);
  const classNameAssigned = ['relative flex flex-col justify-center gap-4', ...classNameContainer];

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={classNameAssigned.join(' ')}>
      <Splide
        aria-label="Carousel"
        hasTrack={false}
        options={{
          type: 'slide',
          arrows: false,
          pagination: false,
          perPage: isMobile ? 2 : 4,
          gap: '8px',
          ...props,
        }}
      >
        <div className="justify-center items-center">
          <SplideTrack>
            {items.map((item, idx) => (
              <SplideSlide key={idx}>
                <Card className="border-b border-[#656263]">
                  <div className="pb-5">
                    <img
                      className="w-full object-cover mb-4"
                      src={item.coverImg}
                      alt="Auto2000 promo image"
                    />
                    <p className="text-sm font-semibold text-reliableBlack mb-2 lg:text-lg lg:mb-5">
                      {item.title}
                    </p>
                    <p className="text-xs font-normal text-reliableBlack70 lg:text-sm">
                      <span>{item.startDate}</span>
                      <span> - </span>
                      <span>{item.endDate}</span>
                    </p>
                  </div>
                </Card>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

OtherPromo.defaultProps = {
  items: [],
  classNameContainer: '',
};

export default OtherPromo;
