import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  TabBarPromo,
  QuickLink,
  Accordion,
  Button,
  Dropdown,
  Input,
  Tag,
  Layout,
  BreadCrumbs,
} from 'ui';
import faqs from '../constants/faq';
import Head from 'next/head';

export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description goes here.',
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState('');

  return (
    <>
      <div>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <Layout>
          <QuickLink />
          <div className="flex flex-col justify-center items-center gap-1">
            {/* Hero section promo page */}
            <section className="w-full ">
              <div className="p-4 md:container md:p-0 lg:container lg:p-0">
                <div className="hidden relative lg:block md:block">
                  <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
                </div>
                <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 mt-4 lg:text-2xl">
                  Promo Toyota Terbaru 2023
                </h2>
                <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-4 lg:text-base">
                  Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
                </p>
              </div>
              <div className="md:container relative">
                <Tag className="absolute top-0 right-0 rounded-bl lg:px-[12px] py-[10px]">
                  <span className="font-bold text-reliableBlack90 lg:text-base">Hot Deal</span>
                </Tag>
                <img
                  className="w-full lg:h-[400px] object-cover p-30"
                  src="http://localhost:3002/images/banner-image.webp"
                  alt="Promo banner image auto2000"
                />
              </div>
            </section>

            {/* Tab Bar Promo */}
            <section className="w-full py-8">
              <div className="lg:container">
                <TabBarPromo />
              </div>
            </section>

            {/* <div className=" text-4xl md:text-8xl my-auto font-bold text-slate-900">
            {searchValue ? searchValue : 'The Boilerplate'}
          </div>
          <Button>Test</Button> */}
            {/* <Dropdown
            label="Dropdown"
            placeholder="Select an Option"
            options={options}
            onSelect={handleOptionSelect}
            selectedOption={selectedOption}
          /> */}
            {/* <Input
          type="text"
          label="Nama"
          labelClassName="text-reliableBlack70 font-semibold"
          onChange={handleChange}
          value={inputValues}
        /> */}

            {/* Info promo section */}
            <section className="py-4 lg:py-8 md:container lg:container">
              <div className="px-4 text-reliableBlack md:px-0 lg:px-0">
                <h2 className="text-base font-bold uppercase mb-4 lg:text-2xl">
                  Informasi Promo Toyota
                </h2>
                <p className="leading-relaxed lg:max-w-7xl ">
                  Selamat datang di dealer dan bengkel Toyota cabang resmi Auto2000. Tersedia
                  beragam kebutuhan Toyota di dealer dan bengkel Toyota meliputi layanan purna jual
                  seperti servis mobil dan penjualan part Toyota. Pilih berbagai tipe maupun varian
                  mobil baru Toyota dengan daftar harga dan spesifikasi yang tersedia di Auto2000.
                  Temukan kendaraan Toyota terbaik yang sesuai dengan kebutuhan Anda hanya di sini.
                </p>
              </div>
            </section>

            {/* Promo FAQ section */}
            <section className="py-2 lg:py-8 lg:px-16">
              <div className="p-1 md:container md:p-0">
                <h2 className="px-2 text-base text-reliableBlack font-bold uppercase mb-4 lg:text-2xl lg:px-0">
                  <span>Promo FAQ</span>
                  <span className="lowercase">s</span>
                </h2>
                <div className="px-2 text-reliableBlack ">
                  {faqs.map((faq, index) => (
                    <Accordion key={index} title={faq.title}>
                      {faq.content}
                    </Accordion>
                  ))}
                </div>
              </div>
            </section>
            <section className="w-full">
              <div className="px-4 py-2 relative lg:hidden md:hidden">
                <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
              </div>
            </section>
          </div>
        </Layout>
      </div>
    </>
  );
}
