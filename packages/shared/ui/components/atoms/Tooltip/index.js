import React, { useState } from 'react';

const Tooltip = ({ label, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleShowTooltip = () => {
    setTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {children}
      {isTooltipVisible && (
        <div
          className="tooltip bg-reliableBlack text-white p-2 rounded-md shadow-lg z-10 absolute bottom-full left-1/2 transform -translate-x-1/2"
          style={{
            opacity: isTooltipVisible ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
