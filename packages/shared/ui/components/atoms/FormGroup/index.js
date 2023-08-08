import React from 'react';
import Text from 'ui/components/atoms/Text';
import { FiX } from 'react-icons/fi';

const FormGroup = ({
  title = '',
  subTitle = '',
  onClose,
  colorCloseIcons,
  titleTestId,
  btnCloseTestId,
  withcCloseIcon = false,
  containerFormGroupClass = '',
}) => {
  return (
    <div className={containerFormGroupClass}>
      <Text.Head4 className="text-reliableBlack90 md-max-w:text-head5" data-testid={titleTestId}>
        {title}
      </Text.Head4>
      {subTitle && (
        <Text.BodyLarge className="md-max-w:text-head2" data-testid={titleTestId}>
          {subTitle}
        </Text.BodyLarge>
      )}
      {withcCloseIcon ? (
        <div
          onClick={onClose}
          className="flex items-center justify-center cursor-pointer w-8 h-8"
          data-testid={btnCloseTestId}
        >
          <FiX size={32} color={colorCloseIcons} />
        </div>
      ) : null}
    </div>
  );
};

FormGroup.defaultProps = {
  title: '',
  subTitle: '',
  withcCloseIcon: false,
  containerFormGroupClass: '',
  colorCloseIcons: '',
  titleTestId: '',
  btnCloseTestId: '',
  onClose: () => {},
};

export default FormGroup;
