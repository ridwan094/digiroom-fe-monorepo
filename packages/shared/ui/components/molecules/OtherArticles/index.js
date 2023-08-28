import Link from 'next/link';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card, Tag } from 'ui/components/atoms';
import { useEffect, useState } from 'react';

const OtherArticles = ({ items, classNameContainer, ...props }) => {
  const [ismobile, setIsmobile] = useState(false);
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
          perPage: ismobile ? 2 : 4,
          gap: '8px',
          ...props,
        }}
      >
        <div className="justify-center items-center">
          <SplideTrack>
            {items.map((item, idx) => (
              <SplideSlide key={idx}>
                <Card className="border-b border-reliableBlack10 lg:border-transparent">
                  {item.tag && (
                    <Tag className="rounded-br lg:hidden" severity="warn">
                      {item.tag}
                    </Tag>
                  )}
                  <div className="flex flex-col items-center gap-4 pb-4 lg:flex-col lg:pt-0 lg:px-0 lg:pb-0">
                    <div className="lg:flex-auto lg:flex-auto">
                      <Link href={`/articles/${item.slug}`}>
                        <img
                          className="w-full object-cover"
                          src={item.image}
                          alt="Auto2000 article and news image"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link href={`/articles/${item.slug}`}>
                        <p className="text-sm font-semibold text-reliableBlack mb-2 line-clamp-2 lg:text-xl lg:font-bold">
                          {item.title}
                        </p>
                      </Link>
                      <p className="text-xs font-normal text-reliableBlack70 lg:mb-4 lg:text-sm lg:text-reliableBlack">
                        {item.createdDate}
                      </p>
                    </div>
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

OtherArticles.defaultProps = {
  items: [],
  classNameContainer: '',
};

export default OtherArticles;
