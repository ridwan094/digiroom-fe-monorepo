import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/TextAdditionalClassName';

const BodyLarge = ({
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
      className={`text-[16px] leading-[24px] break-words text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

BodyLarge.defaultProps = {
  maxLines: 2,
  isClamp: false,
  className: '',
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default BodyLarge;
