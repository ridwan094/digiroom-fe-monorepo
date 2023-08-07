import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonInquiry, FormGroup, Article, Text, ProductPanel } from 'ui/components/atoms';
import Layout from 'ui/components/templates/Layout';
import { FiArrowRight } from 'react-icons/fi';
import { BreadCrumbs, OtherPromo, InquiryForm } from 'ui/components/molecules';
import { MOCK_DATA } from '../../constants/news';

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
        src: `https://source.unsplash.com/random/800x450?sig=${index}`,
        alt: `Image ${index + 1}`,
        date: `2${index + 1} Nov 23 - 2${index + 1} Jan 24`,
        headline: 'Toyota Raize Light Installments',
      };
    });
  };

  return (
    <div className="relative">
      <Layout>
        <div className="hidden md:block border-b border-gray-100 py-1 mb-4">
          <div className="container mx-auto px-4">
            <BreadCrumbs />
          </div>
        </div>
        <div className="container flex flex-col gap-4 md:mx-auto">
          <div class="md:flex gap-4">
            <div class="md:w-3/5 relative aspect-video">
              <ProductPanel srcImage="/images/banner.webp" objectFit="cover" layout="fill" block />
              <Article data={MOCK_DATA} block containerClassName="px-4 md:px-0" />
            </div>

            <div class="hidden md:block w-1/3 border-none relative flex flex-col pointer-events-auto bg-clip-padding bg-reliableBlack5 h-fit px-10 py-10 rounded-md text-current">
              <FormGroup
                title="Dapatkan Penawaran Terbaik untuk Pemesanan Toyota Baru"
                subTitle="Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan segera menghubungi Anda."
                containerFormGroupClass="flex flex-col gap-4 justify-between md-max-w:p-2 pb-4 text-black"
                onClose={handleInquiry}
                colorCloseIcons="bg-black"
                withcCloseIcon={false}
              />
              <div class="flex-auto overflow-y-auto relative">
                <InquiryForm
                  onSubmit={() => {}}
                  containerClassForm="bg-reliableBlack5 flex flex-col gap-4"
                  containerInputClassName="w-full"
                  inputClassName="text-black bg-whiteRealible8 h-10"
                />
              </div>
            </div>
          </div>
          {/* Other Promo */}
          <OtherPromo
            perPage={2}
            arrows={false}
            pagination={true}
            items={generateSlides()}
            padding={{ right: '2rem' }}
            classNameContainer="px-4 md:px-0"
            gap="1rem"
            title="OTHER PROMOTIONS"
            block
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
        block={true}
        containerBtnInquiry="w-full absolute z-200 bottom-14 left-0 md:hidden lg:hidden"
        className="bg-supportiveRed h-18"
        classNameSocialMediaContainerInquiry="bg-reliableBlack3"
        size="small"
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
