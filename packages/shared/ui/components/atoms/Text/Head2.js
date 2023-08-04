import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/textAdditionalClassName';

const Head2 = ({
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
    <h2
      style={{ ...lineClampStyle, ...style }}
      className={`text-[32px] leading-[40px] text-black90 font-bold  ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

Head2.defaultProps = {
  className: '',
  maxLines: 2,
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default Head2;
