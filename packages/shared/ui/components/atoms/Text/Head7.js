import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/textAdditionalClassName';

const Head7 = ({
  children,
  className,
  maxLines,
  isClamp,
  style,
  textBreak,
  overflow,
  ...props
}) => {
  const lineClampStyle = isClamp
    ? {
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
      }
    : {};

  const additionalClassName = useMemo(
    () => textAdditionalClassName(textBreak, overflow),
    [textBreak, overflow]
  );
  return (
    <div
      style={{ ...lineClampStyle, ...style }}
      className={`text-[22px] font-semibold leading-[28px] text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Head7.defaultProps = {
  maxLines: 2,
  className: '',
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default Head7;
