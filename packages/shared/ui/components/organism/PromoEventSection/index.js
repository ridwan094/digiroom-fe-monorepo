import React from 'react';
import { OtherPromo } from '../../molecules';
import { CardPromo } from '../../molecules';
import { Button } from '../../atoms';
import { FiArrowRight } from 'react-icons/fi';

const EVENT_SECTION = [
  {
    title: 'Cicilan Ringan Toyota Raize',
    slug: 'cicilan-ringan-toyota-raize',
    startDate: '21 Nov 22',
    endDate: '30 Jun 23',
    coverImg: 'http://localhost:3002/images/promo-car-example.webp',
    tag: 'Trending',
  },
  {
    title: 'Cicilan Ringan Toyota Raize',
    slug: 'cicilan-ringan-toyota-raize',
    startDate: '21 Nov 22',
    endDate: '30 Jun 23',
    coverImg: 'http://localhost:3002/images/promo-car-example.webp',
    tag: 'Trending',
  },
  {
    title: 'Cicilan Ringan Toyota Raize',
    slug: 'cicilan-ringan-toyota-raize',
    startDate: '21 Nov 22',
    endDate: '30 Jun 23',
    coverImg: 'http://localhost:3002/images/promo-car-example.webp',
    tag: 'Trending',
  },
  {
    title: 'Cicilan Ringan Toyota Raize',
    slug: 'cicilan-ringan-toyota-raize',
    startDate: '21 Nov 22',
    endDate: '30 Jun 23',
    coverImg: 'http://localhost:3002/images/promo-car-example.webp',
    tag: 'Trending',
  },
];

const PromoEventSection = () => {
  return (
    <section className="my-8">
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
              PROMO AUTO2000 DI JAKARTA
            </h2>
            <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
              Berikut adalah promo Auto2000 yang ada di wilayah DKI Jakarta saat ini
            </p>
          </div>

          <Button color="failure" onClick={() => {}} variant="bg-white">
            <div className="flex items-center justify-between gap-6">
              <span className="text-xs font-medium leading-relaxed text-reliableBlack lg:text-base">
                LIHAT SEMUA
              </span>
              <FiArrowRight size={20} color="#CE181E" />
            </div>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {EVENT_SECTION.map((items, index) => {
            return (
              <CardPromo
                key={index}
                title={items.title}
                slug={items.slug}
                startDate={items.startDate}
                endDate={items.endDate}
                coverImg={items.coverImg}
                tag={items.tag}
              />
            );
          })}
        </div>
      </div>
      <div className="mx-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
              PROMO AUTO2000 DI JAKARTA
            </h2>
            <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
              Berikut adalah promo Auto2000 yang ada di wilayah DKI Jakarta saat ini
            </p>
          </div>

          <Button color="failure" onClick={() => {}} variant="bg-white">
            <div className="flex items-center justify-between gap-6">
              <span className="text-xs font-medium leading-relaxed text-reliableBlack lg:text-base">
                LIHAT SEMUA
              </span>
              <FiArrowRight size={20} color="#CE181E" />
            </div>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {EVENT_SECTION.map((items, index) => {
            return (
              <CardPromo
                key={index}
                title={items.title}
                slug={items.slug}
                startDate={items.startDate}
                endDate={items.endDate}
                coverImg={items.coverImg}
                tag={items.tag}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoEventSection;
