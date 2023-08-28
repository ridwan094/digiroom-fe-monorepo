import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdClose } from 'react-icons/md';
import { Text } from 'ui/components/atoms';
import { InquiryForm, OtpForm } from 'ui/components/molecules';

const InquiryFormMobileSection = ({ formOpen, onClose }) => {
  const [otpOpen, setOtpOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      {/*Inquiry form open */}
      {formOpen && (
        <div className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen">
          <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              Minta Penawaran
            </Text.Head6>
            <button className="text-black" onClick={onClose}>
              <MdClose size={24} />
            </button>
          </div>
          <div className="overflow-y-auto h-full pt-4">
            <p className="text-sm px-4 text-reliableBlack">
              Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan
              segera menghubungi Anda.
            </p>
            <InquiryForm
              containerClassForm={'w-full h-full'}
              containerInputClassName={'px-4 my-6'}
              containerDropdown={'px-4 my-6 text-[#666666] font-semibold'}
              labelStyle={'text-[#666666]'}
              inputClassName={''}
              buttonContainer={'fixed w-full left-0 bottom-0 pt-8'}
              onSubmit={() => {
                setOtpOpen(true);
              }}
            />
          </div>
        </div>
      )}

      {/* OTP form open */}
      {otpOpen && (
        <div className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-screen bg-white">
          <div className="flex w-full justify-between p-4 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              Masukkan Kode OTP
            </Text.Head6>
            <button
              className="text-black"
              onClick={() => {
                setOtpOpen(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="w-full h-full flex flex-col bg-white">
            <div className="py-8">
              <OtpForm
                containerClassForm={'w-full px-4 mt-14'}
                containerInputClassName={'w-[50px] h-[50px] w-full'}
                buttonContainer={'fixed z-50 w-full left-0 bottom-0'}
                inputClassName={'text-center'}
                onSubmit={() => router.push('/promo/inquiry/success')}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryFormMobileSection;
