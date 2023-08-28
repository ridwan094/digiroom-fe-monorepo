import React, { useMemo, useState } from 'react';
import { Input, Modal, BtnConfirm } from '../../atoms';
import Text from '../../atoms/Text';
import { MdClose } from 'react-icons/md';
import OtpForm from '../OtpForm';
import { success, logo } from '../../../assets/images';

export default function OfferCard({
  containerClassForm,
  containerInputClassName,
  buttonContainer,
  innerButton,
  close,
}) {
  const [modals, setModals] = useState({
    inquiry: true,
    otp: false,
    success: false,
  });
  const [submit, setSubmit] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e, category) => {
    const newValue = e.target.value;
    setSubmit((prevState) => ({
      ...prevState,
      [category]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Currently only for handling changing Modals
    const currentModal = Object.keys(modals).find((modal) => modals[modal]);

    if (currentModal === 'success') {
      close();
    } else {
      const modalKeys = Object.keys(modals);
      const currentModaIndex = modalKeys.indexOf(currentModal);

      if (currentModaIndex !== -1 && currentModaIndex < modalKeys.length - 1) {
        const nextModal = modalKeys[currentModaIndex + 1];
        setModals((prevModal) => ({
          ...prevModal,
          [currentModal]: false,
          [nextModal]: true,
        }));
      }
    }
  };

  const checkForm = useMemo(
    () => !submit.fullname || !submit.email || !submit.phoneNumber,
    [submit]
  );

  return (
    <>
      {Object.keys(modals).map((modalKey) => (
        <Modal
          key={modalKey}
          visible={modals[modalKey]}
          header={true}
          onClose={close}
          bodyClassName="bg-gray-10 p-6"
          className={
            modalKey === 'inquiry'
              ? '!h-[545px] !w-[622px]'
              : modalKey === 'otp'
              ? '!h-[545px] !w-[622px]'
              : '!h-fit !w-[622px]'
          }
          title={
            modalKey === 'inquiry'
              ? 'MINTA PENAWARAN'
              : modalKey === 'otp'
              ? 'MASUKAN KODE OTP'
              : 'BERHASIL'
          }
        >
          {modalKey === 'inquiry' && (
            <form className={containerClassForm} onSubmit={handleSubmit}>
              <div className="mb-6">
                <Input
                  type="text"
                  labelClassName="block text-[#666666] text-[14px] font-medium mb-[10px]"
                  onChange={(e) => handleChange(e, 'fullname')}
                  value={submit.fullname}
                  label="Nama Lengkap"
                  placeholder="Tulis Nama Lengkap Anda"
                  size="medium"
                  inputClassName={'h-[52px]'}
                  containerClassName={containerInputClassName}
                />
              </div>

              <div className="mb-6">
                <Input
                  type="email"
                  labelClassName="block text-[#666666] text-[14px] font-medium mb-[10px]"
                  onChange={(e) => handleChange(e, 'email')}
                  value={submit.email}
                  label="Email"
                  placeholder="Tulis Email Anda"
                  size="medium"
                  inputClassName={'h-[52px]'}
                  containerClassName={containerInputClassName}
                />
              </div>

              <div className="mb-12">
                <Input
                  type="text"
                  labelClassName="block text-[#666666] text-[14px] font-medium mb-[10px]"
                  onChange={(e) => handleChange(e, 'phoneNumber')}
                  value={submit.phoneNumber}
                  label="Phone"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="+62 -"
                  size="medium"
                  inputClassName={'h-[52px]'}
                  containerClassName={containerInputClassName}
                />
              </div>

              <div className={`${buttonContainer}`}>
                <BtnConfirm
                  className={`${
                    checkForm ? 'bg-reliableBlack20' : 'bg-supportiveRed'
                  } ${innerButton} w-full bg-reliableBlack text-white py-6 px-8 rounded`}
                  size="large"
                  iconType="icon"
                  disabled={checkForm}
                >
                  <Text.Head4 className="text-base font-bold uppercase">Submit</Text.Head4>
                </BtnConfirm>
              </div>
            </form>
          )}

          {modalKey === 'otp' && (
            <div className="w-full h-full flex flex-col bg-white">
              <div className="">
                <p className="text-sm max-w-[400px] text-justify text-reliableBlack">
                  Masukkan kode 6-digit yang kami telah kirimkan ke Whatsapp{' '}
                  <span className="font-bold">+62-12345678910</span>
                </p>
                <OtpForm
                  containerClassForm={'w-full mt-6'}
                  containerInputClassName={'w-[50px] h-[50px] w-full'}
                  buttonContainer={'fixed z-50 w-full left-0 bottom-4 px-6 rounded'}
                  inputClassName={'text-center'}
                  onSubmit={handleSubmit}
                />
                <p className="text-lg max-w-[328px] text-justify mt-6 text-reliableBlack font-semibold">
                  03:00
                </p>
                <p className="text-[14px] max-w-[328px] text-justify mt-7 text-reliableBlack">
                  Belum dapat kode?{' '}
                  <a href="#">
                    <span className="font-medium text-blue-500">Kirim ulang</span>
                  </a>
                </p>
                <p className="text-sm max-w-[328px] text-justify mt-3 text-reliableBlack">
                  Salah nomor handphone?{' '}
                  <a href="#">
                    <span className="font-medium text-blue-500">Ganti nomor</span>
                  </a>
                </p>
              </div>
            </div>
          )}

          {modalKey === 'success' && (
            <div>
              <div className="relative">
                <div className="flex justify-center">
                  <img
                    className="w-[125px] relative z-10"
                    src={success.src}
                    alt="logo"
                    loop={false}
                  />
                </div>
                <div className="absolute w-full h-full inset-0 bg-[#4CC0AD] mix-blend-hue z-20"></div>
              </div>
              <p className="text-lg font-bold mt-7 text-center text-reliableBlack">
                Terima kasih atas pertanyaan dan ketertarikan Anda!
              </p>
              <p className="text-md text-center mt-1 text-reliableBlack">
                Perwakilan sales kami akan segera menghubungi Anda.
              </p>
              <div className="flex justify-center w-full mt-3">
                <p
                  className="text-md text-center w-fit text-[#4CC0AD] font-bold mt-4 text-reliableBlack cursor-pointer"
                  onClick={handleSubmit}
                >
                  SELESAI
                </p>
              </div>
            </div>
          )}
        </Modal>
      ))}
    </>
  );
}
