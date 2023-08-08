import React, { useEffect, useState } from 'react';
import {
  Accordion,
  BreadCrumbs,
  Button,
  ButtonConfirm,
  Card,
  Carousel,
  InquiryForm,
  InquirySuccess,
  Layout,
  OtherPromo,
  OtpForm,
  Tag,
  Text,
} from 'ui';
import { MdClose, MdOutlineArrowBack, MdShare } from 'react-icons/md';
import Image from 'next/image';
import Head1 from 'ui/components/atoms/Text/Head1';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const faqs = [
  {
    title: 'Syarat dan Ketentuan',
    content: `*Cicilan terlampir adalah untuk OTR DKI Jakarta dan untuk wilayah lain akan berbeda.`,
  },
];

const items = [
  { src: '/images/detailCarCard.png' },
  { src: '/images/detailCarCard.png' },
  { src: '/images/detailCarCard.png' },
];
function DetailPromoPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Menggunakan fungsi window.matchMedia untuk mendeteksi ukuran layar
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    // Tentukan status awal apakah mobile atau desktop
    setIsMobile(mediaQuery.matches);

    // Tambahkan event listener untuk mendengarkan perubahan ukuran layar
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  function generateSlides(length = 10, sig = 0) {
    return Array.from({ length }).map((value, index) => {
      index = sig || index;

      return {
        src: `https://source.unsplash.com/random/800x450?sig=${index}`,
        alt: `Image ${index + 1}`,
        date: `2${index + 1} November 2023 - 2${index + 1} January 2024`,
        headline: 'Toyota Raize Light Installments',
      };
    });
  }
  return (
    <>
      {/* INQUIRY */}
      {formOpen && (
        <div className="fixed flex-col z-10 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen">
          <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
            <Text.Head5 className="text-black">MINTA PENAWARAN</Text.Head5>
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
            <p className="text-xs text-justify px-4 pt- text-reliableBlack">
              Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan
              segera menghubungi Anda.
            </p>
            <InquiryForm
              containerClassForm={'w-full h-full mb-10'}
              containerInputClassName={'px-4 my-6'}
              inputClassName={'bg-black'}
              buttonContainer={'absolute w-full bottom-16'}
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
            <Text.Head5 className="text-black">MINTA PENAWARAN</Text.Head5>
            <button
              className="text-black"
              onClick={() => {
                setOtpOpen(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="w-full h-full flex justify-center flex-col bg-white">
            <div className="-mt-32">
              <p className="text-[14px] max-w-[328px] text-justify px-4 text-reliableBlack">
                Masukkan kode 6-digit yang kami telah kirimkan ke Whatsapp{' '}
                <span className="font-bold">+62-12345678910</span>
              </p>
              <OtpForm
                containerClassForm={'w-full px-4 mt-14'}
                containerInputClassName={'w-[50px] h-[50px] w-full'}
                buttonContainer={'absolute w-full bottom-16 left-0'}
                inputClassName={'text-center'}
                onSubmit={() => {
                  setSuccess(true);
                }}
              />
              {success && (
                <div className="absolute px-4 transform -translate-y-1/2">
                  <InquirySuccess onClick={() => setSuccess(false)} />
                </div>
              )}

              <p className="text-[14px] max-w-[328px] text-justify px-4 mt-14 text-reliableBlack">
                Belum dapat kode?{' '}
                <a href="#">
                  <span className="underline text-blue-500">Kirim ulang</span>
                </a>
              </p>
              <p className="text-[14px] max-w-[328px] text-justify px-4 mt-6 text-reliableBlack">
                Salah nomor handphone?{' '}
                <a href="#">
                  <span className="underline text-blue-500">Ganti nomor</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      <Layout>
        <div className="px-2 py-2 md:px-16">
          {!isMobile ? (
            <BreadCrumbs />
          ) : (
            <Link href="/">
              <MdOutlineArrowBack size={24} color="black" />
            </Link>
          )}
        </div>
        <Image
          className="block md:hidden"
          src="/images/detailPromoImage2.png"
          alt="detailPromoImage"
          width={984}
          height={1}
        />
        <div className="flex mt-0 md:mt-16 gap-4 px-4 md:px-16">
          <div className="flex flex-col">
            <Tag className="absolute md:hidden top-[75px] right-0 rounded-bl lg:px-[12px] py-[10px]">
              <span className="font-bold text-reliableBlack90 lg:text-base">Trending</span>
            </Tag>
            <Image
              className="hidden md:block"
              src="/images/detailPromoImage2.png"
              alt="detailPromoImage"
              width={984}
              height={1}
            />
            <div className="flex mt-6 justify-between items-center">
              <h1 className="text-2xl md:text-4xl text-reliableBlack font-bold">
                Promo Flash Deals Vios Bundle{' '}
              </h1>
              <Button type="button" variant={'bg-reliableBlack10'}>
                <MdShare size={24} color="black" />
              </Button>
            </div>
            <h1 className="text-black mt-6 font-semibold">Periode Promosi</h1>
            <div className="flex items-center gap-4">
              <h5 className="text-black">01 Jun 2023 - 31 Jul 2023</h5>
              <h5 className="text-black bg-[#BDF2EF] rounded px-2 py-0.5">3 Hari Lagi!</h5>
            </div>
            <h4 className="text-xl mt-6 mb-2 font-semibold text-black">Detail Promosi</h4>
            <p className="text-black">
              Hi AutoFamily! Untuk Anda para keluarga modern, mobil Calya cocok banget untuk Anda
              nih. Mobil Calya yang memiliki ruang kabin yang lega bisa menampung 7 penumpang
              sekaligus loh. Tak hanya itu, mobil Calya juga dilengkapi dengan Fitur Entertainment
              yang lengkap. Yuk bawa pulang Toyota Calya untuk keluarga tersayang sekarang dengan
              cicilan mulai dari 3.3 jutaan/bulan saja! <br /> Jangan lupa untuk isi formulir di
              bawah ini untuk dapatkan penawarannya sekarang!
            </p>
            <h4 className="mt-8 text-black font-semibold text-xl">Promo Ini Berlaku Untuk</h4>
            {/* Card checkout */}
            <div className="mt-4 px-4 bg-[#F8F8F8]">
              <div className="flex flex-col justify-center gap-6">
                <div className="flex">
                  <Image width={140} height={70} src="/images/cardCarCheckout.png" alt="foto" />
                  <h4 className="text-lg text-black font-bold ml-4">
                    All New Vios 1.5 E M/T <br />{' '}
                    <span className="font-light mt-4">Rp. 322.500,000</span>
                  </h4>
                </div>
                <div className="flex">
                  <Image width={140} height={70} src="/images/spontan.png" alt="foto" />
                  <h4 className="text-lg text-black font-bold ml-4">
                    Paket Spontan C 3 Tahun Vios M/T <br />{' '}
                    <span className="font-light mt-4">Rp. 4.000,000</span>
                  </h4>
                </div>
              </div>
              <h2 className="text-lg mt-6 mb-1 text-black font-bold">Harga Bundling</h2>
              <h2 className="text-md text-black line-through">Rp 326.000.000</h2>
              <h2 className="text-xl -mt-2 text-supportiveRed font-bold">Rp 322.500.000</h2>
              <Link href="/checkout">
                <Button
                  className="px-7 py-4 w-full mt-6 mb-4"
                  type="button"
                  variant={'bg-supportiveRed'}
                >
                  masukkan ke keranjang
                </Button>
              </Link>
            </div>
            {/* Detail Promo Carousel */}
            <div className="max-w-sm hidden md:block">
              <Carousel items={items} />
              <h4 className="text-xl font-semibold text-black">CALYA</h4>
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-black">Harga Mulai</h4>
                <p className="text-supportiveRed">Rp.164.700.000</p>
              </div>
            </div>
          </div>
          <div className="max-w-lg hidden md:block ">
            <div className="bg-reliableBlack20 px-8 py-8">
              <h4 className={'text-xl font-bold text-reliableBlack90 max-w-sm'}>
                Dapatkan Penawaran Terbaik untuk Pemesanan Toyota Baru
              </h4>
              <h4 className="text-xl text-reliableBlack text-justify mt-4">
                Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami
                akan segera menghubungi Anda.
              </h4>
            </div>
            <InquiryForm
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack20 px-8 pb-8'}
            />
          </div>
        </div>

        {/* Syarat dan ketentuan */}
        <div className="px-4 my-7 md:px-16 md:my-8 text-reliableBlack ">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title}>
              {faq.content}
            </Accordion>
          ))}
        </div>
        {/* Other Promo */}
        <OtherPromo
          perPage={2}
          arrows={false}
          pagination={true}
          items={generateSlides()}
          title="Lihat Promo Lainnya"
          classNameContainerOtherPromo="w-full bg-reliableBlack10 px-4 md:px-16 pt-[50px] pb-[30px] flex flex-col justify-center gap-4 mb-20"
        />
        <div className="flex justify-center pb-4 px-4">{!isMobile ? '' : <BreadCrumbs />}</div>
        <div
          className={`${
            formOpen || otpOpen ? 'hidden' : 'block'
          } fixed z-10 md:hidden bottom-16 w-full`}
        >
          <div class="flex items-center justify-between mt-4">
            <ButtonConfirm
              block={true}
              className={'bg-supportiveRed'}
              size="large"
              variant={true}
              iconType="icon"
              onClick={() => {
                setOtpOpen(true);
              }}
            >
              <div className="flex justify-end items-center gap-2">
                <div className="flex flex-col text-end">
                  <Text.Head4>SAYA TERTARIK</Text.Head4>
                  <span className="text-md font-normal">
                    Dapatkan penawaran terbaik dari Auto2000
                  </span>
                </div>
                <FiArrowRight size={34} />
              </div>
            </ButtonConfirm>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DetailPromoPage;
