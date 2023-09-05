import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/TextAdditionalClassName';

const Headline3 = ({
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
      className={`text-[26px] leading-8 text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Headline3.defaultProps = {
  maxLines: 2,
  className: '',
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};
export default Headline3;
