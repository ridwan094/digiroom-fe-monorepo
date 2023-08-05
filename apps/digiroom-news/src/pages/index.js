import { useSelector } from 'react-redux';
import { Button } from 'ui/components/atoms';
import { ButtonInquiry } from 'ui/components/atoms';
import { ButtonConfirm } from 'ui/components/atoms';
import { useState } from 'react';
// import * as Atoms from 'ui';
// import * as Molecules from 'ui';
// import * as Organisms from 'ui';
// import * as Templates from 'ui';
import Layout from 'ui/components/templates/Layout';
import { FiArrowRight } from 'react-icons/fi';
import Text from 'ui/components/atoms/Text';
import { FormGroup } from 'ui/components/atoms';
import { BreadCrumbs, OtherPromo } from 'ui/components/molecules';

const MOCK_DATA = {
  titleHeadPost:
    'Pahami Hal Mendasar Mengemudi Aman di Jalan Tol, Auto2000 Bantu Jaga  Kondisi Mobil',
  datePost: '01 Jul 2023',
  contents: [
    {
      title: 'Pahami Kondisi Jalan',
      subTitle1:
        'Jika AutoFamily tidak melewati jalan tol yang sama setiap hari, ada risiko tidak mengetahui potensi masalah seperti jalan rusak.',
      subTitle2:
        'Bahkan pada saat normal melintas, ada kemungkinan kondisi jalan akan berubah, seperti sedang dilakukan perbaikan jalan yang mengharuskan pengemudi untuk tetap waspada.',
    },
    {
      title: 'Pahami Rambu dan Marka Jalan',
      subTitle1:
        'Karena kurang memperhatikan rambu-rambu lalu lintas, ada pengendara yang nekad memotong jalan dari jalur cepat hingga pintu keluar tol.',
      subTitle2:
        'Tindakan ini sangat berbahaya karena berisiko tertabrak dari belakang atau menyebabkan mobil terguling.',
      newsContent: 'https://auto2000.co.id/berita-dan-tips/crm-paa-mobil-raize-apakah-matic-ulasan',
      subTitle3:
        'Also make sure not to drive on the shoulder of the toll road because there is a risk of crashing from behind, where this type of accident still occurs frequently.',
      subTitle4:
        "Don't forget to obey the speed limit and always keep a safe distance from the car in front.",
    },
    {
      title: 'Pahami Rambu dan Marka Jalan',
      subTitle1:
        'Karena kurang memperhatikan rambu-rambu lalu lintas, ada pengendara yang nekad memotong jalan dari jalur cepat hingga pintu keluar tol.',
      subTitle2:
        'Tindakan ini sangat berbahaya karena berisiko tertabrak dari belakang atau menyebabkan mobil terguling.',
      subTitle3:
        'Also make sure not to drive on the shoulder of the toll road because there is a risk of crashing from behind, where this type of accident still occurs frequently.',
      subTitle4:
        "Don't forget to obey the speed limit and always keep a safe distance from the car in front.",
    },
    {
      title: 'Understand the Skill of Each Driver Is Different',
      subTitle1:
        "AutoFamily may already have sufficient driving skills.But what about other drivers? They may just be able to drive a car.For that,understand the skills of other drivers by seeing how they. If it's dangerous, avoid it immediately and don't be provoked because it can make them panic and make the wrong decision.",
    },
    {
      title: 'Understand the Importance of Safety Features',
      subTitle1:
        'Even though it is the most basic safety feature that protects the most because it is proven to be able to prevent passengers from hitting the glass or being thrown out during an accident.',
      subTitle2:
        'Toyota cars are equipped with seat belts up to the 3rd row bench, make the most of this feature and other advanced safety features such as Toyoto Safety Sense',
    },
    {
      title: 'Understand Body Condition',
      subTitle1:
        'Because of trivial gaps, many drivers ignore sleep attacks and insist on driving. As a result they hit microsleep and ended in an accident.',
      subTitle2:
        'Understand the condition of the body from the potential for drowsiness, fatigue, and dangerous diseases.',
      newsContent: 'Rush Services can be really be this easy',
    },
  ],
};

import { Article } from 'ui/components/atoms';
import { InquiryForm } from 'ui/components/molecules';

export default function Home() {
  const { searchValue } = useSelector((state) => state.example);
  const [modalForm, setModalForm] = useState(false);

  const handleInquiry = () => {
    setModalForm(!modalForm);
  };

  const handleSubmit = (value) => {
    console.log('VALUE =>', value);
    setModalForm(!modalForm);
  };

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
}
