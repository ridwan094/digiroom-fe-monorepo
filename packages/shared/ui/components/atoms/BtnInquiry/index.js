import React from 'react';
import { Fragment } from 'react';
import { SocialMediaShare } from '../../molecules';

const BtnInquiry = ({
  children,
  loading,
  iconType,
  size,
  disabled,
  block,
  className,
  pressed = false,
  showMediaSocialShare = false,
  type = 'submit',
  colorSocialMediaContainer = '',
  containerBtnInquiry = '',
  style,
  classNameSocialMediaContainerInquiry = '',
  ...props
}) => {
  const classNameAssigned = [
    'justify-end items-center p-4 font-semibold',
    block ? 'w-full' : '',
    pressed ? 'pressed' : '',
    className,
  ];

  const classNameSocialMediaAssigned = [
    'flex justify-around items-center p-2',
    classNameSocialMediaContainerInquiry,
  ];

  return (
    <div className={containerBtnInquiry}>
      {showMediaSocialShare && (
        <SocialMediaShare className={classNameSocialMediaAssigned.join(' ')} iconType="icon" />
      )}
      <button className={classNameAssigned.join(' ')} disabled={disabled} style={style} {...props}>
        {children ? children : <Fragment />}
      </button>
    </div>
  );
};

BtnInquiry.defaultProps = {
  inverted: false,
  disabled: false,
  showMediaSocialShare: false,
  block: false,
  size: 'large',
  colorSocialMediaContainer: '',
  classNameSocialMediaContainerInquiry: '',
  containerBtnInquiry: '',
  iconType: 'fill',
  className: '',
  onClick: () => {},
  style: {},
};

export default BtnInquiry;
