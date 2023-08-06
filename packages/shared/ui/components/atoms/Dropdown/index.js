import React, { Fragment, useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { FiX } from 'react-icons/fi';

const Dropdown = ({
  label,
  withInput = false,
  icon,
  text,
  options,
  onSelect,
  selectedOption,
  placeholder,
  size = 'w-full',
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setIsDropdownOpen(false);
  };

  const deleteSelectedOption = () => {
    onSelect('');
  };

  return (
    <div className={`relative ${size}`}>
      {withInput ? (
        <Fragment>
          <label className="block text-reliableBlack70 text-sm font-bold mb-2">{label}</label>
          <div className="flex items-center">
            <input
              type="text"
              value={selectedOption}
              className="w-full px-4 py-2 border-b-2 border-reliableBlack30 text-black cursor-pointer"
              onClick={toggleDropdown}
              placeholder={placeholder}
              readOnly
            />
            {/* Handle toggle icon */}
            {selectedOption ? (
              <span
                className="absolute right-2 text-red-500 cursor-pointer"
                onClick={deleteSelectedOption}
              >
                <FiX />
              </span>
            ) : (
              <span
                className={`absolute right-2 ${
                  isDropdownOpen
                    ? 'transform rotate-180 transition duration-500 text-reliableBlack80'
                    : 'text-reliableBlack80 transform rotate-0 duration-500'
                }`}
                onClick={toggleDropdown}
              >
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.825 0.158325L5 3.97499L1.175 0.158325L0 1.33333L5 6.33332L10 1.33333L8.825 0.158325Z"
                    fill="#4F4C4D"
                  />
                </svg>
              </span>
            )}
          </div>
        </Fragment>
      ) : (
        <div
          className="flex gap-1 items-center cursor-pointer h-10 justify-center px-2"
          onClick={toggleDropdown}
        >
          {icon ? icon : <div>{text}</div>}

          <MdArrowDropDown
            style={{ color: '#494949', rotate: isDropdownOpen ? '180deg' : '0deg' }}
          />
        </div>
      )}
      {isDropdownOpen && (
        <ul className={`${size} absolute z-10 left-0 text-reliableBlack50 bg-white shadow rounded`}>
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {icon ? <img src={option.src} alt="id" style={{ height: '14px' }} /> : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
