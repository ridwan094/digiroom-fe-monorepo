import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card, Tag } from 'ui/components/atoms';

const OtherPromo = ({ items, classNameContainer, ...props }) => {
  const classNameAssigned = ['relative flex flex-col justify-center gap-4', ...classNameContainer];

  return (
    <div className={classNameAssigned.join(' ')}>
      <Splide
        aria-label="Carousel"
        hasTrack={false}
        options={{
          type: 'slide',
          arrows: false,
          pagination: false,
          perPage: 4,
          gap: '24px',
          breakpoints: {
            1024: {
              perPage: 2,
              gap: '10px',
            },
          },
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
