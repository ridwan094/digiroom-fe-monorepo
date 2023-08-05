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

const options = ['Option 1', 'Option 2', 'Option 3'];

const faqs = [
  {
    title: 'Apakah promo di Auto2000 selalu tersedia tiap bulan?',
    content: `Auto2000 selalu memberikan penawaran dan promo menarik mobil Toyota online untuk Anda. Setiap bulannya, selalu ada promo di Auto2000 yang dapat Anda manfaatkan saat itu juga. Promo menarik yang tersedia di Auto2000 semuanya bisa Anda ikuti dengan mengunjungi laman promosi secara berkala. Untuk itulah mengapa Anda jangan sampai kelewatan promo menarik untuk pembelian mobil Toyota di Auto2000!`,
  },
  {
    title: 'Apakah promo berlaku untuk semua tipe mobil Toyota?',
    content: `Auto2000 adalah e-commerce penjualan mobil Toyota resmi di Indonesia dengan ketersediaan promo menarik setiap bulannya. Perlu digaris bawahi bahwa promo berlaku tidak untuk semua tipe mobil Toyota. Semuanya tergantung dari syarat dan ketentuan yang berlaku.
    Untuk tipe mobil Toyota yang bisa mendapatkan promo pun sangat beragam. Dimulai dari Toyota New Kijang Innova, Toyota New Vellfire, Toyota All New Voxy, Toyota New Sienta, Toyota New Alphard, Toyota New Calya, Toyota New Avanza, Toyota All New Raize, Toyota New Rush, Toyota All New Corolla Cross, Toyota Land Cruiser, Toyota New Fortuner 4x2, Toyota New Fortuner 4x4, Toyota All New C-HR, Toyota New Yaris, Toyota New Agya, Toyota New Vios, Toyota All New Camry, Toyota All New Corolla Altis, Toyota Supra, Toyota 86, Toyota Hilux Single Cabin, Toyota Hilux Double Cabin, Toyota Hiace, dan Toyota Dyna.
    Untuk memastikan apakah promo yang tersedia di bulan tersebut berlaku untuk mobil impian Anda, selalu cek laman promosi di Auto2000 Digiroom agar tidak terlewatkan. Dikarenakan setiap bulan selalu ada promo baru, Anda juga harus melihat setiap ketentuan yang berlaku karena dapat berubah untuk setiap promo.`,
  },
  {
    title: 'Apakah tetap dapat menggunakan promo dengan pembayaran sistem kredit?',
    content: `Auto2000 mengerti bahwa banyak orang yang ingin memiliki mobil impian. Pembayaran sistem kredit sendiri sudah tersedia di Auto2000.
    Sebelum itu, ketahui setiap persyaratan yang harus dipenuhi, yakni:
    Warga Negara Indonesia yang berdomisili di Indonesia
    Berstatus Warga Negara Asing yang berdomisili di Indonesia (harus memiliki Penjamin WNI/perusahaan)
    Mempunyai usia minimum pihak yang mengajukan kredit: 21 tahun (belum menikah) atau 18 tahun (sudah menikah)
    Mempunyai Usia maksimal pihak yang mengajukan kredit: 58 tahun (pegawai negeri), 55 tahun (pegawai swasta), atau 65 tahun (untuk profesional)
    
    Jika persyaratan di atas sudah dipenuhi, sekarang saatnya melengkapi dokumen yang wajib Anda miliki:
    Membawa fotokopi KTP Pemohon dan Pasangan (Suami/Istri) jika sudah menikah
    Fotokopi Kartu Keluarga (KK) atau Akta Nikah
    Fotokopi NPWP
    Memberikan fotokopi Bukti Kepemilikan/Sewa Tempat Tinggal
    Memberikan slip Gaji/Surat Keterangan Penghasilan
    Mempunyai fotokopi Rekening Tabungan/Koran dalam tiga bulan terakhir
    Memastikan adanya fotokopi KTP dan KK Penjamin (jika belum menikah/domisili sewa/WNA)
    Ada bukti Kepemilikan Rumah untuk tambahan dokumen (jika diperlukan)
    Surat Cerai/Akta Kematian Pasangan (jika diperlukan)
    
    Setiap dokumen yang Anda butuhkan untuk memiliki mobil Toyota impian perlu dilengkapi agar proses pengajuan kredit lebih mudah. Tim Auto2000 sendiri akan membantu Anda untuk melengkapi dokumen-dokumen yang dibutuhkan sehingga proses pengajuan kredit berjalan lancar dan cepat.
    Promo menarik yang tersedia di Auto2000 sendiri tetap bisa didapatkan dengan sistem pembayaran kredit. Bahkan tersedia promo yang fokus pada pembayaran kredit. Oleh karena itu, Anda dapat melihat promo menarik yang selalu tersedia tiap bulannya di laman promosi Auto2000.`,
  },
];

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
    console.log(inputValues);
  };

  return (
    <>
      <Layout>
        <QuickLink />
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Hero section promo page */}
          <section className="py-4 lg:py-8 w-full">
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
                src="http://localhost:3002/images/banner-image.png"
                alt="Promo banner image auto2000"
              />
            </div>
          </section>

          {/* Tab Bar Promo */}
          <div className="lg:container">
            <TabBarPromo />
          </div>

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
        </div>
        {/* <Input
          type="text"
          label="Nama"
          labelClassName="text-reliableBlack70 font-semibold"
          onChange={handleChange}
          value={inputValues}
        /> */}

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
