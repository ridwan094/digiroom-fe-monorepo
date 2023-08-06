import { useSelector } from 'react-redux';
import { ButtonInquiry } from 'ui/components/atoms';
import { useState } from 'react';
import Layout from 'ui/components/templates/Layout';
import { FiArrowRight } from 'react-icons/fi';
import Text from 'ui/components/atoms/Text';
import { FormGroup } from 'ui/components/atoms';
import { BreadCrumbs, OtherPromo } from 'ui/components/molecules';
import { Article } from 'ui/components/atoms';
import { InquiryForm } from 'ui/components/molecules';
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
        date: `2${index + 1} November 2023 - 2${index + 1} January 2024`,
        headline: 'Toyota Raize Light Installments',
      };
    });
  };

  return (
    <div className="relative">
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Desktop Resolutions */}
          {/* Article */}
          <div class="md:flex">
            <div class="md:w-3/5">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="image"
                className="px-4"
              />
              <Article data={MOCK_DATA} />
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
            title="OTHER PROMOTIONS"
            classNameContainerOtherPromo="w-full px-4 flex flex-col justify-center gap-4 mb-20"
          />
        </div>

        {/* Breadcrumb */}
        <div className="px-4 md:hidden sm:hidden pb-5">
          <BreadCrumbs />
        </div>

        {/* Modal */}
        {modalForm ? (
          <div
            class="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalScrollable"
            tabindex="-1"
            aria-labelledby="exampleModalScrollableLabel"
            aria-hidden="true"
          >
            <div class="sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto pointer-events-none ">
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
          </div>
        ) : null}
      </Layout>

      {/* Button Inquiry Mobile */}
      <ButtonInquiry
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
