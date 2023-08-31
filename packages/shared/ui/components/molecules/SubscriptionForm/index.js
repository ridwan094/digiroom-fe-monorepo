import React, { useMemo, useState } from 'react';
import { BtnConfirm, CheckBox, Dropdown, Input } from '../../atoms';
import { FiLock } from 'react-icons/fi';
import Text from '../../atoms/Text';

const SubscriptionForm = ({
  containerClassForm,
  containerInputClassName,
  containerDropdown,
  buttonContainer,
  innerButton,
  inputClassName,
  dropdownClassName,
  onDetailBranch,
  onSubmit,
}) => {
  const initialFormData = {
    fullName: '',
    phoneNumber: '',
    selectedCar: '',
    carPurchaseTime: '',
    selectedBranch: '',
    checked: false,
  };

  const [submit, setSubmit] = useState(initialFormData);

  const handleChange = (e, category) => {
    const newValue = e.target ? e.target.value : e;
    setSubmit((prevState) => ({
      ...prevState,
      [category]: newValue,
    }));

    if (category === 'checkbox') {
      setSubmit((prevState) => ({
        ...prevState,
        checked: e.target.checked,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to Parents Inquiry
    onSubmit(submit);
  };

  const checkForm = useMemo(
    () =>
      !submit.fullName ||
      !submit.phoneNumber ||
      !submit.selectedCar ||
      !submit.carPurchaseTime ||
      !submit.checked,
    [submit]
  );

  return (
    <div className="pb-8 lg:py-12 lg:border-t-4">
      <div className="mb-4 px-4 border-b pb-2 lg:text-center lg:mb-12 lg:border-none">
        <h2 className="text-lg font-bold">MINTA PENAWARAN</h2>
        <p className="mt-2">
          Dapatkan penawaran khusus produk{' '}
          <span className="font-bold">Auto2000 di Jakarta Pusat</span> untuk Anda
        </p>
      </div>
      <form className={containerClassForm} onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2">
          <div className="mb-5 lg:mb-12">
            <Input
              type="text"
              labelClassName="block text-reliableBlack70 text-[14px] font-medium mb-[10px]"
              onChange={(e) => handleChange(e, 'fullName')}
              value={submit.fullName}
              label="Nama Lengkap"
              placeholder="Nama Depan dan Belakang"
              size="medium"
              inputClassName={inputClassName}
              containerClassName={containerInputClassName}
            />
          </div>
          <div className="mb-5 lg:mb-12">
            <Input
              type="text"
              labelClassName="block text-reliableBlack70 text-[14px] font-medium mb-[10px]"
              onChange={(e) => handleChange(e, 'phoneNumber')}
              value={submit.phoneNumber}
              label="Nomor Handphone"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="+62 XXX-XXX-XXX"
              size="medium"
              inputClassName={inputClassName}
              containerClassName={containerInputClassName}
            />
          </div>

          {/* Dropdown Selected Car */}
          <div className={`${containerDropdown ? containerDropdown : ''} mb-5 lg:mb-12`}>
            <Dropdown
              withInput={true}
              label="Pilih Mobil"
              labelClassname="block text-reliableBlack70 text-[14px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
              options={['A', 'B', 'C', 'D', 'E']}
              selectedOption={submit.selectedCar}
              onSelect={(e) => handleChange(e, 'selectedCar')}
              placeholder="Pilih Mobil"
              additionalClassname={dropdownClassName}
            />
          </div>

          {/* Dropdown Car Purchase Time */}
          <div className={`${containerDropdown ? containerDropdown : ''} mb-5 lg:mb-12`}>
            <Dropdown
              withInput={true}
              label="Waktu Perkiraan Pembelian Mobil"
              labelClassname="block text-reliableBlack70 text-[14px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
              options={['A', 'B', 'C', 'D', 'E']}
              selectedOption={submit.carPurchaseTime}
              onSelect={(e) => handleChange(e, 'carPurchaseTime')}
              placeholder="Waktu Perkiraan Pembelian Mobil"
              additionalClassname={dropdownClassName}
            />
          </div>

          {/* Dropdown Selected Branch */}
          {!onDetailBranch && (
            <div className={`${containerDropdown ? containerDropdown : ''} mb-5 lg:mb-5`}>
              <Dropdown
                withInput={true}
                label="Pilih Cabang (Opsional)"
                labelClassname="block text-reliableBlack70 text-[14px] font-medium mb-[10px] lg:text-reliableBlack70 lg:text-sm lg:mb-2"
                options={['A', 'B', 'C', 'D', 'E']}
                selectedOption={submit.selectedBranch}
                onSelect={(e) => handleChange(e, 'selectedBranch')}
                placeholder="Pilih Cabang"
                additionalClassname={dropdownClassName}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          {/* CheckBox */}
          <div className="mb-5 pb-0 md:pb-0 px-4">
            <CheckBox
              labelClassname="md:flex text-sm font-base mt-5 flex"
              label="Saya telah membaca dan menyetujui Syarat dan Ketentuan Auto 2000"
              checked={submit.checked}
              onChange={(e) => handleChange(e, 'checkbox')}
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center gap-1 px-4 lg:px-4">
            <FiLock className="w-8 h-8 lg:w-5 lg:h-5" />
            <p className="text-sm font-base ml-2">
              Data pribadi anda aman bersama kami.{' '}
              <span className="text-hyperLink">Kebijakan Privasi</span>
            </p>
          </div>

          {/* Submit button */}
          <div className={`${buttonContainer}`}>
            <BtnConfirm
              className={`${
                checkForm ? 'bg-reliableBlack20' : 'bg-reliableBlack'
              } ${innerButton} w-full text-[#FFFEFE] py-4 px-8 rounded !justify-center`}
              size="large"
              iconType="icon"
              disabled={checkForm}
            >
              <Text.Head4 className="text-base font-bold uppercase">Kirim</Text.Head4>
            </BtnConfirm>
          </div>
        </div>
      </form>
    </div>
  );
};

SubscriptionForm.defaultProps = {
  containerClassForm: '',
  containerInputClassName: '',
  containerDropdown: '',
  inputClassName: '',
  buttonContainer: '',
  innerButton: '',
  onSubmit: () => {},
};

export default SubscriptionForm;
