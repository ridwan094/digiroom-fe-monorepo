import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';

const iconClassname = {
  fill: '',
  text: 'text',
  icon: 'rounded-full',
};

const SocialMediaShare = ({ iconType, className = '' }) => {
  const sosialMediaWrapper = ['border-2 border-black p-2', iconClassname[iconType]];

  return (
    <div className={className}>
      <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
        <FaTwitter size={20} color="#000" />
      </a>
      <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
        <FaFacebookF size={20} color="#000" />
      </a>
      <a href="/" rel="noreferrer" target="_blank" className={sosialMediaWrapper.join(' ')}>
        <PiLinkSimpleBold size={20} color="#000" />
      </a>
    </div>
  );
};

SocialMediaShare.defaultProps = {
  iconType: 'fill',
  className: '',
  onClick: () => {},
  // style: {},
};

export default SocialMediaShare;
