import React, { useState } from "react";
import TabBar from 'ui/components/molecules/TabBar'
import Card from "../../atoms/Card/Card";

const TabBarPromo = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabChange = (index) => {
        setActiveTab(index);
      };
      const tabsData = [
        {
          title : 'ALL',
          content : 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                {/* Title*/}
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://awsimages.detik.net.id/community/media/visual/2023/02/10/toyota-grand-highlander-2024-6_169.jpeg?w=650&q=80" alt="Title Image" />
                </div>
                {/* Content go here */}
                <div className="p4">
                    <p className="text-reliableBlack font-medium text-2xl mb-4 font-Montserrat">
                        Promo Toyota Highlander
                    </p>
                </div>
                {/* Footer (Yummy) */}
                <div className="pt-4">
                  <p className="text-sm text-reliableBlack70-400">01 Juli 2023 - 1 Januari 2023</p>
                </div>
              </Card>
              <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://www.toyota.astra.co.id/sites/default/files/2022-11/NEWS%2011%20NOVEMBER%20-%20LAUNCHING%20RAV4%20GR%20SPORT%201.jpg" alt="Toyota Highlander" />  
                </div>
                <div className="p4">
                    <p className="text-reliableBlack font-medium text-2xl mb-4 font-Montserrat">
                    Launching Rav 4
                    </p>
                </div>
                <div className="pt-4">
                    <p className="text-sm text-reliableBlack70-400">Coming Soon....</p>
                </div>
              </Card>
              <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://www.toyota.astra.co.id/sites/default/files/2023-06/Home%20Banner%20Yaris%20Cross%20Gasoline%201293x820_0.jpg" alt="Toyota Highlander" />  
                </div>
                <div className="p4">
                    <p className="text-reliableBlack font-medium text-2xl mb-4 font-Montserrat">
                        Toyota Yaris Cross Resmi Debut!
                    </p>
                </div>
                <div className="pt-4">
                    <p className="text-sm text-reliableBlack70-400">15 Mei 2023</p>
                </div>
              </Card>
              <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png" alt="Toyota Highlander" />  
                </div>
                <div className="p4">
                    <p className="text-reliableBlack font-medium text-2xl mb-4 font-Montserrat">
                        Promo Avanza Akhir Tahun
                    </p>
                </div>
                <div className="pt-4">
                    <p className="text-sm text-reliableBlack70-400">25 Desember 2022 - 11 Januari 2023</p>
                </div>
              </Card>
            </div>
        },
        {
          title : 'MOBIL BARU',
          content : 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                {/* Title*/}
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-contain rounded-t-md" src="https://awsimages.detik.net.id/community/media/visual/2023/02/10/toyota-grand-highlander-2024-6_169.jpeg?w=650&q=80" alt="Foot Lover" />
                </div>
                {/* Content go here */}
                <div className="p4">
                    <p className="text-gray-600 mb-4">
                    This is the content.
                    </p>
                </div>
                {/* Footer (Yummy) */}
                <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm text-reliableBlack70-400">Coming Soon....</p>
                </div>
            </Card>
            <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
                <div className="w-full h-40 overflow-hidden">
                    <img className="w-full h-full object-contain rounded-t-md" src="https://www.toyota.astra.co.id/sites/default/files/2022-11/NEWS%2011%20NOVEMBER%20-%20LAUNCHING%20RAV4%20GR%20SPORT%201.jpg" alt="Toyota Highlander" />  
                </div>
                <div className="p4">
                    <p className="text-reliableBlack font-medium text-2xl mb-4 font-Montserrat">
                    Launching Rav 4
                    </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                    <p className="text-sm text-reliableBlack70-400">Coming Soon....</p>
                </div>
              </Card>
            </div>
        },
        {
          title : 'SERVIS',
          content : <div>
            <Card className="mb-4 transition-all ease-in-out duration-300 hover:scale-105">
            <h2 className="text-xl font-bold mb-2">Under Maintenance</h2>
                <p className="text-gray-600 mb-4">
                Feel free to ask the Admin
                </p>
                <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-400">Sorry for the inconvenience</p>
                </div>
            </Card>
          </div>
        },
        {
          title : 'LAINNYA',
          content : <div>hellooooooooo</div>
        }
      ];
    return(
        <TabBar tabs={tabsData} onTabChange={handleTabChange} />
    )
};

export default TabBarPromo;