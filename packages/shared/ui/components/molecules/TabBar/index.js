import React, { useEffect, useState } from 'react';

const TabsNavigation = ({ className, tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <React.Fragment>
      <div className={`${className} `}>
        <ul
          className={`flex items-center justify-start w-full overflow-x-auto no-scrollbar lg:justify-start`}
        >
          {tabs.map((tab, index) => (
            <li
              className={`py-3.5 px-4 lg:py-4 lg:px-5 border-b-4 hover:border-supportiveRed ${
                activeTab === index ? 'font-bold border-supportiveRed' : 'border-transparent'
              }`}
              key={index}
              role="presentation"
            >
              <button
                className={`text-xs uppercase text-reliableBlack whitespace-nowrap lg:text-base`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>{tabs[activeTab].content}</div>
    </React.Fragment>
  );
};

export default TabsNavigation;
