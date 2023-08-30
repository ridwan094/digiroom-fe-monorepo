import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowBack } from 'react-icons/md';

const DetailPromoHeroSection = ({ image }) => {
  return (
    <section className="my-4 lg:mb-8">
      <div className="container mb-2 lg:hidden">
        <Link href="/promo">
          <MdOutlineArrowBack size={24} color="#3D4043" />
        </Link>
      </div>

      <Image
        src={`/images/${image}`}
        alt="Auto2000 detail promo page"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </section>
  );
};

export default DetailPromoHeroSection;
