import { useState, useMemo } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { BtnConfirm, OtpInput, Text } from '../../atoms';

const OtpForm = ({ validationError, onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const handleInputChange = (inputId, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputId]: value,
    }));
  };

  const checkFormInquiry = useMemo(
    () =>
      !inputValues.input1 ||
      !inputValues.input2 ||
      !inputValues.input3 ||
      !inputValues.input4 ||
      !inputValues.input5 ||
      !inputValues.input6,
    [inputValues]
  );

  return (
    <form className="container lg:px-0" onSubmit={() => onSubmit(inputValues)}>
      {/* Header */}
      <p className="text-sm text-reliableBlack mb-8">
        Masukkan kode 6-digit yang kami telah kirimkan ke Whatsapp{' '}
        <span className="font-bold">+62-12345678910</span>
      </p>

      {/* OTP input */}
      <div className="mb-8">
        <p className="text-[13px] font-medium text-[#666666] uppercase mb-2.5">OTP</p>
        <div
          id="OTPInputGroup"
          className="w-full grid grid-cols-6 items-center justify-center gap-1"
        >
          <OtpInput
            id="input1"
            value={inputValues.input1}
            onValueChange={handleInputChange}
            previousId={null}
            nextId="input2"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
          <OtpInput
            id="input2"
            value={inputValues.input2}
            onValueChange={handleInputChange}
            previousId="input1"
            nextId="input3"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
          <OtpInput
            id="input3"
            value={inputValues.input3}
            onValueChange={handleInputChange}
            previousId="input2"
            nextId="input4"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
          <OtpInput
            id="input4"
            value={inputValues.input4}
            onValueChange={handleInputChange}
            previousId="input3"
            nextId="input5"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
          <OtpInput
            id="input5"
            value={inputValues.input5}
            onValueChange={handleInputChange}
            previousId="input4"
            nextId="input6"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
          <OtpInput
            id="input6"
            value={inputValues.input6}
            onValueChange={handleInputChange}
            previousId="input5"
            classNames={`${validationError && 'border-supportiveRed'}`}
          />
        </div>
      </div>

      {/* Validation error */}
      {validationError && (
        <p className="text-xs font-normal text-supportiveRed mt-1">{validationError.message}</p>
      )}

      {/* Timer */}
      <p className="text-sm font-semibold text-reliableBlack mb-8">03:00</p>

      {/* Retry OTP */}
      <p className="text-sm text-reliableBlack mb-8">
        Belum dapat kode?{' '}
        <button>
          <span className="font-medium text-blue-500">Kirim ulang</span>
        </button>
      </p>

      {/* Change phone number */}
      <p className="text-sm text-reliableBlack">
        Salah nomor handphone?{' '}
        <button>
          <span className="font-medium text-blue-500">Ganti nomor</span>
        </button>
      </p>

      {/* Submit Button for mobile */}
      <div className="fixed z-50 w-full left-0 bottom-0 lg:relative lg:mt-8">
        <div className="flex items-center justify-between mt-4">
          <BtnConfirm
            className={`${
              checkFormInquiry ? 'bg-reliableBlack20' : 'bg-supportiveRed'
            } w-full bg-reliableBlack text-white py-6 px-8 lg:rounded`}
            block={true}
            size="large"
            iconType="icon"
            disabled={checkFormInquiry}
          >
            <Text.Head4 className="text-base font-bold uppercase">Submit</Text.Head4>
            <FiArrowRight className="lg:hidden" size={20} />
          </BtnConfirm>
        </div>
      </div>
    </form>
  );
};

OtpForm.defaultProps = {
  validationError: null,
  onSubmit: () => {},
};

export default OtpForm;
