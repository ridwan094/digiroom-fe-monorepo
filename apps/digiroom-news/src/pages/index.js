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

import { Article, Input } from 'ui/components/atoms';

export default function Home() {
  const [inputValues, setInputValues] = useState('');
  const [inputValuesNumber, setInputValuesNumber] = useState('');
  const [inputValuesEmail, setInputValuesEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const { searchValue } = useSelector((state) => state.example);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  const handleChangeNumber = (e) => {
    const newValue = e.target.value;
    setInputValuesNumber(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  const handleChangeEmail = (e) => {
    const newValue = e.target.value;
    setInputValuesEmail(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4 mb-10">
          <div className=" text-8xl my-auto font-bold text-slate-900">
            {searchValue ? searchValue : 'The Boilerplate'}

            {/* <p className="text-black">TEXT INPUT</p>
          <Input
            type="text"
            labelClassName="text-black font-semibold p-4"
            onChange={handleChange}
            value={inputValues}
            label="Full Name"
            placeholder="First Name, Last Name"
            inputClassName="text-black bg-whiteRealible8 h-20"
            size="large"
            containerClassName="w-full"
          />

          <p className="text-black">TEXT INPUT NUMBER</p>
          <Input
            type="text"
            labelClassName="text-black font-semibold p-4"
            onChange={handleChangeNumber}
            value={inputValuesNumber}
            label="Phone"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            placeholder="+62 XXX-XXX-XXX"
            inputClassName="text-black whiteRealible8 h-20"
            size="large"
            containerClassName="w-full"
          />

          <p className="text-black">TEXT INPUT EMAIL</p>
          <Input
            type="email"
            labelClassName="text-black font-semibold p-4"
            onChange={handleChangeEmail}
            value={inputValuesEmail}
            label="Email"
            placeholder="Email@abc.com"
            inputClassName="text-black bg-whiteRealible8 h-20"
            size="large"
            containerClassName="w-full"
          /> */}

            {/* <p className="text-black">ARTICLE</p>
          <Article data={MOCK_DATA_ARTICLE} />

          <p className="text-black">Disabled</p>
          <ButtonConfirm
            block={true}
            className="bg-reliableBlack10"
            size="large"
            variant={true}
            iconType="icon"
            disabled={true}
          >
            <div className="flex justify-end items-center gap-x-2">
              <Text.Head4>SUBMIT</Text.Head4>
              <FiArrowRight size={20} />
            </div>
          </ButtonConfirm>

          <p className="text-black">Disabled False</p>
          <ButtonConfirm
            block={true}
            className="bg-redPrimary"
            size="large"
            variant={true}
            iconType="icon"
          >
            <div className="flex justify-end items-center gap-x-2">
              <Text.Head4>SUBMIT</Text.Head4>
              <FiArrowRight size={20} />
            </div>
          </ButtonConfirm>

          <p className="text-black">Button Inquiry</p>
          <ButtonInquiry
            block={true}
            className="bg-redPrimary"
            size="large"
            variant={true}
            iconType="icon"
          >
            <div className="flex justify-end items-center gap-x-2">
              <Text.Head4>INQUIRY</Text.Head4>
              <FiArrowRight size={20} />
            </div>
          </ButtonInquiry> */}
          </div>
        </div>
        {/* <Templates.Button>clik me</Templates.Button>
          <Button>Login</Button> */}
      </Layout>
    </>
  );
}
