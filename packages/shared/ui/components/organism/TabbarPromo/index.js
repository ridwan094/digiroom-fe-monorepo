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
          <div>
            Photo Please
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <Card className="mb-4">
                {/* Title*/}
                <h2 className="text-xl font-bold mb-2">Foot lover</h2>
                {/* Content go here */}
                <p className="text-gray-600 mb-4">
                  This is the content.
                </p>
                {/* Footer (Yummy) */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-400">Try foot its good</p>
                </div>
              </Card>
              <Card className="mb-4">
                <h2 className="text-xl font-bold mb-2">Is you Tall?</h2>
                <p className="text-gray-600 mb-4">
                  i am 5 foot and a half in a good day.
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-400">I am 5 foot</p>
                </div>
              </Card>
              <Card className="mb-4">
              <h2 className="text-xl font-bold mb-2">Obamna</h2>
                <p className="text-gray-600 mb-4">
                  SODA!!!!!
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-400">HMMMMM</p>
                </div>
              </Card>
              <Card className="mb-4">
              <h2 className="text-xl font-bold mb-2">Sometimes</h2>
                <p className="text-gray-600 mb-4">
                  The urge keep coming
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-400">Help</p>
                </div>
              </Card>
            </div>
          </div>
        },
        {
          title : 'MOBIL BARU',
          content : <div>hellooooooooo</div>
        },
        {
          title : 'SERVIS',
          content : <div>hellooooooooo</div>
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