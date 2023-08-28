import { Layout } from 'ui/components/templates';
import {
  BreadCrumbs,
  ProductKnowledgeFeatureCard,
  ProductKnowledgeSpecCard,
} from 'ui/components/molecules';
import {
  DetailArticleAnotherPromoSection,
  DetailProductKnowledgeBodySection,
  DetailProductKnowledgeHeroSection,
} from 'ui/components/organism';

const ProductKnowledgeDetailPage = ({ slug, product }) => {
  return (
    <Layout>
      <BreadCrumbs
        isMobileScreen={false}
        items={[
          { name: 'Home', path: '/' },
          { name: 'Product knowledge', path: '/product-knowledge' },
          { name: product.title },
        ]}
      />

      <div className="grid grid-cols-1 container gap-6 lg:grid-cols-[2fr_1fr]">
        <div>
          <DetailProductKnowledgeHeroSection />

          <DetailProductKnowledgeBodySection product={product} />

          <ProductKnowledgeFeatureCard
            title={product.feature.title}
            itemList={product.feature.itemList}
          />
        </div>

        <div className="my-4 md:mt-8">
          <ProductKnowledgeSpecCard
            title={product.spec.title}
            caption={product.spec.caption}
            specList={product.spec.specList}
          />
        </div>
      </div>

      <DetailArticleAnotherPromoSection anotherPromo={product.anotherPromo} />

      <BreadCrumbs
        isMobileScreen={true}
        items={[
          { name: 'Home', path: '/' },
          { name: 'Product knowledge', path: '/product-knowledge' },
          { name: product.title },
        ]}
      />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  // Fetch article by slug
  const product = {
    title: 'Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru 2023',
    slug: 'mobil-avanza-matic-harga-promo',
    content: `
      <p>
        Mobilisasi tentunya semakin nyaman dengan menggunakan kendaraan pribadi yang tepat. 
        Tentu saja hal tersebut bisa dengan mudah ditemukan pada mobil Avanza matic. 
        Dikenal sebagai salah 1 pilihan mobil keluarga Indonesia, 
        Toyota Avanza matic siap memberikan Anda segala kemudahan lewat fiturnya yang menarik dan terbaik di kelasnya.
      </p>
    `,
    rules: '*Paket terlampir adalah untuk OTR DKI Jakarta dan untuk wilayah lain akan berbeda.',
    issuedDate: '21 Nov 22',
    image: 'http://localhost:3002/images/promo-car-example.webp',
    spec: {
      title: 'Spesifikasi Mobil Matic Avanza',
      caption:
        'Toyota All New Avanza hadir dengan dua mesin seri NR dengan platform penggerak depan yang sudah ditingkatkan. Pertama ada mesin 1NR-VE 1.329 cc 4 silinder yang mampu menghasilkan tenaga 98 PS dan torsi 12,4 Kgm. Kemudian, Avanza matic juga menyediakan mobil dengan pilihan 2NR-VE 1.496 cc 4 silinder dengan kemampuan tenaga 106 PS dan torsi 14 Kgm.',
      specList: [
        {
          id: 1,
          title: 'Dimensi',
          desc: 'Panjang : 4.395 mm, Lebar : 1.730 mm, Tinggi : 1.665 mm',
        },
        {
          id: 2,
          title: 'Chasis',
          desc: 'Transmission / Transmission Type : AT',
        },
        {
          id: 3,
          title: 'Mesin',
          desc: 'Tipe Mesin : 1.500 cc, 4 Cylinders in-line',
        },
        {
          id: 4,
          title: 'Fitur Keamanan',
          desc: 'Airbags untuk pengemudi & pengendara',
        },
        {
          id: 5,
          title: 'Fitur Kenyamanan',
          desc: 'New Dynamic 7" Head Unit Display, AC, 1 stereo',
        },
      ],
    },
    feature: {
      title: 'Kelebihan Transmisi Avanza Matic',
      itemList: [
        {
          id: 1,
          title: '1. Performa Tiada Tara',
          text: 'Satu hal yang akan langsung Anda rasakan ketika mengendarai mobil ini adalah performa yang stabil nan responsif, menjadikannya sebagai pilihan mobil yang cocok di berbagai medan.',
        },
        {
          id: 2,
          title: '2. Akselerasi Mulus',
          text: 'Seluruh varian transmisi Avanza matic sudah dilengkapi dengan CVT. Sehingga setiap perpindahan gigi, Anda akan bisa menikmati akselerasi yang sangat mulus.',
        },
        {
          id: 3,
          title: '3. Minim Getaran',
          text: 'AutoFamily bisa merasakan getaran yang sangat minim sehingga perjalanan akan terasa semakin menyenangkan.',
        },
      ],
    },
    anotherPromo: [
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: 'Trending',
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
    ],
  };

  return {
    props: {
      slug,
      product,
    },
  };
};

export default ProductKnowledgeDetailPage;
