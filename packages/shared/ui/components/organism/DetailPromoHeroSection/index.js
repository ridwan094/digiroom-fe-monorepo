import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowBack } from 'react-icons/md';

const DetailPromoHeroSection = ({ image }) => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container mb-2 lg:hidden">
        <Link href="/promo">
          <MdOutlineArrowBack size={24} color="#3D4043" />
        </Link>
      </div>

      <div className="lg:container">
        <Image
          src="/images/detailPromoImage2.webp"
          alt="detailPromoImage"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default DetailPromoHeroSection;
