import React, { useState } from 'react';

const TabsNavigation = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <>
      <ul className="flex items-center justify-between w-full overflow-x-auto no-scrollbar lg:justify-start lg:pb-6">
        {tabs.map((tab, index) => (
          <li key={index} role="presentation">
            <button
              className={`text-xs uppercase text-reliableBlack px-4 pb-2 border-b-4 hover:border-supportiveRed lg:text-base ${
                activeTab === index ? 'font-bold border-supportiveRed' : 'border-transparent'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </>
  );
};

export default TabsNavigation;
