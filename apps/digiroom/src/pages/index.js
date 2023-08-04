import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Dropdown, Input } from 'ui/components/atoms';
import Layout from 'ui/components/templates/Layout';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const { searchValue } = useSelector((state) => state.example);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" text-4xl md:text-8xl my-auto font-bold text-slate-900">
            {searchValue ? searchValue : 'The Boilerplate'}
          </div>
          <Button>Test</Button>
          <Dropdown
            label="Dropdown"
            placeholder="Select an Option"
            options={options}
            onSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </div>
        <Input
          type="text"
          label="Nama"
          labelClassName="text-reliableBlack70 font-semibold"
          onChange={handleChange}
          value={inputValues}
        />
      </Layout>
    </>
  );
}
