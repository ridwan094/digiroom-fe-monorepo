import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ProductKnowledgeBannerSection = () => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container">
        <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
          Ulasan Product
        </h2>
        <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
          Dapatkan ulasan terkini mengenai mobil, fitur, dan produk terbaru dari toyota
        </p>
      </div>

      <div className="lg:container">
        <Link href="#">
          <img
            className="w-full h-full object-cover"
            src="http://localhost:3002/images/banner-image.webp"
            alt="Auto2000 article and news image"
          />
        </Link>

        <div className="flex items-center bg-reliableBlack3 px-4 py-6 justify-between lg:px-4 lg:px-4">
          <div>
            <Link href="#">
              <h3 className="text-xl font-semibold text-reliableBlack mb-1 line-clamp-2 lg:text-2xl lg:font-bold">
                Perkembangan Terbaru Interior Agya GR Sport 2023
              </h3>
            </Link>
            <p className="text-xs font-normal text-reliableBlack50 lg:text-sm lg:text-reliableBlack50">
              01 Feb 2023
            </p>
          </div>

          <FiArrowRight size={34} color="#CE181E" />
        </div>
      </div>
    </section>
  );
};

export default ProductKnowledgeBannerSection;
