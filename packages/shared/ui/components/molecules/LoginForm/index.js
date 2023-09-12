import React, { useState, useMemo } from 'react';
import { Button, Input, Modal } from '../../atoms';
import { FcGoogle } from 'react-icons/fc';
import { FaSquareFacebook } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLogin } from '../../../store/page/actions';

const LoginForm = ({
  containerClassForm,
  containerInputClassName,
  containerDropdown,
  buttonContainer,
  innerButton,
  inputClassName,
  labelStyle,
  onSubmit,
  visible,
  onClose,
}) => {
  const [submit, setSubmit] = useState({
    phoneNumber: '',
  });
  const { isLogin } = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleChange = (e, category) => {
    if (category === 'number') {
      const newValue = e.target.value;

      if (newValue.startsWith(0)) {
        return;
      }

      setSubmit((prevState) => ({
        ...prevState,
        phoneNumber: `${newValue}`,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumberWith62 = `62${submit.phoneNumber}`;

    // Send to Parents Inqury
    onSubmit({ phoneNumber: phoneNumberWith62 });

    if (phoneNumberWith62 === '62123456789') {
      dispatch(setIsLogin(true));
      localStorage.setItem('nama', 'danu ganteng');
      localStorage.setItem('isLogin', 'true');
    }
    window.location.reload();
  };

  const checkFormInquiry = useMemo(() => !submit.phoneNumber[submit]);

  return (
    <React.Fragment>
      <Modal
        visible={visible}
        header={true}
        bodyClassName="bg-gray10 p-6"
        className={'!w-[622px]'}
        title={'Login'}
        onClose={onClose}
      >
        <form className={containerClassForm} onSubmit={handleSubmit}>
          <div className="w-full">
            <Input
              value={submit.phoneNumber}
              placeholder="xxx-xxx-xxx"
              type={'text'}
              size={'large'}
              inputClassName={`lg:bg-reliableBlack3 lg:border-b lg:border-[#5F5F5F] py-4`}
              icon={
                <span className="text-base text-reliableBlack font-medium transform -translate-y-1/2">
                  +62
                </span>
              }
              iconPosition="left"
              onChange={(e) => handleChange(e, 'number')}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <div className="flex flex-col justify-center  items-center my-12">
              <span>Atau login dengan</span>
              <div className="flex mb-12 gap-8 mt-5">
                <FcGoogle size={36} />
                <FaSquareFacebook size={36} color="#3F51B5" />
              </div>

              <span>Belum punya akun?</span>
              <a href="" className="text-supportiveRed font-bold uppercase">
                registrasi
              </a>
            </div>

            <Button
              type="submit"
              className={`${
                checkFormInquiry ? 'bg-reliableBlack20' : 'bg-supportiveRed'
              } ${innerButton} w-full text-[#FFFEFE] py-6 px-8`}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default LoginForm;
