const FacebookIcon = ({ size = '32', fill = '#BEBEBE' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.42857 7.42318H0V11.0674H3.42857V22H8.57143V11.0674H11.6914L12 7.42318H8.57143V5.90537C8.57143 5.0344 8.736 4.69002 9.528 4.69002H12V0.134766H7.87886C4.79657 0.134766 3.42857 1.57787 3.42857 4.34018V7.42318Z"
        fill={fill}
      />
    </svg>
  );
};

export default FacebookIcon;
