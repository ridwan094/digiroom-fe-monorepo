import React, { useState } from 'react';
import TabBar from 'ui/components/molecules/TabBar';
import Card from '../../atoms/Card';
import { CardPromo } from 'ui/components/molecules';
import { Tag } from 'ui/components/atoms';

const TabBarPromo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const tabsData = [
    {
      title: 'ALL',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
            tag={<Tag className="rounded-br">Trending</Tag>}
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
            tag={<Tag className="rounded-br">Trending</Tag>}
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
          />
          <CardPromo
            title="Cicilan Ringan Toyota Raize"
            startDate="21 Nov 22"
            endDate="30 Jun 23"
            coverImg="http://localhost:3002/images/promo-car-example.png"
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
            coverImg="http://localhost:3002/images/promo-car-example.png"
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
    <div>
      <TabBar tabs={tabsData} onTabChange={handleTabChange} />
    </div>
  );
};

export default TabBarPromo;
