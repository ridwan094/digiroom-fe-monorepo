import React from 'react';

const GarageHome = ({ size = '24', fill = '#231F20' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask id="mask0_1874_1110" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <rect width={size} height={size} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1874_1110)">
        <path
          d="M5 20V9.50002L12 4.21155L19 9.50002V20H18V10L12 5.46157L6 10V20H5ZM8.5 18.9808H15.5V15.9808H8.5V18.9808ZM8.5 14.9808H15.5V11.9808H8.5V14.9808ZM7.5 19.9808V10.9808H16.5V19.9808H7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default GarageHome;
