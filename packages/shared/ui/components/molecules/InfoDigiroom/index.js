import React from 'react';
import { digiroom } from '../../../assets/images';

const InfoDigiroom = () => {
  return (
    <div className="text-reliableBlack bg-[#f4f4f4] py-3 lg:py-11">
      <div className="flex justify-center items-center mx-4 lg:mx-[100px]">
        <div className="mr-2 lg:mr-5">
          <img className="w-[450px] lg:w-40" src={digiroom.src} alt="digiroom logo" />
        </div>
        <div className="block">
          <h2 className="text-sm lg:text-xl font-bold mb-1">AUTO2000 DIGIROOM</h2>
          <p className="text-xs lg:text-xl">
            Dealer Toyota terbesar di Indonesia yang melayani jaringan jasa penjualan, perawatan,
            perbaikan dan penyediaan suku cadang Toyota yang terbesar di seluruh Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoDigiroom;
