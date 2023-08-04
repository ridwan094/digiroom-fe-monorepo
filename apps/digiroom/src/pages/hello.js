import Layout from 'ui/components/templates/Layout';
import Carousel from 'ui/components/atoms/Carousel';
import Accordion from 'ui/components/atoms/Accordion';
import CardPromo from 'ui/components/molecules/CardPromo';
import CardCarProduct from 'ui/components/molecules/CardCarProduct';
import CardAccessoriesProduct from 'ui/components/molecules/CardAccessoriesProduct';
import Tag from 'ui/components/atoms/Tag';

const Hello = () => {
  function generateSlides(length = 10, sig = 0) {
    return Array.from({ length }).map((value, index) => {
      index = sig || index;

      return {
        src: `https://source.unsplash.com/random/800x450?sig=${index}`,
        alt: `Image ${index + 1}`,
      };
    });
  }

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 mt-8">Carousel</h2>
        <Carousel perPage={1} arrows={false} pagination={true} items={generateSlides()} />
      </div>

      <div className="container mx-auto">
        <h2 className="text-base font-bold uppercase mb-2 mt-8">Promo Toyota Terbaru 2023</h2>
        <p className="text-xs font-medium leading-relaxed mb-4">
          Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
        </p>
      </div>
      <div className="relative mb-8">
        <Tag className="absolute top-0 right-0 rounded-bl">
          <span className="font-bold">Hot Deal</span>
        </Tag>
        <img
          className="w-full object-cover"
          src="http://localhost:3002/banner-image.png"
          alt="Promo banner image auto2000"
        />
      </div>

      <div className="container mx-auto mb-8">
        <h2 className="text-base font-bold uppercase mb-4">Promo FAQ</h2>
        <Accordion
          data={[
            {
              title: 'Apakah promo di Auto2000 selalu tersedia tiap bulan?',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti olor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corr at! Corrupti olor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat!',
            },
            {
              title: 'Apakah promo berlaku untuk semua tipe mobil Toyota?',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti',
            },
            {
              title: 'Apakah tetap dapat menggunakan promo dengan pembayaran sistem kredit?',
              content:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti or sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti',
            },
          ]}
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Card Promo</h2>
      <div className="grid grid-cols-2">
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
          tag={<Tag className="rounded-br">Trending</Tag>}
        />
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
        />
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
        />
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
        />
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
        />
        <CardPromo
          title="Cicilan Ringan Toyota Raize"
          startDate="21 Nov 22"
          endDate="30 Jun 23"
          coverImg="http://localhost:3002/promo-car-example.png"
        />
      </div>

      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 mt-8">Card Car Product</h2>
        <div className="grid grid-cols-3 gap-4">
          <CardCarProduct
            title="Kijang Innova Zenix"
            coverImg="http://localhost:3002/Product%20Image.png"
            price="425,600,000"
          />
          <CardCarProduct
            title="Kijang Innova Zenix"
            coverImg="http://localhost:3002/Product%20Image.png"
            price="425,600,000"
          />
          <CardCarProduct
            title="Kijang Innova Zenix"
            coverImg="http://localhost:3002/Product%20Image.png"
            price="425,600,000"
          />
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4 mt-8">Card Accessories Product</h2>
        <div className="grid grid-cols-3 gap-4">
          <CardAccessoriesProduct
            title="Oil Filter"
            coverImg="http://localhost:3002/accessories-product-example.png"
            price="81.000"
            carTypes={['Fortuner', 'Innova', 'Rush']}
            discountPercentage="10%"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hello;
