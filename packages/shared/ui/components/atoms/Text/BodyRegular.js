import { useMemo } from 'react';
import textAdditionalClassName from '../../../helpers/utils/TextAdditionalClassName';

const BodyRegular = ({
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
      className={`text-base text-black90 ${additionalClassName} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

BodyRegular.defaultProps = {
  className: '',
  maxLines: 2,
  isClamp: false,
  style: {},
  textBreak: 'words',
  overflow: 'hidden',
};

export default BodyRegular;
