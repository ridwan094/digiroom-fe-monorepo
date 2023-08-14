import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BtnInquiry, FormGroup, Text, Article, ProductPanel } from 'ui/components/atoms';
import Layout from 'ui/components/templates/Layout';
import { FiArrowRight } from 'react-icons/fi';
import { BreadCrumbs, OtherPromo, InquiryForm } from 'ui/components/molecules';
import { MdArrowBack, MdShare } from 'react-icons/md';

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
          <BreadCrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'News & Tips' },
              { name: 'News & Tips Detail' },
            ]}
          />
        </div>
        <div className="flex md:hidden border-b px-4 border-gray-100 pb-1 pt-2 mb-4">
          <a href="/">
            <MdArrowBack size={24} color="black" />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Desktop Resolutions */}
          {/* Article */}
          <div className="flex mt-0 md:mt-8 gap-4 px-4 md:px-16">
            <div className="flex flex-col flex-1">
              <ProductPanel
                className="px-0"
                src="/images/detailNewsImage.webp"
                alt="detailPromoImage"
                width={984}
                height={520}
              />
              <Article data={{}} />
            </div>
            <div className="flex-1 max-w-sm hidden md:block">
              <div className="bg-reliableBlack20 px-8 py-8">
                <h4 className={'text-xl font-bold text-reliableBlack90 max-w-sm'}>
                  Minta Penawaran
                </h4>
                <h5 className="text-base text-reliableBlack mt-4">
                  Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami
                  akan segera menghubungi Anda.
                </h5>
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
            title="Promo Terkait"
            classNameContainer="w-full px-4 md:px-16 flex flex-col justify-center mb-4 md:mb-10"
            gap="1rem"
          />

          {/* Another Artikel */}
          <OtherPromo
            perPage={4}
            arrows={false}
            pagination={false}
            items={generateSlides()}
            title="Artikel Serupa"
            classNameContainer="w-full px-4 md:px-16 flex flex-col justify-center mb-20 md:hidden"
            gap="1rem"
          />
        </div>

        {/* Breadcrumb => Mobile Resolutions */}
        <div className="px-4 md:hidden sm:hidden pb-5">
          <BreadCrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Promo', path: '/' },
              { name: 'Detail News' },
            ]}
          />
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
                title="ISI DATA"
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
      <BtnInquiry
        showMediaSocialShare={false}
        block={true}
        containerBtnInquiry="w-full absolute z-200 bottom-0 left-0 md:hidden lg:hidden"
        className="bg-supportiveRed h-20"
        classNameSocialMediaContainerInquiry="bg-reliableBlack3"
        size="large"
        variant={true}
        iconType="icon"
        onClick={handleInquiry}
      >
        <div className="flex justify-end items-center gap-x-2">
          <Text.Head4>DAPATKAN PROMO TERBARU</Text.Head4>
          <FiArrowRight size={20} />
        </div>
      </BtnInquiry>
    </div>
  );
};

export default Detail;
