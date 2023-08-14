import Layout from 'ui/components/templates/Layout';
import { BreadCrumbs } from 'ui/components/molecules';
import { ListArtikel } from 'ui/components/organism';
import Image from 'next/image';
import { FAQS, newsList } from '../constants/news';
import Link from 'next/link';
import { Accordion } from 'ui';

export default function Home() {
  return (
    <Layout>
      <div className="hidden md:block border-b border-gray-100 py-1 mb-4">
        <div className="px-16">
          <BreadCrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'News', path: '/' },
            ]}
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" px-4 md:px-16 pt-2">
          <h2 className="text-reliableBlack text-2xl font-bold mb-2">Berita & Tips</h2>
          <p className="text-reliableBlack font-medium mb-6">
            Dapatkan informasi terkini melalui berita eksklusif dan tips dari Auto2000
          </p>
          <div className="hidden md:block relative aspect-video">
            <Link href="/detail">
              <Image src="/images/banner.webp" alt="" objectFit="cover" objectPosition="0 0" fill />
              <h3 className="absolute text-white bottom-16 left-14 text-4xl font-bold w-[535px]">
                Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli
              </h3>
            </Link>
          </div>
        </div>
        {/* List Artikel Desktop */}
        <div className="px-4 mb-2">
          <ListArtikel itemList={newsList} />
        </div>

        {/* Info promo section */}
        <section className="py-4 lg:py-8 lg:px-16">
          <div className="px-4 text-reliableBlack">
            <h2 className="text-base font-bold uppercase mb-4 lg:text-2xl">
              Informasi Berita Toyota
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
        <section className="py-4 lg:py-8 lg:px-16">
          <div className="container px-4">
            <h2 className="text-base text-reliableBlack font-bold uppercase mb-4 lg:text-2xl">
              <span>FAQ TIPS TOYOTA</span>
            </h2>
            <div className="px-4 text-reliableBlack ">
              {FAQS.map((faq, index) => (
                <Accordion key={index} title={faq.title}>
                  {faq.content}
                </Accordion>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
