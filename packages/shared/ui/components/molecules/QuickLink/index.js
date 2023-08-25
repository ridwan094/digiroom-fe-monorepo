import React, { useState } from 'react';

import Text from 'ui/components/atoms/Text';
import QuickLinksIcon from 'ui/components/atoms/Icons/QuickLinksIcon';
import CloseIcon from 'ui/components/atoms/Icons/CloseIcon';
import { LocateIcon, TestDrive, HomeService, TrackingOrder, Whatsapp } from '../../atoms';

const QuickLink = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const menuQuickLink = [
    {
      title: 'Locate Dealer',
      src: 'https://auto2000.co.id/dealer-toyota',
      icon: <LocateIcon fill={'#fff'} size="40" />,
    },
    { title: 'Test Drive', src: '', icon: <TestDrive fill={'#fff'} size="40" /> },
    { title: 'Home Service', src: '', icon: <HomeService fill={'#fff'} width="40" height="28" /> },
    { title: 'Tracking Order', src: '', icon: <TrackingOrder fill={'#fff'} size="40" /> },
    { title: 'Connect on whatsapp', src: '', icon: <Whatsapp fill={'#fff'} size="40" /> },
  ];

  return (
    <div
      className={`bg-[#5B5B5B] fixed ${
        showQuickLinks ? 'right-[25%] md:right-[7%]' : 'right-0'
      } p-3 top-[50%] z-50 `}
    >
      {!showQuickLinks ? (
        <div
          className="cursor-pointer max-w-[50px] flex flex-col items-center"
          onClick={() => setShowQuickLinks((prevShowQuickLinks) => !prevShowQuickLinks)}
        >
          <div className="mb-3">
            <QuickLinksIcon fill={'#fff'} />
          </div>
          <Text.BodySmall className={'text-[#fff] text-center'}>Quick Links</Text.BodySmall>
        </div>
      ) : (
        <div className="bg-[#5B5B5B]">
          <div
            className="cursor-pointer"
            onClick={() => setShowQuickLinks((prevShowQuickLinks) => !prevShowQuickLinks)}
          >
            <div className="mb-3">
              <CloseIcon fill={'#fff'} />
            </div>
            <Text.BodySmall className={'text-[#fff] text-center'}>Close</Text.BodySmall>
          </div>
          <div className="absolute right-[-114px] top-[-200px] bg-[#5B5B5B] p-[20px] max-w-[150px] max-h-[460px]">
            <ul className="text-center">
              {menuQuickLink.map((items, indx) => {
                return (
                  <li
                    key={indx}
                    className="cursor-pointer border-b-2 border-[#6e6e6e] last:border-0 last:border-none  pb-2 mb-2"
                  >
                    <a href={items.src} target="_blank" rel="noreferrer">
                      <div className="max-w-[50%] m-auto mb-2">{items.icon}</div>
                      <Text.BodySmall className={'font-[500] text-[#fff] max-w-[75px] m-auto'}>
                        {items.title}
                      </Text.BodySmall>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLink;
