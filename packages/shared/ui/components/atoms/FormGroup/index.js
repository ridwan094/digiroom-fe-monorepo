import React from "react";
import Text from "ui/components/atoms/Text";
import { FiX } from "react-icons/fi";

const FormGroup = ({
  title = "",
  onClose,
  colorCloseIcons,
  titleTestId,
  btnCloseTestId,
}) => {
  return (
    <div className="flex items-center justify-between md-max-w:p-2 px-4 pt-8 pb-4 text-black">
      <Text.Head4 className={`md-max-w:text-head5`} data-testid={titleTestId}>
        {title}
      </Text.Head4>
      <div
        onClick={onClose}
        className="flex items-center justify-center cursor-pointer w-8 h-8"
        data-testid={btnCloseTestId}
      >
        <FiX size={32} color={colorCloseIcons} />
      </div>
    </div>
  );
};

FormGroup.defaultProps = {
  title: "",
  colorCloseIcons: "",
  titleTestId: "",
  btnCloseTestId: "",
  onClose: () => {},
};

export default FormGroup;
