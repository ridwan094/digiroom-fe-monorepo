import { Label, Radio } from 'flowbite-react';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const Accordion = ({ title, index, isActive, children }) => {
  const [isChecked, setIsChecked] = useState(isActive);

  const toggleActive = () => {
    setIsChecked(!isChecked);
  };

  const handleSelected = (value) => {
    console.log(value);
  };

  return (
    <button
      className={`w-full mb-2 py-[18px] last:mb-0 border-b border-reliableBlack10 cursor-pointer transition-all duration-300 lg:px-5 }`}
      onClick={() => {
        toggleActive();
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <Radio
            checked={isChecked}
            onChange={(e) => handleSelected(e.target.value)}
            id={`radio-${index}`}
            name="countries"
            value={title}
          />
          <Label
            htmlFor={`radio-${index}`}
            className="text-xs mx-2 text-start font-medium text-reliableBlack lg:text-base"
          >
            {title}
          </Label>
        </div>

        {isChecked ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
      </div>

      <div
        className={`text-start text-xs text-reliableBlack leading-relaxed h-0 overflow-hidden transition-all duration-300 lg:text-base lg:leading-relaxed ${
          isChecked && 'h-auto overflow-auto mt-4'
        }`}
      >
        {children}
      </div>
    </button>
  );
};

Accordion.defaultProps = {};

export default Accordion;
