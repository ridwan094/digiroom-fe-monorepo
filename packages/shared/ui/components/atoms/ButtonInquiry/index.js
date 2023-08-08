import React from 'react';
import { Fragment } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';
import { SocialMediaShare } from '../../molecules';

const iconClassname = {
  fill: '',
  text: 'text',
  icon: 'rounded-full',
};

const ButtonInquiry = ({
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
      {/* <div className={classNameSocialMediaAssigned.join(' ')}>
        <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
          <FaTwitter size={20} color="#000" />
        </a>
        <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
          <FaFacebookF size={20} color="#000" />
        </a>
        <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
          <PiLinkSimpleBold size={20} color="#000" />
        </a>
      </div> */}
      <button
        className={classNameAssigned.join(' ')}
        disabled={disabled}
        // style={style}
        {...props}
      >
        {children ? children : <Fragment />}
      </button>
    </div>
  );
};

ButtonInquiry.defaultProps = {
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
  // style: {},
};

export default ButtonInquiry;
