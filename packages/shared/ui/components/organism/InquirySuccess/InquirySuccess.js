import SuccessIcon from 'ui/components/atoms/Icons/SuccessIcon';
import './InquirySuccess.css';

const InquirySuccess = () => {
  return (
    <div className="h-full min-h-screen bg-white p-6 pt-24">
      <SuccessIcon />

      <div className="leading-5 text-center lg:leading-9">
        <p className="text-base font-bold text-reliableBlack mb-4 lg:text-lg">
          Terima Kasih Atas Ketertarikan Anda!
        </p>
        <p className="text-sm font-regular text-reliableBlack">
          Perwakilan sales kami akan segera menghubungi Anda dalam 1-2 hari kerja.
        </p>

        <div className="mt-8">
          <a
            className="block w-full p-4 text-base font-bold uppercase border border-reliableBlack"
            href="/promo"
          >
            Lihat Promo Lainnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default InquirySuccess;
