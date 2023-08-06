import React, { useEffect, useState } from 'react';
import constants from '@/constants';
import {
  AskCsIcon,
  BtnContactUs,
  BtnLoginSignup,
  Button,
  CarIcon,
  Dropdown,
  GeoPosition,
  Input,
  NavHomeIcon,
  NavLogo,
  ServiceCarIcon,
} from '../../atoms';
import { MdOutlineCall, MdOutlineShoppingCart, MdPersonOutline, MdSearch } from 'react-icons/md';
import { idFlag, usFlag } from '../../../assets/images';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValues, setInputValues] = useState('');
  const [location, setLocation] = useState('Jakarta Pusat');
  const [defaultFlag, setDefaultFlag] = useState(usFlag);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  const handleChangeLocation = (e) => {
    setLocation(e);
  };

  return (
    <>
      <div className="bg-white border-b-2 border-reliableBlack30 px-8 md:px-4 md:py-3 hidden md:block">
        {/* Top Navbar */}
        <div className="flex items-center justify-end">
          <div className="flex">
            <BtnContactUs />
            <GeoPosition
              value={location}
              options={['Jakarta Pusat', 'Bandung', 'Yogyakarta', 'Nanggroe Aceh Darussalam']}
              onChange={handleChangeLocation}
            />
            <BtnLoginSignup />
            <Button variant="bg-transparent" size="small">
              <MdOutlineShoppingCart className="w-5 h-5" />
            </Button>
            <Dropdown
              onSelect={setDefaultFlag}
              icon={<img src={defaultFlag.src} alt="en-us" style={{ height: '14px' }} />}
              options={[usFlag, idFlag]}
              size="auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-1.5 md:py-5">
        {/* Top Navbar */}
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-between md:gap-8">
              <div>
                <NavLogo />
              </div>
              <div className="flex hidden md:flex">
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  New Cars
                </a>
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  Test Drive
                </a>
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  Used Cars
                </a>
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  After Sales
                </a>
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  Promo
                </a>
                <a className="text-reliableBlack py-2 px-5 hover:text-reliableBlack70" href="#">
                  Toyota Dealer
                </a>
              </div>
              {/* Icons */}
              <div className="absolute flex right-2 md:hidden">
                <a
                  className="flex justify-center items-center gap-1 text-reliableBlack px-5 hover:text-reliableBlack70"
                  href="#"
                >
                  <MdOutlineCall />
                </a>
                <a
                  className="flex justify-center items-center gap-1 text-reliableBlack px-5 hover:text-reliableBlack70"
                  href="#"
                >
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 12 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99999 12.9728C7.40277 11.8467 8.46875 10.7524 9.19793 9.6899C9.9271 8.6274 10.2917 7.6177 10.2917 6.66081C10.2917 5.85397 10.1458 5.16599 9.85389 4.59688C9.56203 4.02776 9.20029 3.56694 8.76868 3.2144C8.33707 2.86187 7.87218 2.60605 7.37402 2.44694C6.87586 2.28784 6.4204 2.20829 6.00764 2.20829C5.59488 2.20829 5.13837 2.28784 4.63812 2.44694C4.13787 2.60605 3.67105 2.86187 3.23766 3.2144C2.80426 3.56694 2.44102 4.02776 2.14793 4.59688C1.85485 5.16599 1.70831 5.85397 1.70831 6.66081C1.70831 7.6177 2.07289 8.6274 2.80206 9.6899C3.53124 10.7524 4.59722 11.8467 5.99999 12.9728ZM5.99999 14.6602C4.09722 13.2393 2.68403 11.8696 1.76043 10.5513C0.836821 9.23288 0.375015 7.94011 0.375015 6.67296C0.375015 5.71586 0.541946 4.87671 0.875807 4.1555C1.20968 3.43431 1.64807 2.83172 2.19097 2.34775C2.73388 1.86378 3.3403 1.49733 4.01024 1.2484C4.68019 0.999466 5.34344 0.875 5.99999 0.875C6.67044 0.875 7.33716 0.999466 8.00016 1.2484C8.66316 1.49733 9.26611 1.86378 9.80902 2.34775C10.3519 2.83172 10.7903 3.43431 11.1242 4.1555C11.458 4.87671 11.625 5.71586 11.625 6.67296C11.625 7.94011 11.1632 9.23288 10.2396 10.5513C9.31596 11.8696 7.90277 13.2393 5.99999 14.6602ZM6.00258 8.04163C6.41966 8.04163 6.77349 7.89547 7.06408 7.60317C7.35467 7.31085 7.49997 6.95615 7.49997 6.53906C7.49997 6.12198 7.35382 5.76815 7.06152 5.47756C6.7692 5.18697 6.41449 5.04167 5.99741 5.04167C5.58033 5.04167 5.22649 5.18782 4.93591 5.48013C4.64531 5.77245 4.50002 6.12715 4.50002 6.54423C4.50002 6.96131 4.64617 7.31515 4.93847 7.60573C5.23079 7.89633 5.58549 8.04163 6.00258 8.04163ZM0.375015 17.125V15.7917H11.625V17.125H0.375015Z"
                      fill="#494949"
                    />
                  </svg>{' '}
                </a>
                <a
                  className="flex justify-center items-center gap-1 text-reliableBlack px-5 hover:text-reliableBlack70"
                  href="#"
                >
                  <MdOutlineShoppingCart />
                </a>
                <a
                  className="flex justify-center items-center gap-1 text-reliableBlack px-5 hover:text-reliableBlack70"
                  href="#"
                >
                  <MdPersonOutline />
                </a>
              </div>
            </div>

            <Input
              type="text"
              icon={<MdSearch size={24} />}
              iconPosition="right"
              labelClassName="text-reliableBlack70 font-semibold"
              onChange={handleChange}
              value={inputValues}
              placeholder="Search"
              containerClassName="hidden md:flex"
            />
          </div>
        </div>
      </div>
      <div className="z-10 fixed bottom-0 left-0 bg-gray-700 px-5 md:hidden w-full">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <a
            className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
            href="#"
          >
            <NavHomeIcon />
            Home
          </a>
          <div className="h-6 w-px bg-white my-2" />
          <a
            className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
            href="#"
          >
            <CarIcon />
            New Cars
          </a>
          <div className="h-6 w-px bg-white my-2" />
          <a
            className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
            href="#"
          >
            <ServiceCarIcon />
            Service
          </a>
          <div className="h-6 w-px bg-white my-2" />
          <a
            className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
            href="#"
          >
            <span>
              <AskCsIcon />
            </span>
            Ask Tasia
          </a>
          <div className="h-6 w-px bg-white my-2" />
          {/* Hamburger Menu */}
          <button className="text-white text-xl text-center" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`absolute bottom-16 left-0 px-4 bg-gray-500 w-full ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className={`flex flex-col `}>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              New Cars
            </a>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              Test Drive
            </a>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              Used Cars
            </a>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              After Sales
            </a>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              Promo
            </a>
            <a className="text-white py-2 px-4 hover:bg-gray-600" href="#">
              Toyota Dealer
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
