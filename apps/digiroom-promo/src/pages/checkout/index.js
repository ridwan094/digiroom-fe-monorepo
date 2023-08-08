import Image from 'next/image';
import React from 'react';
import { Button, CardAccessoriesProduct, DynamicStepper, Layout } from 'ui';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';

const coupons = [
  {
    id: 1,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.png',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 2,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.png',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 3,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.png',
    title: 'SPONTAN C 3TH INV BS AT',
  },
  {
    id: 4,
    price: 'Rp. 80.000',
    discountPrice: 'Rp. 88.000',
    discountPercentage: '10%',
    coverImg: '/images/accCardImage.png',
    title: 'SPONTAN C 3TH INV BS AT',
  },
];

const acc = [
  {
    id: 1,
    price: 'Rp. 1.000.000',
    discountPrice: 'P5401-0KA0Q',
    coverImg: '/images/cardCarCheckout.png',
    title: 'Upper Grille Ornament Modellista (All Type)',
  },
  {
    id: 2,
    price: 'Rp. 500.000',
    discountPrice: 'P5401-0KA0Q',
    coverImg: '/images/cardCarCheckout.png',
    title: 'Upper Grille Ornament Modellista (All Type)',
  },
];

function Checkout() {
  return (
    <>
      <Layout>
        <div className="bg-reliableBlack10">
          <DynamicStepper steps={[1, 2, 3]} activeTab={1} />
          <div className="px-4 py-4 bg-white border-b border-b-reliableBlack20">
            <div className="flex justify-between">
              <Image width={140} height={70} src="/images/cardCarCheckout.png" alt="foto" />
              <div className="flex flex-col ml-4">
                <h4 className="text-sm text-black font-bold">Promo Flash Deals Vios Bundle</h4>
                <span className="text-xl font-light text-reliableBlack50">x 1</span>
                <p className="">
                  <span className="font-bold text-supportiveRed line-through text-sm">
                    Rp. 322.500,000
                  </span>
                  <span className="ml-2 font-light text-black line-through text-[10px]">
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
                <span className="text-sm text-black font-base">Lebih hemat dengan promo</span>
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
