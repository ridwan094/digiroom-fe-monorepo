import { Tag } from 'ui/components/atoms';

const PromoBannerSection = () => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
          Promo Toyota Terbaru 2023
        </h2>
        <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
          Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
        </p>
      </div>

      <div className="lg:container">
        <div className="relative ">
          <div className="absolute top-0 right-0">
            <Tag className="rounded-bl lg:rounded-br py-[4px] px-[10px] lg:py-[10px] lg:px-[12px]">
              <span className="text-xs font-bold text-reliableBlack90 lg:text-2xl">Hot Deal</span>
            </Tag>
          </div>

          <img
            className="w-full object-cover"
            src="http://localhost:3002/images/banner-image.webp"
            alt="Promo banner image auto2000"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoBannerSection;
