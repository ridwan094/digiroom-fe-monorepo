import { useMemo, useState } from 'react';
import { BtnConfirm, Dropdown } from '../../atoms';
import { Input } from '../../atoms';
import Text from '../../atoms/Text';
import { FiArrowRight } from 'react-icons/fi';
import Checkbox from '../../atoms/CheckBox';

const InquiryForm = ({
  containerClassForm,
  containerInputClassName,
  containerDropdown,
  buttonContainer,
  innerButton,
  inputClassName,
  labelStyle,
  onSubmit,
}) => {
  const [submit, setSubmit] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    province: '',
    city: '',
    branch: '',
    checked: false,
  });

  const handleChange = (e, category) => {
    if (category === 'fullname') {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        fullName: newValue,
      }));
    }

    if (category === 'email') {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        email: newValue,
      }));
    }

    if (category === 'number') {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        phoneNumber: newValue,
      }));
    }

    if (category === 'province') {
      setSubmit((prevState) => ({
        ...prevState,
        province: e,
      }));
    }

    if (category === 'city') {
      setSubmit((prevState) => ({
        ...prevState,
        city: e,
      }));
    }

    if (category === 'branch') {
      setSubmit((prevState) => ({
        ...prevState,
        branch: e,
      }));
    }

    if (category === 'checkbox') {
      setSubmit((prevState) => ({
        ...prevState,
        checked: e.target.checked,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to Parents Inqury
    onSubmit(submit);
  };

  const checkFormInquiry = useMemo(
    () =>
      !submit.fullName ||
      !submit.email ||
      !submit.phoneNumber ||
      !submit.province ||
      !submit.city ||
      !submit.branch,
    [submit]
  );

  return (
    <form className={containerClassForm} onSubmit={handleSubmit}>
      <div className="mb-4 lg:mb-5">
        <Input
          type="text"
          labelClassName="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          onChange={(e) => handleChange(e, 'fullname')}
          value={submit.fullName}
          label="Nama"
          placeholder="Nama Lengkap"
          size="medium"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
        />
      </div>

      <div className="mb-4 lg:mb-5">
        <Input
          type="email"
          labelClassName="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          onChange={(e) => handleChange(e, 'email')}
          value={submit.email}
          label="Email"
          placeholder="Email address"
          size="medium"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
        />
      </div>

      <div className="mb-4 lg:mb-5">
        <Input
          type="text"
          labelClassName="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          onChange={(e) => handleChange(e, 'number')}
          value={submit.phoneNumber}
          label="Nomor Telepon"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="+62 -"
          size="medium"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
        />
      </div>

      {/* DROPDOWN PROVINCE */}
      <div className={`${containerDropdown ? containerDropdown : ''} mb-4 lg:mb-5`}>
        <Dropdown
          withInput={true}
          label="Provinsi"
          labelClassname="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          options={['Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali']}
          selectedOption={submit.province}
          onSelect={(e) => handleChange(e, 'province')}
          placeholder="Pilih Provinsi"
        />
      </div>

      {/* DROPDOWN CITY */}
      <div className={`${containerDropdown ? containerDropdown : ''} mb-4 lg:mb-5`}>
        <Dropdown
          withInput={true}
          label="Kota"
          labelClassname="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          options={['Jakarta', 'Bandung', 'Semarang', 'Surakarta', 'Surabaya', 'Jogja']}
          selectedOption={submit.city}
          onSelect={(e) => handleChange(e, 'city')}
          placeholder="Pilih Kota"
        />
      </div>

      {/* DROPDOWN BRANCH */}
      <div className={`${containerDropdown ? containerDropdown : ''} mb-4 lg:mb-5`}>
        <Dropdown
          withInput={true}
          label="Cabang"
          labelClassname="block text-[#666666] text-[13px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
          options={['Cabang A', 'Cabang B', 'Cabang C']}
          selectedOption={submit.branch}
          onSelect={(e) => handleChange(e, 'branch')}
          placeholder="Pilih Cabang"
        />
      </div>

      {/* CheckBox */}
      <div className={`${containerDropdown ? containerDropdown : ''} mb-8 pb-16 md:pb-0`}>
        <Checkbox
          labelClassname="hidden md:flex text-sm font-medium mt-5"
          label="Saya telah membaca dan menyetujui Syarat dan Ketentuan Auto 2000"
          checked={submit.checked}
          onChange={(e) => handleChange(e, 'checkbox')}
        />
      </div>

      {/* Suubmit button */}
      <div className={`${buttonContainer}`}>
        <BtnConfirm
          className={`${
            checkFormInquiry ? 'bg-reliableBlack20' : 'bg-supportiveRed'
          } ${innerButton} w-full text-[#FFFEFE] py-6 px-8`}
          size="large"
          iconType="icon"
          disabled={checkFormInquiry}
        >
          <Text.Head4 className="text-base font-bold uppercase">Saya Tertarik</Text.Head4>
          <FiArrowRight className="lg:hidden" size={20} />
        </BtnConfirm>
      </div>
    </form>
  );
};

InquiryForm.defaultProps = {
  containerClassForm: '',
  containerInputClassName: '',
  inputClassName: '',
  containerDropdown: '',
  buttonContainer: '',
  innerButton: '',
  labelStyle: 'text-black font-semibold',
  onSubmit: () => {},
};

export default InquiryForm;
