import React from 'react';
import { InfoDigiroom, LogoDigiroomCircle } from '../../molecules';

const SocialMediaInfo = () => {
  return (
    <div className="flex p-4 gap-6 items-start bg-[#EEEEEE]">
      <LogoDigiroomCircle />
      <InfoDigiroom />
    </div>
  );
};

export default SocialMediaInfo;
