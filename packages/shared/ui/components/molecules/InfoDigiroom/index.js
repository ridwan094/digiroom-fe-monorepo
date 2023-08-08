import React from 'react';
import { TiSocialTwitterCircular, TiSocialFacebookCircular } from 'react-icons/ti';
import { TfiYoutube } from 'react-icons/tfi';
import { SiInstagram } from 'react-icons/si';

const InfoDigiroom = () => {
  return (
    <div className="text-reliableBlack">
      <h6 className="text-xs font-bold mb-2">Auto2000 Digiroom</h6>
      <p className="text-[10px] mb-2">
        The largest Toyota dealer in Indonesia serving a network of sales, maintenance, repair and
        supply of Toyota spare parts throughout Indonesia.
      </p>
      <p className="mb-2 text-xs font-medium">Meet us on Social Media</p>
      <div className="flex text-base gap-1 items-center">
        <a href="https://www.facebook.com/Auto2000official" target="_blank">
          <TiSocialFacebookCircular className="text-4xl" />
        </a>
        <a href="https://twitter.com/Auto2000ID" target="_blank">
          <TiSocialTwitterCircular className="text-4xl" />
        </a>
        <a href="https://www.instagram.com/auto2000id/" target="_blank">
          <SiInstagram className="text-2xl w-9" />
        </a>
        <a href="https://www.youtube.com/user/auto2000csr" target="_blank">
          <TfiYoutube className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default InfoDigiroom;
