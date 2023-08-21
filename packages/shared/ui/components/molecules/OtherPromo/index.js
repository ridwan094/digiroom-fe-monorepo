import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { CardPromo } from 'ui/components/molecules';

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
          perPage: 2,
          gap: '8px',
          ...props,
        }}
      >
        <div className="justify-center items-center">
          <SplideTrack>
            {items.map((item, idx) => (
              <SplideSlide key={idx}>
                <CardPromo
                  classNames="border-t-0 border-l-0 border-r-0"
                  title={item.title}
                  slug={item.slug}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  coverImg={item.coverImg}
                  tag={item.tag}
                />
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
