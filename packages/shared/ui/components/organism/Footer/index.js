import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { footerDekstopImage, footerMobileImage } from '../../../assets/images';
import XLogo from '../../atoms/Icons/Xlogo';
import { Icons } from '../../atoms';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#2C2B2B]">
        <div className="space-y-8 px-5 py-16 sm:px-6 lg:space-y-16 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-bold text-white">NEW CAR</p>

                <ul className="mt-5 text-[#A3A3A3] space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      YARIS CROSS
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      YARIS CROSS HYBRID
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      CAMRY HYBRID
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      HILUX SINGLE CABIN
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      INNOVA HYBDRID
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      AGYA GR SPORT
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white">USED CARS</p>

                <ul className="mt-5 font-base text-[#A3A3A3] space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      AFTER SALES
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      ACCESSORIES
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      SERVICE COUPON
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      WORKSHOP SERVICE
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      SERVICE AT HOME
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      BODY & PAINT
                    </a>
                  </li>

                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      TRADE-IN
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white">FAQS</p>

                <ul className="mt-5 font-bold space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      HELPS
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      DEALERS
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      CONTACT US
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      TERMS AND CONDITIONS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-white">ABOUT AUTO2000</p>

                <ul className="mt-5 font-bold space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      PROMO
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      NEWS
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      ACHEVEMENT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:h-[370px]">
              <div className="relative flex flex-col">
                {/* Social media icon */}
                <div className="flex flex-col mr-11">
                  <span className="text-white text-xs">Follow Us</span>
                  <ul className="flex gap-6 mt-3">
                    <li>
                      <a
                        href="https://www.facebook.com/Auto2000official"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebookF size="22px" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Instagram</span>

                        <FaInstagram size="22px" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/Auto2000ID"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">X</span>
                        <Icons.Xlogo size="22" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/user/auto2000csr"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Youtube</span>
                        <FaYoutube size="22px" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=+6282289802000"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Whatsapp</span>
                        <FaWhatsapp size="22px" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.tiktok.com/@auto2000official?is_from_webapp=1&sender_device=pc"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">Tiktok</span>
                        <FaTiktok size="22px" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Download on the Playstore */}
                <div className="flex flex-col">
                  <span className="text-white text-xs mb-3 mt-4 md:mt-[59px]">
                    Download Digiroom
                  </span>
                  <div className="flex gap-3.5 md:gap-0 md:flex-col">
                    <a
                      href="https://play.google.com/store/apps/details?id=id.co.astra.ai.dev1"
                      rel="noreferrer"
                      target="_blank"
                      className="flex w-[140px] h-[51px] bg-black text-white rounded-md border border-white items-center justify-center"
                    >
                      <div className="mr-2">
                        <Icons.Playstore />
                      </div>
                      <div>
                        <div className="text-[9px]">GET IT ON</div>
                        <div className="text-[16px] font-semibold font-sans -mt-1">Google Play</div>
                      </div>
                    </a>
                    {/* Download on the appstore & googleplay */}
                    <a
                      href="https://apps.apple.com/id/app/auto2000/id421805050"
                      rel="noreferrer"
                      target="_blank"
                      className="flex md:mt-3 w-[140px] h-[51px] bg-black text-white rounded-lg border border-white items-center justify-center"
                    >
                      <div className="mr-2">
                        <Icons.AppleIcon />
                      </div>
                      <div className="-mb-1">
                        <div className="text-[7px] -mb-2">Download on the</div>
                        <div className="text-[16px] font-semibold font-sans">App Store</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Image */}
        <div>
          <img
            src={footerDekstopImage.src}
            className="w-full hidden md:block"
            alt="auto2000 footer dekstop image"
          />
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col bg-[#1F1F1F] md:px-16 py-4 md:flex-row md:justify-between">
          <div className="flex mx-4 md:mx-0 items-center gap-9">
            {/* Satu Indonesia Icons */}
            <Icons.SatuIndonesiaIcon />

            {/* Toyota Icons */}
            <Icons.ToyotaIcon />

            {/* Astra Icons */}
            <Icons.AstraIcon />
          </div>
          <div className="flex flex-col mx-4 md:mx-0 md:flex-row gap-1 md:gap-10 md:items-center">
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-xs text-gray-500 mt-8 mb-1 md:mb-0 md:mt-0"
            >
              Roadside Assistance <span className="text-xs font-bold text-gray-500">1500 898</span>
            </a>
            <a href="#" rel="noreferrer" target="_blank" className="text-xs text-gray-500">
              Privacy Policy
            </a>
            <a href="#" rel="noreferrer" target="_blank" className="text-xs text-gray-500">
              &copy; 2019 AUTO2000 | All Rights Reserved
            </a>
          </div>
        </div>

        <div className="mb-[67px] md:mb-0 bg-[#1F1F1F]">
          <img
            src={footerMobileImage.src}
            className="w-full md:hidden"
            alt="auto2000 footer mobile image"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
