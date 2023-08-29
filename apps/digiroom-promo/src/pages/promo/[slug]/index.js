import { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { BtnConfirm } from 'ui/components/atoms';
import { BreadCrumbs } from 'ui/components/molecules';
import {
  InquiryFormMobileSection,
  DetailPromoAnotherPromoSection,
  DetailPromoBodySection,
  DetailPromoHeroSection,
  DetailPromoInquiryFormSection,
  SocialMediaLinksSection,
} from 'ui/components/organism';

const PromoDetailPage = ({ slug, promo }) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* Breadcrumb for web screen */}
      <BreadCrumbs
        isMobileScreen={false}
        items={[
          { name: 'Home', path: '/' },
          { name: 'Promo', path: '/promo' },
          { name: promo.title },
        ]}
      />

      {/* Main content */}
      <div className="lg:container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Col 1: Detail Promo */}
          <div>
            {/* Detail Promo Hero Section */}
            <DetailPromoHeroSection image={promo.image} />

            {/* Detail Promo Body Section */}
            <DetailPromoBodySection promo={promo} />
          </div>

          {/* Col 2: Inquiry from section for desktop */}
          <div className="container hidden md:mt-4 md:block lg:p-0">
            <DetailPromoInquiryFormSection />
          </div>
        </div>
      </div>

      {/* Additional content */}
      <div className="container">
        {/* Another promo */}
        <DetailPromoAnotherPromoSection anotherPromo={promo.anotherPromo} />
      </div>

      {/* Social media links */}
      <SocialMediaLinksSection />

      {/* Breadcrumb for mobile screen */}
      <BreadCrumbs
        isMobileScreen={true}
        items={[
          { name: 'Home', path: '/' },
          { name: 'Promosi', path: '/promo' },
          { name: promo.title },
        ]}
      />

      {/* CTA Button for mobile screen */}
      <div className="fixed w-full z-50 bottom-16 md:hidden">
        <BtnConfirm
          block={true}
          className="bg-supportiveRed text-white"
          size="large"
          iconType="icon"
          onClick={() => {
            setFormOpen(true);
          }}
        >
          <div className="flex justify-end items-center gap-3">
            <div className="flex flex-col text-end">
              <p className="text-base font-bold uppercase">Saya Tertarik</p>
              <p className="text-xs font-medium">Dapatkan penawaran terbaik dari Auto2000</p>
            </div>
            <MdArrowForward size={20} />
          </div>
        </BtnConfirm>
      </div>

      {/* Inquiry form mobile section */}
      <div className="block lg:hidden">
        <InquiryFormMobileSection formOpen={formOpen} onClose={() => setFormOpen(false)} />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  // Fetch article by slug
  const promo = {
    title: 'Paket Bunga 0% Toyota Alphard',
    slug: 'cicilan-ringan-toyota-raize',
    content: `
    <p>Hey AutoFamily!</p>
    <p>Mulai perjalanan elegan yang penuh dengan kenyamanan bersama Toyota New Alphard. Dengan berbagai fitur keselamatan (safety sense) seperti Pre-Collusion System, Adaptive Cruise Control, Lane Department Alert, Rear Cross Traffic Alert, Digital Rear View Mirror dan AHB.</p>
    <p>Toyota New Alphard juga memiliki interior yang sangat ekslusif yang mempu memberikan nuasa perjalanan yang mewah. Miliki Toyota New Alphard di Auto2000 dan dapatkan Bunga 0% untuk tenor selama 2 tahun.*</p>
    <p>Segera miliki Toyota Impian Anda dengan mengisi formulir penawaran di bawah ini!</p>
    <p>Urusan Toyota lebih mudah dengan Auto2000 Digiroom.</p>
    `,
    rules: '*Paket terlampir adalah untuk OTR DKI Jakarta dan untuk wilayah lain akan berbeda.',
    startDate: '21 Nov 22',
    endDate: '30 Jun 23',
    image: 'detailPromoImage2.webp',
    tag: 'Best Seller',
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

  return {
    props: {
      slug,
      promo,
    },
  };
};

export default PromoDetailPage;
