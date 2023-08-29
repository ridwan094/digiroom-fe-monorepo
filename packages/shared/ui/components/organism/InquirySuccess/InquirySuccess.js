import './InquirySuccess.css';
import { iconSuccessInquiry } from '../../../assets/images';
import DetailPromoAnotherPromoSection from '../DetailPromoAnotherPromoSection';

const InquirySuccess = () => {
  const promo = {
    anotherPromo: [
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
    ],
  };
  return (
    <div className="h-full min-h-screen bg-white lg:p-6 p-3 pt-[20px]">
      <img src={iconSuccessInquiry.src} className="mx-auto" alt="Auto2000 icon success inquiry" />

      <div className="leading-5 text-center lg:leading-9">
        <p className="text-base font-bold text-reliableBlack mb-2 lg:text-lg">
          Terima kasih atas pertanyaan dan ketertarikan Anda!
        </p>
        <p className="text-sm font-regular text-reliableBlack">
          Perwakilan AUTO2000 kami akan segera menghubungi Anda dalam 1-2 hari kerja.
        </p>

        <div className="mt-8 mb-[80px] hidden lg:block">
          <a
            className="p-4 rounded-[4px] text-base text-reliableBlack font-bold uppercase border border-reliableBlack80"
            href="/promo"
          >
            kembali KE Promo
          </a>
        </div>

        {/* Additional content */}
        <div className="lg:container lg:mt-0 mt-[62px] lg:mb-0 mb-[60px]">
          {/* Another promo */}
          <DetailPromoAnotherPromoSection anotherPromo={promo?.anotherPromo} />
        </div>
      </div>
      <div className="lg:hidden lg:mb-0 mb-[30px]">
        <a href="/">
          <div className="p-4 rounded-[4px] text-center text-base w-full text-reliableBlack font-bold uppercase border border-reliableBlack80">
            kembali ke beranda
          </div>
        </a>
      </div>
    </div>
  );
};

export default InquirySuccess;
