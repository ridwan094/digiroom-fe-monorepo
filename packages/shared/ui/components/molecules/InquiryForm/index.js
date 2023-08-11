import { useState } from 'react';
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

  const checkFormInquiry = () => {
    return (
      !submit.fullName || !submit.email || !submit.phoneNumber || !submit.province || !submit.city
    );
  };

  return (
    <form className={containerClassForm} onSubmit={handleSubmit}>
      <Input
        type="text"
        labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
        onChange={(e) => handleChange(e, 'fullname')}
        value={submit.fullName}
        label="Full Name"
        placeholder="First Name, Last Name"
        size="large"
        inputClassName={inputClassName}
        containerClassName={containerInputClassName}
      />

      <Input
        type="email"
        labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
        onChange={(e) => handleChange(e, 'email')}
        value={submit.email}
        label="Email"
        placeholder="Email@abc.com"
        size="large"
        inputClassName={inputClassName}
        containerClassName={containerInputClassName}
      />

      <Input
        type="text"
        labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
        onChange={(e) => handleChange(e, 'number')}
        value={submit.phoneNumber}
        label="Phone"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        placeholder="+62 XXX-XXX-XXX"
        size="large"
        inputClassName={inputClassName}
        containerClassName={containerInputClassName}
      />

      {/* DROPDOWN PROVINCE */}
      <div className={containerDropdown ? containerDropdown : ''}>
        <Dropdown
          withInput={true}
          label="Province"
          labelClassname="block text-[#666666] text-sm font-semibold mb-2 mt-1"
          options={['Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali']}
          selectedOption={submit.province}
          onSelect={(e) => handleChange(e, 'province')}
          placeholder="Choose Province"
        />
      </div>

      {/* DROPDOWN CITY */}
      <div className={containerDropdown ? containerDropdown : ''}>
        <Dropdown
          withInput={true}
          label="City"
          labelClassname="block text-[#666666] text-sm font-semibold mb-2 mt-1"
          options={['Jakarta', 'Bandung', 'Semarang', 'Surakarta', 'Surabaya', 'Jogja']}
          selectedOption={submit.city}
          onSelect={(e) => handleChange(e, 'city')}
          placeholder="Choose City"
        />
      </div>

      {/* CheckBox */}
      <div className={containerDropdown ? containerDropdown : ''}>
        <Checkbox
          labelClassname="hidden md:flex text-xs mt-5"
          label="Saya telah membaca dan menyetujui Syarat dan Ketentuan Auto 2000"
          checked={submit.checked}
          onChange={(e) => handleChange(e, 'checkbox')}
        />
      </div>

      <div className={`${buttonContainer}`}>
        <div class="flex items-center justify-between mt-5">
          <BtnConfirm
            block={true}
            className={checkFormInquiry() ? 'bg-reliableBlack310' : 'bg-supportiveRed'}
            size="large"
            variant={true}
            iconType="icon"
            disabled={checkFormInquiry()}
          >
            <div className="flex justify-end items-center py-3 md:py-1 gap-x-2">
              <Text.Head4 className="text-lg sm:text-xl">SUBMIT</Text.Head4>
              <FiArrowRight size={20} />
            </div>
          </BtnConfirm>
        </div>
      </div>
    </form>
  );
};

InquiryForm.defaultProps = {
  containerClassForm: '',
  containerInputClassName: '',
  inputClassName: '',
  containerDropdown: '',
  labelStyle: 'text-black font-semibold',
  onSubmit: () => {},
};

export default InquiryForm;
