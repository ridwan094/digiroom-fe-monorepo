import React, { useState } from 'react';
import TabBar from 'ui/components/molecules/TabBar';

const ListArtikel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const tabsData = [
    {
      title: 'NEWS (8)',
      content: (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b border-black">
            <img src="http://localhost:3002/images/promo-car-example.png" className="w-full" />
            <div className="px-4 flex flex-col justify-center gap-2 mb-4">
              <h5 className="font-medium text-base text-reliableBlack">
                Mengenal Fitur Anti-Merosot Hill Start Assist yang Ada di Mobil Toyota
              </h5>
              <p className="text-reliableBlack80">Posted on Jul 25, 2023</p>
            </div>
          </div>
          <div className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b border-black">
            <img src="http://localhost:3002/images/promo-car-example.png" className="w-full" />
            <div className="px-4 flex flex-col justify-center gap-2 mb-4">
              <h5 className="font-medium text-base text-reliableBlack">
                Mengenal Fitur Anti-Merosot Hill Start Assist yang Ada di Mobil Toyota
              </h5>
              <p className="text-reliableBlack80">Posted on Jul 25, 2023</p>
            </div>
          </div>
          <div className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b border-black">
            <img src="http://localhost:3002/images/promo-car-example.png" className="w-full" />
            <div className="px-4 flex flex-col justify-center gap-2 mb-4">
              <h5 className="font-medium text-base text-reliableBlack">
                Mengenal Fitur Anti-Merosot Hill Start Assist yang Ada di Mobil Toyota
              </h5>
              <p className="text-reliableBlack80">Posted on Jul 25, 2023</p>
            </div>
          </div>
          <div className="w-full overflow-hidden object-cover flex flex-col justify-center gap-6 border-b border-black">
            <img src="http://localhost:3002/images/promo-car-example.png" className="w-full" />
            <div className="px-4 flex flex-col justify-center gap-2 mb-4">
              <h5 className="font-medium text-base text-reliableBlack">
                Mengenal Fitur Anti-Merosot Hill Start Assist yang Ada di Mobil Toyota
              </h5>
              <p className="text-reliableBlack80">Posted on Jul 25, 2023</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'TIPS & TRICKS',
      content: <div></div>,
    },
    {
      title: 'PRODUCT REVIEWS',
      content: <div></div>,
    },
    {
      title: 'EVENTS',
      content: <div></div>,
    },
  ];
  return (
    <div>
      <TabBar tabs={tabsData} onTabChange={handleTabChange} />
    </div>
  );
};

export default ListArtikel;
