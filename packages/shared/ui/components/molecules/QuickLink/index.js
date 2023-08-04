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
    { title: "Locate Dealer", icon: <LocateIcon fill={"#fff"} size="50"/> },
    { title: "Test Drive", icon: <TestDrive fill={"#fff"} size="50"/> },
    { title: "Home Service", icon: <HomeService fill={"#fff"} width="50" height="38"/> },
    { title: "Tracking Order", icon: <TrackingOrder fill={"#fff"} size="50"/> },
    { title: "Connect on whatsapp", icon: <Whatsapp fill={"#fff"} /> },
  ];
  return (
    <div
      className={`bg-[#5B5B5B] fixed ${
        showQuickLinks ? "right-[150px]" : "right-0"
      } p-3 top-[50%] z-50 `}
    >
      {!showQuickLinks ? (
        <div
          className="cursor-pointer max-w-[50px] flex flex-col items-center"
          onClick={() =>
            setShowQuickLinks((prevShowQuickLinks) => !prevShowQuickLinks)
          }
        >
          <div className="mb-3">
            <QuickLinksIcon fill={"#fff"} />
          </div>
          <Text.BodySmall className={"text-[#fff] text-center"}>
            Quick Links
          </Text.BodySmall>
        </div>
      ) : (
        <div className="bg-[#5B5B5B]">
          <div
            className="cursor-pointer"
            onClick={() =>
              setShowQuickLinks((prevShowQuickLinks) => !prevShowQuickLinks)
            }
          >
            <div className="mb-3">
              <CloseIcon fill={"#fff"} />
            </div>
            <Text.BodySmall className={"text-[#fff] text-center"}>
              Close
            </Text.BodySmall>
          </div>
          <div className="absolute right-[-150px] top-[-200px] bg-[#5B5B5B] p-[20px] max-w-[150px] max-h-[488px]">
            <ul className="text-center">
              {menuQuickLink.map((items, indx) => {
                return (
                  <li key={indx} className="border-b-2 border-[#6e6e6e] last:border-0 last:border-none pb-2 mb-2">
                    <div className="max-w-[50%] m-auto mb-2">{items.icon}</div>
                    <Text.BodySmall className={"font-[500] text-[#fff]"}>
                      {items.title}
                    </Text.BodySmall>
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
