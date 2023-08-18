import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdArrowForward, MdClose } from 'react-icons/md';
import { Layout } from 'ui/components/templates';
import { BtnConfirm, Text } from 'ui/components/atoms';
import { BreadCrumbs, InquiryForm, OtpForm } from 'ui/components/molecules';
import {
  DetailPromoAnotherPromoSection,
  DetailPromoBodySection,
  DetailPromoHeroSection,
  DetailPromoInquiryFormSection,
  SocialMediaLinksSection,
} from 'ui/components/organism';

const PromoDetailPage = ({ slug, promo }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);

  const router = useRouter();

  return (
    <Layout>
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Col 1 */}
        <div>
          {/* Detail Promo Hero Section */}
          <DetailPromoHeroSection />

          {/* Detail Promo Body Section */}
          <DetailPromoBodySection promo={promo} />

          {/* Another promo */}
          <DetailPromoAnotherPromoSection anotherPromo={promo.anotherPromo} />

          {/* Social media links */}
          <SocialMediaLinksSection />
        </div>

        {/* Col 2 */}
        <div className="hidden my-4 md:mt-8 md:block">
          <div className="container">
            <DetailPromoInquiryFormSection />
          </div>
        </div>
      </div>

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
      <div
        className={`${
          formOpen || otpOpen ? 'hidden' : 'block'
        } fixed w-full z-50 bottom-16 md:hidden`}
      >
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

      {/* Form inquiry open */}
      {formOpen && (
        <div className="fixed flex-col z-10 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen">
          <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              Minta Penawaran
            </Text.Head6>
            <button
              className="text-black"
              onClick={() => {
                setFormOpen(false);
              }}
            >
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

      {/* OTP */}
      {otpOpen && (
        <div className="fixed flex-col z-10 top-0 left-0 flex items-center justify-center w-full h-full bg-white">
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
              <p className="text-sm max-w-[328px] text-justify px-4 text-reliableBlack">
                Masukkan kode 6-digit yang kami telah kirimkan ke Whatsapp{' '}
                <span className="font-bold">+62-12345678910</span>
              </p>
              <OtpForm
                containerClassForm={'w-full px-4 mt-14'}
                containerInputClassName={'w-[50px] h-[50px] w-full'}
                buttonContainer={'fixed z-50 w-full left-0 bottom-0'}
                inputClassName={'text-center'}
                onSubmit={() => router.push('/promo/inquiry/success')}
              />

              <p className="text-[14px] max-w-[328px] text-justify px-4 mt-14 text-reliableBlack">
                InquirySuccess Belum dapat kode?{' '}
                <a href="#">
                  <span className="font-medium text-blue-500">Kirim ulang</span>
                </a>
              </p>
              <p className="text-sm max-w-[328px] text-justify px-4 mt-6 text-reliableBlack">
                Salah nomor handphone?{' '}
                <a href="#">
                  <span className="font-medium text-blue-500">Ganti nomor</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
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
    image: 'http://localhost:3002/images/promo-car-example.webp',
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
