import { InquiryForm } from 'ui/components/molecules';

const DetailPromoInquiryFormSection = () => {
  return (
    <section className="bg-reliableBlack20 p-8">
      <h4 className="text-xl font-bold text-reliableBlack90 mb-4">
        Dapatkan Penawaran Terbaik untuk Pemesanan Toyota Baru
      </h4>
      <p className="text-base text-reliableBlack90 mb-8">
        Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan
        segera menghubungi Anda.
      </p>
      <InquiryForm
        labelStyle={'text-[#666666]'}
        containerClassForm={'bg-reliableBlack20'}
        buttonContainer={'flex justify-end'}
        innerButton={'!w-auto !bg-black rounded !py-4 !px-8'}
      />
    </section>
  );
};

export default DetailPromoInquiryFormSection;
