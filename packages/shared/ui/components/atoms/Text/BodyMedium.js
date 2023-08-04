import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/textAdditionalClassName';

const BodyMedium = ({
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
      className={`text-[14px] leading-[20px] text-black90  ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
BodyMedium.defaultProps = {
  maxLines: 2,
  isClamp: false,
  className: '',
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};
export default BodyMedium;
