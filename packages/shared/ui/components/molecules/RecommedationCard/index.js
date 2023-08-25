import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { Card, Button, Text } from '../../atoms';
import '@splidejs/react-splide/css';

const RecommedationCard = ({ items, classNameContainer, ...props }) => {
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
                <Card className="border-b border-reliableBlack310 bg-reliableBlack3 lg:border-transparent">
                  <div className="pb-4">
                    <img
                      className="w-full object-cover mb-4"
                      src="http://localhost:3002/images/promo-car-example.webp"
                      alt="Auto2000 promo image"
                    />
                    <div className="px-4">
                      <p className="text-sm font-semibold text-reliableBlack mb-2 lg:text-lg">
                        Toyota All New Avanza Tipe 1.5 G CVT
                      </p>
                      <p className="text-sm text-reliableBlack70 lg:text-sm">Harga Mulai</p>
                      <p className="text-sm font-semibold text-supportiveRed mb-2 lg:text-sm">
                        RP. 269.800.000
                      </p>
                      <Text.BodyMedium
                        className="text-sm text-reliableBlack mb-2 lg:text-sm"
                        isClamp
                        maxLines={3}
                      >
                        Pilihan pertama ada toyota all new avanza 1.5 G CVT mobil ini di bekali
                        mesin berkapasitas 1500 cc. dan bertenaga Pilihan pertama ada toyota all new
                        avanza 1.5 G CVT mobil ini di bekali mesin berkapasitas 1500 cc. dan
                        bertenaga
                      </Text.BodyMedium>
                      <Button block onClick={() => {}} variant="bg-reliableBlack">
                        <Text.BodyMedium className="text-white">MINTA PENAWARAN</Text.BodyMedium>
                      </Button>
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

RecommedationCard.defaultProps = {
  items: [],
  classNameContainer: '',
};

export default RecommedationCard;
