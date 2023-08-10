import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonInquiry, FormGroup, Text } from 'ui/components/atoms';
import Image from 'next/image';
import Layout from 'ui/components/templates/Layout';
import { FiArrowRight } from 'react-icons/fi';
import { BreadCrumbs, OtherPromo, InquiryForm } from 'ui/components/molecules';
import { MOCK_DATA } from '../../constants/news';
import { MdArrowBack, MdShare } from 'react-icons/md';
import { SocialMediaInfo } from 'ui';

const Detail = () => {
  const { searchValue } = useSelector((state) => state.example);
  const [modalForm, setModalForm] = useState(false);

  const handleInquiry = () => {
    setModalForm(!modalForm);
  };

  const handleSubmit = (value) => {
    setModalForm(!modalForm);
  };

  const generateSlides = (length = 10, sig = 0) => {
    return Array.from({ length }).map((value, index) => {
      index = sig || index;

      return {
        // src: `https://source.unsplash.com/car/800x450?sig=${index}`,
        src: `/images/detailNewsImage.webp`,
        alt: `Image ${index + 1}`,
        date: `2${index + 1} Nov 23 - 2${index + 1} Jan 24`,
        headline: 'Toyota Raize Light Installments',
      };
    });
  };

  return (
    <div className="relative">
      <Layout>
        <div className="hidden md:block border-b border-gray-100 px-16 py-1 mb-4">
          <BreadCrumbs />
        </div>
        <div className="flex md:hidden border-b px-4 border-gray-100 pb-1 pt-2 mb-4">
          <a href="/">
            <MdArrowBack size={24} color="black" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Desktop Resolutions */}
          {/* Article */}
          {/* <div className="md:flex md:px-16 mt-11 gap-6">
            <div>
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="image"
              />
              <Article data={MOCK_DATA} />
            </div>

            <div class="hidden md:block w-1/3 border-none relative flex-col pointer-events-auto bg-clip-padding bg-reliableBlack5 h-fit px-10 py-10 rounded-md text-current">
              <FormGroup
                title="Dapatkan Penawaran Terbaik untuk Pemesanan Toyota Baru"
                subTitle="Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan segera menghubungi Anda."
                containerFormGroupClass="flex flex-col gap-4 justify-between md-max-w:p-2 pb-4 text-black"
                onClose={handleInquiry}
                colorCloseIcons="bg-black"
                withcCloseIcon={false}
              />
              <div class="flex-auto overflow-y-auto w-[480px] relative">
                <InquiryForm
                  onSubmit={() => {}}
                  containerClassForm="bg-reliableBlack5 flex flex-col gap-4"
                  containerInputClassName="w-full"
                  inputClassName="text-black bg-whiteRealible8 h-10"
                />
              </div>
            </div>
          </div> */}

          <div className="flex mt-0 md:mt-8 gap-4 px-4 md:px-16">
            <div className="flex flex-col">
              <Image
                className="px-0"
                src="/images/detailNewsImage.webp"
                alt="detailPromoImage"
                width={984}
                height={520}
              />
              <div className="flex mt-6 justify-between items-center">
                <h1 className="text-2xl md:text-4xl text-reliableBlack font-bold">
                  Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli{' '}
                </h1>
              </div>
              <div className="flex mt-6 items-center gap-4">
                <h5 className="text-black">Diposting pada 19 Juli 2023</h5>
              </div>
              <p className="mt-6 text-black">
                Hi AutoFamily! Untuk Anda para keluarga modern, mobil Calya cocok banget untuk Anda
                nih. Mobil Calya yang memiliki ruang kabin yang lega bisa menampung 7 penumpang
                sekaligus loh. Tak hanya itu, mobil Calya juga dilengkapi dengan Fitur Entertainment
                yang lengkap. Yuk bawa pulang Toyota Calya untuk keluarga tersayang sekarang dengan
                cicilan mulai dari 3.3 jutaan/bulan saja! <br /> Jangan lupa untuk isi formulir di
                bawah ini untuk dapatkan penawarannya sekarang!
              </p>
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
          {/* Other Promo */}
          <OtherPromo
            perPage={4}
            arrows={false}
            pagination={false}
            items={generateSlides()}
            title="Artikel Serupa"
            classNameContainer="w-full px-4 md:px-16 flex flex-col justify-center mb-20"
            // padding={{ right: '2rem' }}
            // classNameContainer="px-4 md:px-0"
            gap="1rem"
            // title="OTHER PROMOTIONS"
            // block
          />
        </div>

        {/* Breadcrumb => Mobile Resolutions */}
        <div className="px-4 md:hidden sm:hidden pb-5">
          <BreadCrumbs />
        </div>

        {/* Modal => Form Inquiry Mobile Resolutions */}
        {modalForm ? (
          <div
            class="z-40 fixed top-0 left-0 bottom-0 w-full h-full overflow-x-hidden overflow-y-auto"
            id="exampleModalScrollable"
            tabindex="-1"
            aria-labelledby="exampleModalScrollableLabel"
            aria-hidden="true"
          >
            <div class="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <FormGroup
                title="INQUIRY"
                onClose={handleInquiry}
                colorCloseIcons="bg-black"
                withcCloseIcon={true}
                containerFormGroupClass="flex items-center border-b-2 border-reliableBlack310 justify-between p-4 pb-4 text-black"
              />
              <div class="flex-auto overflow-y-auto relative">
                <InquiryForm
                  onSubmit={handleSubmit}
                  containerClassForm="bg-reliableBlack5 flex flex-col gap-4 pt-6"
                  containerInputClassName="w-full mb-4 px-8"
                  inputClassName="text-black bg-whiteRealible8 h-10"
                  containerDropdown="px-8"
                />
              </div>
            </div>
          </div>
        ) : null}
      </Layout>

      {/* Button Inquiry Mobile Resolutions */}
      <ButtonInquiry
        showMediaSocialShare={true}
        block={true}
        containerBtnInquiry="w-full absolute z-200 bottom-16 left-0 md:hidden lg:hidden"
        className="bg-supportiveRed h-20"
        classNameSocialMediaContainerInquiry="bg-reliableBlack3"
        size="large"
        variant={true}
        iconType="icon"
        onClick={handleInquiry}
      >
        <div className="flex justify-end items-center gap-x-2">
          <Text.Head4>INQUIRY</Text.Head4>
          <FiArrowRight size={20} />
        </div>
      </ButtonInquiry>
    </div>
  );
};

export default Detail;
