import React, { useEffect, useState } from 'react';
import constants from '@/constants';
import {
  BtnContactUs,
  BtnLoginSignup,
  Button,
  Dropdown,
  GeoPosition,
  Icons,
  Input,
} from '../../atoms';
import { MdOutlineCall, MdOutlineShoppingCart, MdPersonOutline, MdSearch } from 'react-icons/md';
import { idFlag, usFlag } from '../../../assets/images';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValues, setInputValues] = useState('');
  const [location, setLocation] = useState('Jakarta Pusat');
  const [defaultFlag, setDefaultFlag] = useState(idFlag);

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
    <React.Fragment>
      <nav className="sticky top-0 w-full z-50 bg-white md:border-b border-reliableBlack20 hidden md:block">
        {/* Top Navbar */}
        <div className="container px-0 flex items-center justify-end">
          <div className="flex">
            <BtnContactUs />
            <GeoPosition
              value={location}
              options={['Jakarta Pusat', 'Bandung', 'Yogyakarta', 'Nanggroe Aceh Darussalam']}
              onChange={handleChangeLocation}
              classNameContainer="bg-white"
            />
            <BtnLoginSignup />
            <Button variant="bg-transparent" size="small">
              <MdOutlineShoppingCart className="w-5 h-5 text-reliableBlack" />
            </Button>
            <Dropdown
              onSelect={setDefaultFlag}
              icon={<img src={defaultFlag.src} alt="en-us" style={{ height: '14px' }} />}
              options={[usFlag, idFlag]}
              size="auto"
            />
          </div>
        </div>
      </nav>
      <nav className="sticky top-0 lg:top-10 w-full z-40 bg-white md:border-b md:border-reliableBlack70 py-1.5 md:py-5">
        {/* Top Navbar */}
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-between md:gap-8">
              <div>
                <Icons.NavLogo />
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
                  <Icons.GeoLocation />{' '}
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
              icon={<MdSearch color="#333333" size={24} />}
              iconPosition="right"
              labelClassName="text-reliableBlack70 font-semibold"
              onChange={handleChange}
              value={inputValues}
              containerClassName="hidden md:flex"
            />
          </div>
        </div>
        <div className="z-10 fixed bottom-0 left-0 bg-gray-700 px-5 md:hidden w-full">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Toggle */}
            <a
              className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
              href="#"
            >
              <Icons.NavHomeIcon />
              Home
            </a>
            <div className="h-6 w-px bg-white my-2" />
            <a
              className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
              href="#"
            >
              <Icons.CarIcon />
              New Cars
            </a>
            <div className="h-6 w-px bg-white my-2" />
            <a
              className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
              href="#"
            >
              <Icons.ServiceCarIcon />
              Service
            </a>
            <div className="h-6 w-px bg-white my-2" />
            <a
              className="flex flex-col justify-center items-center text-white text-xs text-center py-4 hover:bg-gray-600"
              href="#"
            >
              <span>
                <Icons.AskCsIcon />
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
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
