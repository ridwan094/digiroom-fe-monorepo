import './InquirySuccess.css';
import DetailPromoAnotherPromoSection from '../DetailPromoAnotherPromoSection';
import SuccessIcon from 'ui/components/atoms/Icons/SuccessIcon';

const InquirySuccess = () => {
  return (
    <div className="container h-full min-h-screen bg-white py-6 pt-12">
      <SuccessIcon />

      <div className="leading-5 text-center mb-12 lg:leading-9 lg:mb-16">
        <p className="text-base font-bold text-reliableBlack mb-2 lg:text-2xl">
          Terima Kasih Atas Ketertarikan Anda!
        </p>
        <p className="text-sm font-normal text-reliableBlack mb-5 lg:text-lg">
          Perwakilan sales kami akan segera menghubungi Anda dalam 1-2 hari kerja.
        </p>

        <a
          className="block w-full py-4 px-8 text-base font-bold uppercase border border-reliableBlack rounded lg:inline-block lg:w-auto lg:mx-auto"
          href="/promo"
        >
          Kembali ke Promo
        </a>
      </div>

      <div className="p-0">
        <DetailPromoAnotherPromoSection
          anotherPromo={[
            {
              title: 'Cicilan Ringan Toyota Raize',
              slug: 'cicilan-ringan-toyota-raize',
              startDate: '21 Nov 22',
              endDate: '30 Jun 23',
              coverImg: 'http://localhost:3003/images/promo-car-example.webp',
              tag: 'Trending',
            },
            {
              title: 'Cicilan Ringan Toyota Raize',
              slug: 'cicilan-ringan-toyota-raize',
              startDate: '21 Nov 22',
              endDate: '30 Jun 23',
              coverImg: 'http://localhost:3003/images/promo-car-example.webp',
              tag: null,
            },
            {
              title: 'Cicilan Ringan Toyota Raize',
              slug: 'cicilan-ringan-toyota-raize',
              startDate: '21 Nov 22',
              endDate: '30 Jun 23',
              coverImg: 'http://localhost:3003/images/promo-car-example.webp',
              tag: null,
            },
            {
              title: 'Cicilan Ringan Toyota Raize',
              slug: 'cicilan-ringan-toyota-raize',
              startDate: '21 Nov 22',
              endDate: '30 Jun 23',
              coverImg: 'http://localhost:3003/images/promo-car-example.webp',
              tag: null,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default InquirySuccess;
