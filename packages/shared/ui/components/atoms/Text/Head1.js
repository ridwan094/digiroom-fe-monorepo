import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/textAdditionalClassName';

const Head1 = ({
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
    <h1
      style={{ ...lineClampStyle, ...style }}
      className={`font-bold text-[48px] leading-[60px] text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

Head1.defaultProps = {
  className: '',
  maxLines: 2,
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default Head1;
