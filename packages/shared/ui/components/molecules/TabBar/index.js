import React, { useEffect, useState } from 'react';

const TabsNavigation = ({ className, tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <React.Fragment>
      <ul
        className={`${className} flex items-center justify-between w-full overflow-x-auto no-scrollbar lg:justify-start`}
      >
        {tabs.map((tab, index) => (
          <li
            className={`p-3 lg:p-4 border-b-4 hover:border-supportiveRed ${
              activeTab === index ? 'font-bold border-supportiveRed' : 'border-transparent'
            }`}
            key={index}
            role="presentation"
          >
            <button
              className={`text-xs uppercase text-reliableBlack lg:text-base`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div>{tabs[activeTab].content}</div>
    </React.Fragment>
  );
};

export default TabsNavigation;
