import { Pagination } from '../../atoms';
import { useState } from 'react';
import { CardProductKnowledge, TabBar } from 'ui/components/molecules';

const TabBarProductKnowledge = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabsData = [
    {
      title: 'SEMUA',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
        </div>
      ),
    },
    {
      title: 'MOBIL BARU',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
        </div>
      ),
    },
    {
      title: 'SERVIS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
        </div>
      ),
    },
    {
      title: 'LAINNYA',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
          <CardProductKnowledge
            title="Mobil Avanza Matic: Harga, Promo, dan Spesifikasi Terbaru"
            slug="mobil-avanza-matic"
            date="2 Apr 2023"
            coverImg="/images/avanza-matic.webp"
          />
        </div>
      ),
    },
  ];
  return (
    <section className="my-[30px] px-4 lg:px-[100px] lg:my-3">
      <div className="lg:container">
        <div className="">
          <TabBar tabs={tabsData} onTabChange={handleTabChange} />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 lg:mt-9 lg:justify-between">
          <p className="hidden items-center gap-1 text-lg lg:flex">
            <span>Menampilkan</span>
            <span className="font-semibold">12</span>
            <span>dari</span>
            <span className="font-semibold">60</span>
          </p>

          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default TabBarProductKnowledge;
