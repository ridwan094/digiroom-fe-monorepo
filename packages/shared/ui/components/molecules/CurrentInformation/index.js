import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card, Tag } from 'ui/components/atoms';
import { useSelector } from 'react-redux';

const CurrentInformation = ({ items, classNameContainer, ...props }) => {
  const classNameAssigned = ['relative flexz flex-col justify-center gap-8', ...classNameContainer];
  const isMobile = useSelector((state) => state.page.isMobileScreen);

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
                <Card className={`border border-reliableBlack10`}>
                  {/* Tag */}
                  <div className={`${!item.tag && 'pb-8'}`}>
                    {item.tag && (
                      <Tag
                        className="rounded-br"
                        severity={`${item.tag === 'Trending' ? 'info' : 'warn'}`}
                      >
                        {item.tag}
                      </Tag>
                    )}
                  </div>

                  <div className="pt-2 px-3 pb-5">
                    <img
                      className="w-full object-cover mb-4"
                      src={item.image}
                      alt="Auto2000 promo image"
                    />
                    <p className="text-xs font-medium text-reliableBlack mb-6 h-12 line-clamp-3 lg:text-lg lg:font-semibold lg:mb-3 lg:h-fit">
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

CurrentInformation.defaultProps = {
  items: [],
  classNameContainer: '',
};

export default CurrentInformation;
