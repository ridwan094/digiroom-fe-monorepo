import { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from 'ui/components/templates/Layout';
import { Button, Dropdown, Input, Tag, Accordion } from 'ui/components/atoms';
import { CardPromo } from 'ui/components/molecules';

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
    setInputValues(newValue); // Update nilai input menggunakan state
    console.log(inputValues);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className=" text-4xl md:text-8xl my-auto font-bold text-slate-900">
            {searchValue ? searchValue : 'The Boilerplate'}
          </div>
          <Button>Test</Button>
          <Dropdown
            label="Dropdown"
            placeholder="Select an Option"
            options={options}
            onSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </div>
        <Input
          type="text"
          label="Nama"
          labelClassName="text-reliableBlack70 font-semibold"
          onChange={handleChange}
          value={inputValues}
        />

        {/* Hero section promo page */}
        <section className="mb-8">
          <div className="container">
            <h2 className="text-base font-bold uppercase mb-2 mt-8">Promo Toyota Terbaru 2023</h2>
            <p className="text-xs font-medium leading-relaxed mb-4">
              Penawaran dan promo mobil Toyota online terbaru dari Auto2000 untuk Anda
            </p>
          </div>
          <div className="relative">
            <Tag className="absolute top-0 right-0 rounded-bl">
              <span className="font-bold">Hot Deal</span>
            </Tag>
            <img
              className="w-full object-cover"
              src="http://localhost:3002/images/banner-image.png"
              alt="Promo banner image auto2000"
            />
          </div>
        </section>

        {/* Promo section */}
        <section className="mb-8">
          <div className="grid grid-cols-2">
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
              tag={<Tag className="rounded-br">Trending</Tag>}
            />
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
            />
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
            />
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
            />
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
            />
            <CardPromo
              title="Cicilan Ringan Toyota Raize"
              startDate="21 Nov 22"
              endDate="30 Jun 23"
              coverImg="http://localhost:3002/images/promo-car-example.png"
            />
          </div>
        </section>

        {/* Info promo section */}
        <section className="mb-8">
          <div className="container">
            <h2 className="text-base font-bold uppercase mb-4">Informasi Promo Toyota</h2>
            <p className="leading-relaxed">
              Selamat datang di dealer dan bengkel Toyota cabang resmi Auto2000. Tersedia beragam
              kebutuhan Toyota di dealer dan bengkel Toyota meliputi layanan purna jual seperti
              servis mobil dan penjualan part Toyota. Pilih berbagai tipe maupun varian mobil baru
              Toyota dengan daftar harga dan spesifikasi yang tersedia di Auto2000. Temukan
              kendaraan Toyota terbaik yang sesuai dengan kebutuhan Anda hanya di sini.
            </p>
          </div>
        </section>

        {/* Promo FAQ section */}
        <section className="mb-8">
          <div className="container">
            <h2 className="text-base font-bold uppercase mb-4">Promo FAQ</h2>
            <Accordion
              data={[
                {
                  title: 'Apakah promo di Auto2000 selalu tersedia tiap bulan?',
                  content:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti olor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corr at! Corrupti olor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat!',
                },
                {
                  title: 'Apakah promo berlaku untuk semua tipe mobil Toyota?',
                  content:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti',
                },
                {
                  title: 'Apakah tetap dapat menggunakan promo dengan pembayaran sistem kredit?',
                  content:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti or sit amet consectetur adipisicing elit. Nesciunt repellendus veniam laudantium quia placeat! Corrupti',
                },
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
