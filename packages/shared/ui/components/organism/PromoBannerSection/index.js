import { Tag } from 'ui/components/atoms';

const PromoBannerSection = () => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
          Promo Toyota Terbaru 2023
        </h2>
        <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base lg:font-normal">
          Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
        </p>
      </div>

      <div className="lg:container">
        <img
          className="w-full object-cover"
          src="http://localhost:3002/images/banner-image.webp"
          alt="Promo banner image auto2000"
        />
      </div>
    </section>
  );
};

export default PromoBannerSection;
