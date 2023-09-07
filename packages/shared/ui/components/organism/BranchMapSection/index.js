import Link from 'next/link';
import { useState } from 'react';
import { BranchFilter, BranchCard } from '../../molecules';
import { MdClose } from 'react-icons/md';
import { Icons, Text } from '../../atoms';

const BranchMapSection = ({ onClickClose, onClickDirection }) => {
  const [listBranchCard, setListBranchCard] = useState(Array(5).fill(null));

  return (
    <section className="my-4 lg:mt-8">
      <div className="md:grid grid-cols-4 gap-6">
        {listBranchCard.map((items, index) => {
          return (
            <>
              {index === 2 ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.329115166012!2d106.8203415!3d-6.1866157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59ce5799e8f%3A0x1f6ab4a461513f5e!2sToyota%20Auto2000%20Wahid%20Hasyim!5e0!3m2!1sen!2ssg!4v1693971143483!5m2!1sen!2ssg"
                  className="row-span-2 col-span-2"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <BranchCard key={index} />
              )}
            </>
          );
        })}
      </div>

      <div className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen md:hidden lg:hidden">
        <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
          <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
            AUTO JAKARTA PUSAT
          </Text.Head6>
          <button className="text-black" onClick={onClickClose}>
            <MdClose size={24} />
          </button>
        </div>
        <div className="overflow-y-auto h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.329115166012!2d106.8203415!3d-6.1866157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f59ce5799e8f%3A0x1f6ab4a461513f5e!2sToyota%20Auto2000%20Wahid%20Hasyim!5e0!3m2!1sen!2ssg!4v1693971143483!5m2!1sen!2ssg"
            className="row-span-2"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
            onClick={onClickDirection}
          >
            <a href="#" className="text-xs text-reliableBlack90">
              PETUNJUK ARAH
            </a>
            <Icons.ArrowSplit fill="#CE181E" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BranchMapSection;
