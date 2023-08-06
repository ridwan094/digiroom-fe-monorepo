import React, { useState } from "react";

const TabsNavigation = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className="bg-white rounded-lg w-full">
      <div className="flex flex-col md:flex-row justify-between items-left md:space-x-8 overflow-x-auto">
        <ul className="flex flex-nowrap justify-center md:items-center gap-4 w-full lg:justify-start">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`md:mb-0 md:mr-8 ${activeTab === index ? "md:font-bold" : ""}`}
              role="presentation"
              style={{ listStyleType: "none" }}
            >
              <button
                onClick={() => handleTabClick(index)}
                className={`md:inline-block md:rounded-t-lg pb-2 md:pb-1 border-b-2 ${
                  activeTab === index
                    ? "border-supportiveRed hover:border-supportiveRed hover:text-reliableBlack transition-all ease-in-out duration-300 transform hover:scale-105"
                    : "border-transparent hover:border-supportiveRed hover:text-reliableBlack20 transition-all ease-in-out duration-300 transform hover:scale-105"
                } font-semibold`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <span
                  className={`text-base leading-8 whitespace-nowrap ${
                    activeTab === index ? 'text-reliableBlack' : 'text-reliableBlack20'
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsNavigation;
