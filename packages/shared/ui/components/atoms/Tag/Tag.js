import { useEffect, useState } from 'react';

const Tag = ({ children, severity, size, className }) => {
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    switch (severity) {
      case 'warn':
        setBgColor('bg-[#FFE293]/50');
        break;
      case 'info':
        setBgColor('bg-[#45B3D5]/30');
        break;
      case 'primary':
        setBgColor('bg-supportiveRed');
        break;
    }
  }, []);

  return (
    <span className={`inline-block py-1 px-[10px] ${bgColor} ${className}`}>
      <span className="text-xs font-normal text-reliableBlack90 lg:text-sm lg:font-medium">
        {children}
      </span>
    </span>
  );
};

Tag.defaultProps = {
  severity: 'warn',
};

export default Tag;
