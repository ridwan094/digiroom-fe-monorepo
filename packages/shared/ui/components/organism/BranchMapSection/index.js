import Link from 'next/link';
import { useState } from 'react';
import { BranchFilter, BranchCard } from '../../molecules';
import { MdClose } from 'react-icons/md';
import { Icons, Text } from '../../atoms';

const BranchMapSection = () => {
  const [handlerViewMap, setHandlerViewMap] = useState(false);
  const [listBranchCard, setListBranchCard] = useState(Array(12).fill(null));

  // Handler
  const handlerClickViewMap = () => {
    setHandlerViewMap(!handlerViewMap);
  };

  return (
    <section className="my-4 lg:mt-8 container">
      <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
        DEALER DAN BENGKEL TOYOTA DI JAKARTA PUSAT
      </h2>
      <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
        Selamat datang di Auto2000 Jakarta Pusat Dapatkan informasi terkait promosi terbaru, alamat,
        jam operasional di Auto2000 jakarta Pusat terbaru disini
      </p>

      <div className="mb-9">
        <BranchFilter onClickHandlerViewMap={handlerClickViewMap} />
      </div>
      <div className="md:grid grid-cols-3 gap-6">
        {listBranchCard.map((items, index) => {
          return (
            <>
              {handlerViewMap && index === 2 ? (
                <iframe
                  className="row-span-2"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ92pXbcOV6IkRuasOtcOeKEY&key=YOUR_API_KEY"
                />
              ) : (
                <BranchCard key={index} />
              )}
            </>
          );
        })}
      </div>

      {/* Modal Mobile Map */}
      {handlerViewMap && (
        <div className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen md:hidden lg:hidden">
          <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              AUTO JAKARTA PUSAT
            </Text.Head6>
            <button
              className="text-black"
              onClick={() => {
                setHandlerViewMap(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="overflow-y-auto h-full">
            {/* Map */}
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ92pXbcOV6IkRuasOtcOeKEY&key=YOUR_API_KEY"
            />
          </div>
          <div className="flex flex-col w-full justify-between px-4 py-6 border-t border-t-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              AUTO2000 CEMPAKA PUTIH
            </Text.Head6>
            <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-5 lg:text-base">
              Jl. Letjen, Suprapto 63, Jakarta Pusat, 10520
            </p>
            <button
              className="text-black bg-reliableBlack10 flex items-center justify-center py-4 gap-2"
              onClick={() => {
                setHandlerViewMap(false);
              }}
            >
              <a href="#" className="text-xs text-reliableBlack90">
                PETUNJUK ARAH
              </a>
              <Icons.ArrowSplit fill="#CE181E" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default BranchMapSection;
