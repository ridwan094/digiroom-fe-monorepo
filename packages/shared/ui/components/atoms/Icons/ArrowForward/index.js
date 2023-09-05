import React from 'react';

const ArrowForward = ({ size = '20', color = '#CE181E' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={color}
        d="M10 16.346l-.891-.878 4.843-4.843H3.654v-1.25h10.298L9.109 4.532l.89-.878L16.347 10 10 16.346z"
      ></path>
    </svg>
  );
};

export default ArrowForward;
