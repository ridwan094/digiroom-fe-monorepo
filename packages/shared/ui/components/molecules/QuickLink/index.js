import React, { useState } from "react";
import Text from "ui/components/atoms/Text";
import QuickLinksIcon from "ui/components/atoms/Icons/QuickLinksIcon";
import CloseIcon from "ui/components/atoms/Icons/CloseIcon";
import {
  LocateIcon,
  TestDrive,
  HomeService,
  TrackingOrder,
  Whatsapp,
} from "../../atoms";

const QuickLink = () => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const menuQuickLink = [
    { title: "Locate Dealer", icon: <LocateIcon fill={"#fff"} size="40" /> },
    { title: "Test Drive", icon: <TestDrive fill={"#fff"} size="40" /> },
    { title: "Home Service", icon: <HomeService fill={"#fff"} width="40" height="28" /> },
    { title: "Tracking Order", icon: <TrackingOrder fill={"#fff"} size="40" /> },
    { title: "Connect on WhatsApp", icon: <Whatsapp fill={"#fff"} size="40" /> },
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div
        className={`bg-[#5B5B5B] rounded-full p-3 cursor-pointer max-w-[50px] flex flex-col items-center justify-center ${
          showQuickLinks ? "scale-100" : "scale-10"
        }`}
        onClick={() => setShowQuickLinks((prevShowQuickLinks) => !prevShowQuickLinks)}
      >
        {!showQuickLinks ? (
          <>
            <QuickLinksIcon fill={"#fff"} />
            <Text.BodySmall className="text-[#fff] mt-1">Quick Links</Text.BodySmall>
          </>
        ) : (
          <>
            <Text.BodySmall className="text-[#fff] mt-1">Close</Text.BodySmall>
            <CloseIcon fill={"#fff"} />
          </>
        )}
      </div>
      {showQuickLinks && (
        <div className="bg-[#5B5B5B] rounded-md p-4 mt-2 w-40 max-h-60 overflow-auto shadow-lg">
          <ul className="space-y-2">
            {menuQuickLink.map((items, indx) => (
              <li key={indx} className="cursor-pointer flex items-center space-x-2">
                <div className="flex-shrink-0">{items.icon}</div>
                <Text.BodySmall className="text-[#fff] font-[500]">{items.title}</Text.BodySmall>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuickLink;