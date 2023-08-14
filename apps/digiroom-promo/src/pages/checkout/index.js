import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BreadCrumbs, Button, CardAccessoriesProduct, DynamicStepper, Layout } from 'ui';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { MdArrowForwardIos, MdOutlineArrowBack } from 'react-icons/md';
import Link from 'next/link';

const coupons = [
  {
    id: 1,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.webp',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 2,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.webp',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 3,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.webp',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 4,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.webp',
    title: 'SPONTAN C 3TH INV BS AT',
  },
];

const acc = [
  {
    id: 1,
    price: 'Rp. 1.000.000',
    discountPrice: 'P5401-0KA0Q',
    coverImg: '/images/cardCarCheckout.webp',
    title: 'Upper Grille Ornament Modellista (All Type)',
  },
  {
    id: 2,
    price: 'Rp. 500.000',
    discountPrice: 'P5401-0KA0Q',
    coverImg: '/images/cardCarCheckout.webp',
    title: 'Upper Grille Ornament Modellista (All Type)',
  },
];

function Checkout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use window.matchMedia function to detect screen size
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    // Determine the initial status whether it's mobile or desktop
    setIsMobile(mediaQuery.matches);

    // Add event listener to listen for screen size changes
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="px-2 py-2 md:px-16">
          {!isMobile ? (
            <BreadCrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Promo', path: '/' },
                { name: 'Checkout' },
              ]}
            />
          ) : (
            <Link href="/detail-promo">
              <MdOutlineArrowBack size={24} color="black" />
            </Link>
          )}
        </div>
        <div className="bg-reliableBlack10">
          {/* <DynamicStepper steps={[1, 2, 3]} activeTab={1} /> */}
          <div className="flex justify-center items-center py-3 px-4 gap-2">
            <div className="flex justify-center items-center gap-2">
              <div className="flex px-2 rounded-full bg-[#1DA707]">1</div>
              <p className="text-[14px] text-reliableBlack90">Keranjang -</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex px-2 rounded-full bg-[#FBB90F]">2</div>
              <p className="text-[14px] text-reliableBlack90">Isi Data -</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="flex px-2 rounded-full bg-reliableBlack70">3</div>
              <p className="text-[14px] text-reliableBlack90">Pembayaran</p>
            </div>
          </div>
          <div className="px-4 py-4 bg-white border-b border-b-reliableBlack20">
            <div className="flex justify-between">
              <Image width={140} height={70} src="/images/cardCarCheckout.webp" alt="foto" />
              <div className="flex flex-col ml-4">
                <h4 className="text-sm text-black font-bold">Promo Flash Deals Vios Bundle</h4>
                <span className="text-xs font-normal text-reliableBlack">x 1</span>
                <p className="">
                  <span className="font-bold text-supportiveRed line-through text-sm">
                    Rp. 322.500,000
                  </span>
                  <span className="ml-2 font-normal text-reliableBlack70 line-through text-[10px]">
                    Rp. 326.000,000
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-3">
              <Button type="button" variant={'bg-reliableBlack10'}>
                <RiDeleteBin6Line size={24} color="black" />
              </Button>
            </div>
          </div>
          <div className="px-3.5 py-6 mb-2 bg-white">
            <Button className="w-full" type="button" variant={'bg-reliableBlack10'}>
              <div className="flex justify-between items-center space-x-16">
                <BiSolidPurchaseTag size={24} color="#CE181E" />
                <span className="text-sm text-reliableBlack font-semibold">
                  Lebih hemat dengan promo
                </span>
                <MdArrowForwardIos size={24} color="black" />
              </div>
            </Button>
          </div>
          <h4 className="px-4 text-xl font-bold text-reliableBlack bg-white pt-8 pb-4">
            Rekomendasi Accessories
          </h4>
          <div className="grid grid-cols-2 px-4 bg-white">
            {acc.map((item) => (
              <CardAccessoriesProduct
                key="id"
                price={item.price}
                discountPrice={item.discountPrice}
                coverImg={item.coverImg}
                title={item.title}
              />
            ))}
          </div>
          <h4 className="px-4 text-xl font-bold text-reliableBlack bg-white pt-8 pb-4">
            Rekomendasi Kupon Servis
          </h4>
          <div className="px-4 grid grid-cols-2 bg-white">
            {coupons.map((item) => (
              <CardAccessoriesProduct
                key="id"
                price={item.price}
                discountPrice={item.discountPrice}
                discountPercentage={item.discountPercentage}
                coverImg={item.coverImg}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Checkout;
