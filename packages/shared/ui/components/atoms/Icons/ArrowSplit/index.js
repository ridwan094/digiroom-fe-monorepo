import React from 'react';

const ArrowSplit = ({ size = '36', fill = '#036EBC' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <mask id="mask0_1874_494" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect y="20" width="20" height="20" transform="rotate(-90 0 20)" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1874_494)">
        <path
          d="M10.4167 15.8333L9.58342 15.8333L9.58341 10.173L5.00008 5.58967L5.00008 8.33325L4.16675 8.33325L4.16675 4.16658L8.33341 4.16658L8.33341 4.99992L5.58983 4.99992L10.4167 9.82683L10.4167 15.8333ZM15.8334 8.33325L15.0001 8.33325L15.0001 5.58967L11.7982 8.80121L11.1988 8.20183L14.4103 4.99992L11.6667 4.99992L11.6667 4.16658L15.8334 4.16658L15.8334 8.33325Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default ArrowSplit;
