import { createRef, useRef, useState, useMemo } from 'react';
import { BtnConfirm } from '../../atoms';
import { Input } from '../../atoms';
import Text from '../../atoms/Text';
import { FiArrowRight } from 'react-icons/fi';

const OtpForm = ({
  containerClassForm,
  containerInputClassName,
  buttonContainer,
  inputClassName,
  labelStyle,
  onSubmit,
}) => {
  const [submit, setSubmit] = useState({
    Number1: '',
    Number2: '',
    Number3: '',
    Number4: '',
    Number5: '',
    Number6: '',
  });

  const inputRefs = useRef([createRef(), createRef(), createRef(), createRef()]);

  const handleChange = (e, field, index) => {
    const value = e.target.value;
    setSubmit((prevSubmit) => ({
      ...prevSubmit,
      [field]: value.slice(0, 1), // Only keep the first character
    }));
    if (value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to Parents Inqury
    onSubmit(submit);
  };

  const checkFormInquiry = useMemo(
    () =>
      !submit.Number1 ||
      !submit.Number2 ||
      !submit.Number3 ||
      !submit.Number4 ||
      !submit.Number5 ||
      !submit.Number6,
    [submit]
  );

  return (
    <form className={containerClassForm} onSubmit={handleSubmit}>
      <p className="text-[13px] font-medium text-[#666666] uppercase mb-2.5">OTP</p>

      <div className="flex justify-center items-center w-full gap-1">
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number1')}
          value={submit.Number1}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[0]}
        />
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number2')}
          value={submit.Number2}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[1]}
        />
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number3')}
          value={submit.Number3}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[2]}
        />
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number4')}
          value={submit.Number4}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[3]}
        />
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number5')}
          value={submit.Number5}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[4]}
        />
        <Input
          type="text"
          labelClassName={`${labelStyle}`}
          onChange={(e) => handleChange(e, 'Number6')}
          value={submit.Number6}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          size="large"
          inputClassName={inputClassName}
          containerClassName={containerInputClassName}
          ref={inputRefs.current[5]}
        />
      </div>

      {/* Submit Button */}
      <div className={`${buttonContainer}`}>
        <div class="flex items-center justify-between mt-4">
          <BtnConfirm
            block={true}
            className={`${
              checkFormInquiry ? 'bg-reliableBlack20' : 'bg-supportiveRed'
            } w-full bg-reliableBlack text-white py-6 px-8`}
            size="large"
            variant={true}
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
  containerClassForm: '',
  containerInputClassName: '',
  inputClassName: '',
  containerDropdown: '',
  labelStyle: 'text-black font-semibold',
  onSubmit: () => {},
};

export default OtpForm;
