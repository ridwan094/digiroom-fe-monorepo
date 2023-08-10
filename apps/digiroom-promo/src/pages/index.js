import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabBarPromo, QuickLink, Accordion, Tag, Layout, BreadCrumbs } from 'ui';
import faqs from '../constants/faqs';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const { searchValue } = useSelector((state) => state.example);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue);
  };

  return (
    <>
      <Layout>
        <QuickLink />
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Hero section promo page */}
          <section className="py-4 lg:pb-8 lg:pt-1 w-full">
            <div className="container px-4 lg:px-16">
              <BreadCrumbs />
              <h2 className="text-base font-bold uppercase text-reliableBlack mb-2 mt-8 lg:text-2xl">
                Promo Toyota Terbaru 2023
              </h2>
              <p className="text-xs font-medium leading-relaxed text-reliableBlack mb-4 lg:text-base">
                Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
              </p>
            </div>
            <div className="relative lg:px-16">
              <div className="absolute top-0 right-0 lg:left-16 ">
                <Tag className="rounded-bl lg:rounded-br lg:px-[12px] lg:py-[10px]">
                  <span className="font-bold text-reliableBlack90 lg:text-base">Hot Deal</span>
                </Tag>
              </div>
              <img
                className="w-full object-cover"
                src="http://localhost:3002/images/banner-image.webp"
                alt="Promo banner image auto2000"
              />
            </div>
          </section>

          {/* Tab Bar Promo */}
          <div className="lg:container">
            <TabBarPromo />
          </div>
        </div>

        {/* Info promo section */}
        <section className="py-4 lg:py-8 lg:hidden">
          <div className="px-4 text-reliableBlack">
            <h2 className="text-base font-bold uppercase mb-4 lg:text-2xl">
              Informasi Promo Toyota
            </h2>
            <p className="leading-relaxed lg:max-w-7xl ">
              Selamat datang di dealer dan bengkel Toyota cabang resmi Auto2000. Tersedia beragam
              kebutuhan Toyota di dealer dan bengkel Toyota meliputi layanan purna jual seperti
              servis mobil dan penjualan part Toyota. Pilih berbagai tipe maupun varian mobil baru
              Toyota dengan daftar harga dan spesifikasi yang tersedia di Auto2000. Temukan
              kendaraan Toyota terbaik yang sesuai dengan kebutuhan Anda hanya di sini.
            </p>
          </div>
        </section>

        {/* Promo FAQ section */}
        <section className="py-4 lg:py-8 px-4 lg:px-16">
          <div className="container">
            <h2 className="text-base text-reliableBlack font-bold uppercase mb-4 lg:text-2xl">
              <span>Promo FAQ</span>
              <span className="lowercase">s</span>
            </h2>
            <div className="px-4 text-reliableBlack ">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title}>
                  {faq.content}
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
