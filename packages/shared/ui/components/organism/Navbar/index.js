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
import { LoginForm } from '../../molecules';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValues, setInputValues] = useState('');
  const [location, setLocation] = useState('Jakarta Pusat');
  const [defaultFlag, setDefaultFlag] = useState(idFlag);
  const [openModal, setOpenModal] = useState(false);
  const [inquiryData, setInquiryData] = useState(null);
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('nama');
    const storedIsLogin = localStorage.getItem('isLogin');

    if (storedName && storedIsLogin === 'true') {
      setName(storedName);
      setIsLogin(true);
    }
  }, []);

  const handleSubmit = (payload) => {
    setInquiryData(payload);

    // Open otp form modal(will use this later)
    // setOpenModal(true);
    console.log(payload.phoneNumber);
    window.location.href = '/articles';
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue);
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
            {isLogin === true ? (
              <div className="flex justify-center items-center w-24 group hover:bg-reliableBlack3 text-xs font-semibold leading-relaxed text-reliableBlack">
                <span className="group-hover:hidden">{name}</span>
                <button
                  className="hidden text-supportiveRed group-hover:block"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <BtnLoginSignup onClick={() => setOpenModal(true)} />
            )}
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
      {openModal && (
        <LoginForm
          onSubmit={handleSubmit}
          visible={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
      <nav className="sticky top-0 lg:top-10 w-full z-40 bg-white md:border-b md:border-reliableBlack70 py-1.5 md:py-5">
        {/* Top Navbar */}
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center justify-between md:gap-4">
              <div>
                <Icons.NavLogo />
              </div>
              {menu.map((item) => (
                <div
                  key={item.id}
                  className="flex hidden md:flex uppercase whitespace-nowrap text-sm  md:gap-4"
                >
                  <a
                    className="text-reliableBlack py-2 hover:text-reliableBlack70"
                    href={item.path}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
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
        <div className="z-10 fixed bottom-0 left-0 bg-[#333333] px-5 md:hidden w-full">
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
            className={`absolute bottom-16 left-0 bg-[#333333] w-full  ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {menu.map((item) => (
              <div key={item.id} className={`flex flex-col py-2`}>
                <a className="text-white py-3 px-4 hover:bg-gray-600" href={item.path}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;

const menu = [
  { id: 1, name: 'Mobil Baru', path: '#' },
  { id: 2, name: 'Test Drive', path: '#' },
  { id: 3, name: 'Mobil Bekas', path: '#' },
  { id: 4, name: 'Purna Jual', path: '#' },
  { id: 5, name: 'Promo', path: '#' },
  { id: 6, name: 'Dealer Toyota', path: '#' },
];
