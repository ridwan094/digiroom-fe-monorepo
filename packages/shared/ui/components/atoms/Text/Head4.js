import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/textAdditionalClassName';

const Head4 = ({
  children,
  className,
  maxLines,
  style,
  isClamp,
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
    <h4
      style={{ ...lineClampStyle, ...style }}
      className={`font-bold text-2xl text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

Head4.defaultProps = {
  maxLines: 2,
  className: '',
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default Head4;
