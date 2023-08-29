import { useState } from 'react';
import { Modal } from 'ui/components/atoms';
import { InquiryForm, OtpForm } from 'ui/components/molecules';

const DetailPromoInquiryFormSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inquiryData, setInquiryData] = useState(null);

  const handleSubmit = (payload) => {
    setInquiryData(payload);

    // Open otp form modal
    setOpenModal(true);
  };

  return (
    <>
      <section className="bg-reliableBlack5 p-5">
        <h4 className="text-xl font-bold uppercase text-reliableBlack90 mb-1">Minta Penawaran</h4>
        <p className="text-sm text-reliableBlack90 mb-6">
          Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan
          segera menghubungi Anda.
        </p>
        <InquiryForm
          labelStyle={'lg:text-reliableBlack70'}
          inputClassName={'lg:bg-white lg:border-b lg:border-[#5F5F5F]'}
          containerClassForm={'bg-inherit'}
          onSubmit={handleSubmit}
        />
      </section>

      {/* OTP Modal */}
      <Modal
        header={true}
        title="Masukkan Kode OTP"
        bodyClassName="px-6 py-8"
        visible={openModal}
        onClose={() => setOpenModal(false)}
      >
        <OtpForm />
      </Modal>
    </>
  );
};

export default DetailPromoInquiryFormSection;
