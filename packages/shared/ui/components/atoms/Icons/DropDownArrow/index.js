const DropDownArrow = ({ size = '12', fill = '#4F4C4D' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.825 0.158325L5 3.97499L1.175 0.158325L0 1.33333L5 6.33332L10 1.33333L8.825 0.158325Z"
        fill={fill}
      />
    </svg>
  );
};

export default DropDownArrow;
