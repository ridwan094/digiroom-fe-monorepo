import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import GeoLocation from '../Icons/GeoLocation';

const GeoPosition = ({ onChange, value, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLocation = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleSelectLocation = (location) => {
    onChange(location);
    setIsOpen(false);
  };

  return (
    <div className="bg-white relative">
      <div className="flex gap-1 items-center cursor-pointer h-10 justify-center px-2" onClick={handleClickLocation}>
        <GeoLocation/>
        <p className="text-xs font-bold flex-1">{value}</p>
        <MdOutlineArrowDropDown
          className="text-xl"
          style={{ rotate: isOpen ? '180deg' : '0deg' }}
        />
      </div>
      {isOpen && (
        <div className="bg-white absolute top-full left-0 right-0 shadow-md z-50 rounded">
          {options?.map((location) => (
            <p
              className="text-xs font-bold cursor-pointer px-5 min-h-[40px] flex items-center hover:bg-gray-50"
              onClick={() => handleSelectLocation(location)}
            >
              {location}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

GeoPosition.defaultProps = {
  value: '',
  onChange: () => {},
  options: [],
};

export default GeoPosition;
