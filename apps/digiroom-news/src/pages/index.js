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
import { OtherPromo } from 'ui/components/molecules';

const MOCK_DATA_ARTICLE = `
<div style="background-color: red; margin: auto; width: 70%">
<h1>HELLO THIS IS RESPONSE BRAY</h1>
<img
  src="https://cdn.oneesports.id/cdn-data/sites/2/2022/03/Naruto-Uzumaki.jpg"
  alt="naruto"
  width="100%"
/>
</div>
`;

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
      };
    });
  }

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Article */}
          <Article data={MOCK_DATA_ARTICLE} />

          {/* Other Promo */}
          <OtherPromo
            perPage={2.2}
            arrows={false}
            type="loop"
            pagination={true}
            items={generateSlides()}
          />

          {/* Button Inquiry */}
          <ButtonInquiry
            block={true}
            className="bg-supportiveRed"
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
                <FormGroup title="INQUIRY" onClose={handleInquiry} colorCloseIcons="bg-black" />
                <div class="flex-auto overflow-y-auto relative">
                  <InquiryForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Notification Success */}
      </Layout>
    </>
  );
}
