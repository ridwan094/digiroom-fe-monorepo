import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { MdArrowForward, MdClose } from 'react-icons/md';
import { BtnConfirm, Text } from 'ui/components/atoms';
import { BreadCrumbs, InfoDigiroom, InquiryForm, OtpForm } from 'ui/components/molecules';
import {
  DetailArticleHeroSection,
  DetailArticleBodySection,
  DetailArticleAnotherPromoSection,
  DetailArticleAnotherArticlesSection,
  SocialMediaLinksSection,
  DetailPromoInquiryFormSection,
} from 'ui/components/organism';
import { motion } from 'framer-motion';
import { getNewsDetail } from '@/service/article';

const Detail = ({ slug, article }) => {
  const { searchValue } = useSelector((state) => state.example);
  const [formOpen, setFormOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const breadCrumbsPath = [
    { name: 'Home', path: '/' },
    { name: 'Berita dan Tips', path: '/berita-dan-tips' },
    { name: article.title },
  ];

  const router = useRouter();

  const handleInquiry = () => {
    setModalForm(!modalForm);
  };

  const handleSubmit = (value) => {
    setModalForm(!modalForm);
  };

  const handleSuccess = () => {
    router.push('/articles/success');
  };

  // Fetching detail
  useEffect(() => {
    if (router?.query?.slugCode) {
      handlerFetchDetail(router?.query?.slugCode);
    }
  }, [router]);

  const handlerFetchDetail = async (slugCode) => {
    setIsLoading(true);
    try {
      const data = await getNewsDetail({ slugCode: slugCode });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Breadcrumb for web screen */}
      <div className="sticky top-[123.5px] z-30 bg-white border-b-1 border-reliableBlack30 w-full">
        <div className="">
          <BreadCrumbs isMobileScreen={false} items={breadCrumbsPath} />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Col 1 */}
          <div>
            {/* Hero section */}
            <DetailArticleHeroSection image={article.image} />

            {/* Body section */}
            <DetailArticleBodySection article={article} />
          </div>

          {/* Col 2 */}
          <div className="hidden my-4 md:mt-8 md:block">
            <div className="container">
              <DetailPromoInquiryFormSection />
            </div>
          </div>
        </div>
      </div>

      {/* Other promo */}
      <div className="lg:container">
        <DetailArticleAnotherPromoSection anotherPromo={article.anotherPromo} />
      </div>

      {/* Other articles */}
      <div className="lg:container">
        <DetailArticleAnotherArticlesSection anotherArticles={article.anotherArticles} />
      </div>

      {/* Social media links on top info */}
      <div className="hidden md:block">
        <SocialMediaLinksSection />
      </div>

      {/* info digiroom & social media links */}
      <InfoDigiroom />
      <div className="block md:hidden lg:container">
        <SocialMediaLinksSection />
      </div>

      {/* Breadcrumb for mobile screen */}
      <BreadCrumbs
        isMobileScreen={true}
        items={[
          { name: 'Home', path: '/' },
          { name: 'Berita dan Tips', path: '/berita-dan-tips' },
          { name: article.title },
        ]}
      />

      {/* CTA Button for mobile screen */}
      <div
        className={`${
          formOpen || otpOpen ? 'hidden' : 'block'
        } fixed w-full z-50 bottom-16 md:hidden`}
      >
        <BtnConfirm
          block={true}
          className="bg-supportiveRed text-white"
          size="large"
          iconType="icon"
          onClick={() => {
            setFormOpen(true);
          }}
        >
          <div className="flex justify-end items-center gap-3">
            <div className="flex flex-col text-end">
              <p className="text-base font-bold uppercase">Saya Tertarik</p>
              <p className="text-xs font-medium">Dapatkan penawaran terbaik dari Auto2000</p>
            </div>
            <MdArrowForward size={20} />
          </div>
        </BtnConfirm>
      </div>

      {/* Form inquiry open */}
      {formOpen && (
        <motion.div
          className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-screen bg-white min-h-screen"
          initial={{ translateY: '100%', opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <div className="flex w-full justify-between px-4 py-6 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              Minta Penawaran
            </Text.Head6>
            <button
              className="text-black"
              onClick={() => {
                setFormOpen(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="overflow-y-auto h-full pt-4">
            <p className="text-sm px-4 text-reliableBlack">
              Silakan isi data Anda. Data pribadi Anda aman bersama kami. Perwakilan sales kami akan
              segera menghubungi Anda.
            </p>
            <InquiryForm
              containerClassForm={'w-full h-full'}
              containerInputClassName={'px-4 my-6'}
              containerDropdown={'px-4 my-6 text-[#666666] font-semibold'}
              labelStyle={'text-[#666666]'}
              inputClassName={''}
              buttonContainer={'fixed w-full left-0 bottom-0 pt-8'}
              onSubmit={() => {
                setOtpOpen(true);
              }}
            />
          </div>
        </motion.div>
      )}

      {/* OTP */}
      {otpOpen && (
        <div className="fixed flex-col z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-white">
          <div className="flex w-full justify-between p-4 border-b border-b-reliableBlack30">
            <Text.Head6 className="font-bold text-reliableBlack90 uppercase">
              Masukkan Kode OTP
            </Text.Head6>
            <button
              className="text-black"
              onClick={() => {
                setOtpOpen(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="w-full h-full flex flex-col bg-white">
            <div className="py-8">
              <OtpForm
                containerClassForm={'w-full px-4 mt-14'}
                containerInputClassName={'w-[50px] h-[50px] w-full'}
                buttonContainer={'fixed z-50 w-full left-0 bottom-0'}
                inputClassName={'text-center'}
                onSubmit={handleSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  // Simulation result of fetch article by slug
  const article = {
    id: 1,
    title: 'Mengenal Fitur Anti-Merosot Hill Start Assist yang Ada di Mobil Toyota',
    slug: 'mengenal-fitur-anti-merosot-hill-start',
    createdDate: 'Jul 25, 2023',
    image: '/images/news/1.webp',
    category: 'Berita',
    content: `
      <p>Presiden Joko Widodo telah meresmikan jalan tol baru Bengkulu-Taba Penajung, dan berdasarkan informasi dari Kementerian PUPR ditargetkan akhir tahun 2023 akan ada 13 ruas tol baru.</p>
      <p>Namun perlu dipahami bahwa mengendarai kendaraan di jalan tol bukanlah perkara mudah, dan sangat berbeda dengan berkendara di jalan umum biasa. Selanjutnya, Auto2000 memberikan tips berkendara aman di jalan tol.</p>
      <p>1. Pahami Kondisi Jalan</p>
      <p>Jika AutoFamily tidak melewati jalan tol yang sama setiap hari, ada risiko tidak mengetahui potensi masalah seperti jalan rusak.</p>
      <p>Bahkan pada saat normal melintas, ada kemungkinan kondisi jalan akan berubah, seperti sedang dilakukan perbaikan jalan yang mengharuskan pengemudi untuk tetap waspada.</p>
      <p>2. Pahami Rambu dan Marka Jalan</p>
      <p>Karena kurang memperhatikan rambu-rambu lalu lintas, ada pengendara yang nekad memotong jalan dari jalur cepat hingga pintu keluar tol.</p>
      <p>Tindakan ini sangat berbahaya karena berisiko tertabrak dari belakang atau menyebabkan mobil terguling.</p>
      <p>Pastikan juga tidak mengemudi di bahu jalan tol karena berisiko menabrak dari belakang, yang menyebabkan kecelakaan seperti ini masih sering terjadi.</p>
      <p>Jangan lupa untuk mematuhi batas kecepatan dan selalu jaga jarak aman dengan mobil di depan.</p>
    `,
    anotherPromo: [
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: 'Trending',
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
      {
        title: 'Cicilan Ringan Toyota Raize',
        slug: 'cicilan-ringan-toyota-raize',
        startDate: '21 Nov 22',
        endDate: '30 Jun 23',
        coverImg: '/images/promo-car-example.webp',
        tag: null,
      },
    ],
    anotherArticles: [
      {
        id: 2,
        title: 'Mengenal 5 Komponen Penggerak Roda Depan',
        slug: 'mengenal-5-komponen-penggerak-roda-depan',
        createdDate: 'Jul 25, 2023',
        image: '/images/news/2.webp',
        category: 'Berita',
        content:
          'Survei Kementerian Perhubungan (Kemenhub) menunjukkan, 40 juta orang diperkirakan akan mudik dengan naik kendaraan pribadi, guna merayakan Hari Raya Idul Fitri 1443 Hijriah di kampung halaman. "Berdasarkan survei Kementerian Perhubungan didapatkan hasil bahwa akan ada 23 juta mobil dan 17 juta sepeda motor yang akan digunakan oleh para pemudik," kata Presiden Joko Widodo, dikutip dari Kompas.com, Senin (18/4/2022). Adapun tidak sedikit pemudik dengan mobil pribadi yang mengajak serta keluarganya, termasuk anak-anak, agar bisa berkumpul bersama anggota keluarga lainnya di kampung halaman. Mudik bersama anak dalam durasi berkendara yang panjang bukanlah hal yang mudah. Hal ini karena mereka bisa rewel sewaktu-waktu. Kompas.com membagikan tips untuk mengantisipasi hal-hal yang tak diinginkan saat mudik bersama anak. Simak selengkapnya. Artikel ini telah tayang di Kompas.com dengan judul "6 Tips Mudik Bersama Anak Naik Mobil Pribadi Agar Lancar dan Aman", Penulis : Desi Intan SariEditor : Ni Nyoman Wira WidyantiKompascom+ baca berita tanpa iklan',
      },
      {
        id: 3,
        title: 'Pelajari Apa Itu Sistem Penggerak Roda Depan dan Keunggulannya',
        slug: 'pelajari-apa-itu-sistem-penggerak-roda',
        createdDate: 'Jul 25, 2023',
        image: '/images/news/3.webp',
        category: 'Ulasan Produk',
        content:
          'Survei Kementerian Perhubungan (Kemenhub) menunjukkan, 40 juta orang diperkirakan akan mudik dengan naik kendaraan pribadi, guna merayakan Hari Raya Idul Fitri 1443 Hijriah di kampung halaman. "Berdasarkan survei Kementerian Perhubungan didapatkan hasil bahwa akan ada 23 juta mobil dan 17 juta sepeda motor yang akan digunakan oleh para pemudik," kata Presiden Joko Widodo, dikutip dari Kompas.com, Senin (18/4/2022). Adapun tidak sedikit pemudik dengan mobil pribadi yang mengajak serta keluarganya, termasuk anak-anak, agar bisa berkumpul bersama anggota keluarga lainnya di kampung halaman. Mudik bersama anak dalam durasi berkendara yang panjang bukanlah hal yang mudah. Hal ini karena mereka bisa rewel sewaktu-waktu. Kompas.com membagikan tips untuk mengantisipasi hal-hal yang tak diinginkan saat mudik bersama anak. Simak selengkapnya. Artikel ini telah tayang di Kompas.com dengan judul "6 Tips Mudik Bersama Anak Naik Mobil Pribadi Agar Lancar dan Aman", Penulis : Desi Intan SariEditor : Ni Nyoman Wira WidyantiKompascom+ baca berita tanpa iklan',
      },
      {
        id: 4,
        title: 'Inilah 5 Tips Melindungi Cat Mobil Agar Awet',
        slug: 'inilah-5-tips-melindungi-cat-mobil',
        createdDate: 'Jul 25, 2023',
        image: '/images/news/4.webp',
        category: 'Ulasan Produk',
        content:
          'Survei Kementerian Perhubungan (Kemenhub) menunjukkan, 40 juta orang diperkirakan akan mudik dengan naik kendaraan pribadi, guna merayakan Hari Raya Idul Fitri 1443 Hijriah di kampung halaman. "Berdasarkan survei Kementerian Perhubungan didapatkan hasil bahwa akan ada 23 juta mobil dan 17 juta sepeda motor yang akan digunakan oleh para pemudik," kata Presiden Joko Widodo, dikutip dari Kompas.com, Senin (18/4/2022). Adapun tidak sedikit pemudik dengan mobil pribadi yang mengajak serta keluarganya, termasuk anak-anak, agar bisa berkumpul bersama anggota keluarga lainnya di kampung halaman. Mudik bersama anak dalam durasi berkendara yang panjang bukanlah hal yang mudah. Hal ini karena mereka bisa rewel sewaktu-waktu. Kompas.com membagikan tips untuk mengantisipasi hal-hal yang tak diinginkan saat mudik bersama anak. Simak selengkapnya. Artikel ini telah tayang di Kompas.com dengan judul "6 Tips Mudik Bersama Anak Naik Mobil Pribadi Agar Lancar dan Aman", Penulis : Desi Intan SariEditor : Ni Nyoman Wira WidyantiKompascom+ baca berita tanpa iklan',
      },
      {
        id: 5,
        title: 'Inilah 5 Tips Melindungi Cat Mobil Agar Awet',
        slug: 'inilah-5-tips-melindungi-cat-mobil',
        createdDate: 'Jul 25, 2023',
        image: '/images/news/5.webp',
        category: 'Ulasan Produk',
        content:
          'Survei Kementerian Perhubungan (Kemenhub) menunjukkan, 40 juta orang diperkirakan akan mudik dengan naik kendaraan pribadi, guna merayakan Hari Raya Idul Fitri 1443 Hijriah di kampung halaman. "Berdasarkan survei Kementerian Perhubungan didapatkan hasil bahwa akan ada 23 juta mobil dan 17 juta sepeda motor yang akan digunakan oleh para pemudik," kata Presiden Joko Widodo, dikutip dari Kompas.com, Senin (18/4/2022). Adapun tidak sedikit pemudik dengan mobil pribadi yang mengajak serta keluarganya, termasuk anak-anak, agar bisa berkumpul bersama anggota keluarga lainnya di kampung halaman. Mudik bersama anak dalam durasi berkendara yang panjang bukanlah hal yang mudah. Hal ini karena mereka bisa rewel sewaktu-waktu. Kompas.com membagikan tips untuk mengantisipasi hal-hal yang tak diinginkan saat mudik bersama anak. Simak selengkapnya. Artikel ini telah tayang di Kompas.com dengan judul "6 Tips Mudik Bersama Anak Naik Mobil Pribadi Agar Lancar dan Aman", Penulis : Desi Intan SariEditor : Ni Nyoman Wira WidyantiKompascom+ baca berita tanpa iklan',
      },
    ],
  };

  return {
    props: {
      slug,
      article,
    },
  };
};

export default Detail;
