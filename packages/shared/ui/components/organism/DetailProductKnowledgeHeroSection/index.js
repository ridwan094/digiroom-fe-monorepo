import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowBack } from 'react-icons/md';

const DetailProductKnowledgeHeroSection = ({ image }) => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="mb-2 lg:hidden">
        <Link href="/">
          <MdOutlineArrowBack size={24} color="#3D4043" />
        </Link>
      </div>

      <div>
        <Image
          src="/images/avanza-matic.webp"
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

export default DetailProductKnowledgeHeroSection;
