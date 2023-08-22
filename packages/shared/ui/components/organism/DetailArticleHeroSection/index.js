import Link from 'next/link';
import { MdOutlineArrowBack } from 'react-icons/md';
import { ProductPanel } from 'ui/components/atoms';

const DetailArticleHeroSection = ({ image }) => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container mb-2 lg:hidden">
        <Link href="/articles">
          <MdOutlineArrowBack size={24} color="#3D4043" />
        </Link>
      </div>

      <div className="lg:container">
        <ProductPanel
          className="px-0"
          src={image}
          alt="Auto2000 article detail page"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default DetailArticleHeroSection;
