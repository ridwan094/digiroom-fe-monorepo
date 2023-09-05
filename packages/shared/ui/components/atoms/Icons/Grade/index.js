const Grade = ({ size = '24' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_135_46842"
        style={{ maskType: 'alpha' }}
        width={size}
        height={size}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g mask="url(#mask0_135_46842)">
        <path
          fill="#CE181E"
          d="M8.85 15.825l3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4L10.55 9.5l-3.65.325 2.775 2.425-.825 3.575zm-1.525 2.098l1.24-5.313-4.123-3.572 5.431-.47L12 3.557l2.127 5.01 5.43.47-4.122 3.572 1.24 5.313L12 15.102l-4.675 2.821z"
        ></path>
      </g>
    </svg>
  );
};

export default Grade;
