import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import GeoLocation from '../Icons/GeoLocation';

const GeoPosition = ({ onChange, value, options, classNameContainer }) => {
  const className = ['relative', classNameContainer];
  const [isOpen, setIsOpen] = useState(false);

  const handleClickLocation = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleSelectLocation = (location) => {
    onChange(location);
    setIsOpen(false);
  };

  return (
    <div className={className.join(' ')}>
      <div
        className="flex gap-1 items-center cursor-pointer h-10 justify-center px-2"
        onClick={handleClickLocation}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99998 13.9728C11.4028 12.8467 12.4687 11.7524 13.1979 10.6899C13.9271 9.6274 14.2917 8.6177 14.2917 7.66081C14.2917 6.85397 14.1457 6.16599 13.8539 5.59688C13.562 5.02776 13.2003 4.56694 12.7687 4.2144C12.3371 3.86187 11.8722 3.60605 11.374 3.44694C10.8758 3.28784 10.4204 3.20829 10.0076 3.20829C9.59486 3.20829 9.13835 3.28784 8.6381 3.44694C8.13785 3.60605 7.67103 3.86187 7.23765 4.2144C6.80424 4.56694 6.441 5.02776 6.14792 5.59688C5.85483 6.16599 5.70829 6.85397 5.70829 7.66081C5.70829 8.6177 6.07287 9.6274 6.80204 10.6899C7.53122 11.7524 8.5972 12.8467 9.99998 13.9728ZM9.99998 15.6602C8.0972 14.2393 6.68401 12.8696 5.76042 11.5513C4.83681 10.2329 4.375 8.94011 4.375 7.67296C4.375 6.71586 4.54193 5.87671 4.87579 5.1555C5.20967 4.43431 5.64806 3.83172 6.19096 3.34775C6.73386 2.86378 7.34028 2.49733 8.01023 2.2484C8.68017 1.99947 9.34342 1.875 9.99998 1.875C10.6704 1.875 11.3371 1.99947 12.0001 2.2484C12.6631 2.49733 13.2661 2.86378 13.809 3.34775C14.3519 3.83172 14.7903 4.43431 15.1242 5.1555C15.458 5.87671 15.625 6.71586 15.625 7.67296C15.625 8.94011 15.1632 10.2329 14.2395 11.5513C13.3159 12.8696 11.9028 14.2393 9.99998 15.6602ZM10.0026 9.04163C10.4196 9.04163 10.7735 8.89547 11.0641 8.60317C11.3547 8.31085 11.5 7.95615 11.5 7.53906C11.5 7.12198 11.3538 6.76815 11.0615 6.47756C10.7692 6.18697 10.4145 6.04167 9.9974 6.04167C9.58031 6.04167 9.22648 6.18782 8.9359 6.48013C8.6453 6.77245 8.5 7.12715 8.5 7.54423C8.5 7.96131 8.64615 8.31515 8.93846 8.60573C9.23078 8.89633 9.58548 9.04163 10.0026 9.04163ZM4.375 18.125V16.7917H15.625V18.125H4.375Z"
            fill="#494949"
          />
        </svg>
        <p className="text-xs text-reliableBlack font-bold flex-1">{value}</p>
        <MdOutlineArrowDropDown
          className="text-xl text-reliableBlack"
          style={{ rotate: isOpen ? '180deg' : '0deg' }}
        />
      </div>
      {isOpen && (
        <div className="bg-white text-reliableBlack absolute top-full left-0 right-0 shadow-md">
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
  classNameContainer: '',
  value: '',
  onChange: () => {},
  options: [],
};

export default GeoPosition;
