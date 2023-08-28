const Checkbox = ({ label, labelClassname, checked, onChange }) => {
  return (
    <label className={`${labelClassname} items-center cursor-pointer`}>
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
        <div
          className={`w-8 h-8 sm:w-6 sm:h-6 transition-all duration-200 ease-in-out border-2 rounded ${
            checked ? 'bg-supportiveRed border-supportiveRed' : 'bg-white border-reliableBlack20'
          } hover:bg-reliableBlack10`}
        >
          {checked && (
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </div>
      </div>
      <span className="ml-3 text-gray-700">{label}</span>
    </label>
  );
};

export default Checkbox;
