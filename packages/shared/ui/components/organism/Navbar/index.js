import React, { useState } from "react";
import SearchBar from "ui/components/molecules/SearchBar";
import Confirmation from "ui/components/molecules/SearchBar";
import constants from "@/constants";
import { AskCsIcon, CarIcon, Input, NavHomeIcon, NavLogo, ServiceCarIcon } from "../../atoms";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inputValues, setInputValues] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  return (
    <>
      <div className="bg-white border-b-2 border-reliableBlack30 px-8 md:px-16 md:py-3">
        {/* Top Navbar */}
        <div className="flex items-center justify-end">
          <div>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              New Cars
            </a>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              Test Drive
            </a>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              Used Cars
            </a>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              After Sales
            </a>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              Promo
            </a>
            <a className="text-reliableBlack px-5 hover:text-reliableBlack70" href="#">
              Toyota Dealer
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white py-1.5 px-8 md:px-16 md:py-5">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center md:gap-8">
            <NavLogo />
            <div className="hidden md:flex">
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
          </div>

          <Input
            type="text"
            labelClassName="text-reliableBlack70 font-semibold"
            onChange={handleChange}
            value={inputValues}
            placeholder="Seacrh"
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
        <div className={`absolute bottom-16 left-0 px-4 bg-gray-500 w-full ${isMobileMenuOpen ? "block" : "hidden"}`}>
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
