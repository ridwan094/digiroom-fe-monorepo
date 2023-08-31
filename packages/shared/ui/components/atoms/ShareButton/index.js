import React from 'react';
import Button from '../Button';
import { BiSolidShareAlt } from 'react-icons/bi';

const ShareButton = ({ onClick, fillColor }) => {
  return (
    <Button
      className="bg-reliableBlack10 px-3 py-[11px]"
      type="button"
      variant={'bg-reliableBlack10'}
      onClick={onClick}
    >
      <BiSolidShareAlt size={24} fill={fillColor} />
    </Button>
  );
};

ShareButton.defaultProps = {
  onClick: () => {},
  fillColor: 'bg-reliableBlack80',
};

export default ShareButton;
