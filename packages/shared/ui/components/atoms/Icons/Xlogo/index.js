import React from 'react';

const XLogo = ({ width = '39', height = '36', fill = '#BEBEBE' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.627656 0L15.3529 19.8561L0.534668 36H3.86965L16.843 21.8658L27.325 36H38.6741L23.1204 15.027L36.913 0H33.5781L21.6303 13.0173L11.9767 0H0.627656ZM5.53199 2.4774H10.7458L33.769 33.5222H28.5552L5.53199 2.4774Z"
        fill={fill}
      />
    </svg>
  );
};

export default XLogo;
