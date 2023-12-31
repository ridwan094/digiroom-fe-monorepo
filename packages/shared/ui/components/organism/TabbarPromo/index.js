import { useState } from 'react';
import { Card, Pagination } from '../../atoms';
import { CardPromo, TabBar } from 'ui/components/molecules';

const TabBarPromo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const tabsData = [
    {
      title: 'Semua',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
            tag="Trending"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
            tag="Best Seller"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            slug="cicilan-ringan-toyota-raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
        </div>
      ),
    },
    {
      title: 'MOBIL BARU',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.webp"
          />
        </div>
      ),
    },
    {
      title: 'SERVIS',
      content: (
        <div>
          <Card className="mb-4">
            <h2 className="text-xl font-bold mb-2">Under Maintenance</h2>
            <p className="text-gray-600 mb-4">Feel free to ask the Admin</p>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-400">Sorry for the inconvenience</p>
            </div>
          </Card>
        </div>
      ),
    },
    {
      title: 'LAINNYA',
      content: (
        <div>
          <Card className="mb-4 ">
            <h2 className="text-xl font-bold mb-2">Under Maintenance</h2>
            <p className="text-gray-600 mb-4">Feel free to ask the Admin</p>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-sm text-gray-400">Sorry for the inconvenience</p>
            </div>
          </Card>
        </div>
      ),
    },
  ];
  return (
    <section className="my-[30px] lg:my-8">
      <div className="lg:container">
        <TabBar tabs={tabsData} onTabChange={handleTabChange} />

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

export default TabBarPromo;
