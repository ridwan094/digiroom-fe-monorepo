import Layout from 'ui/components/templates/Layout';
import { BreadCrumbs } from 'ui/components/molecules';
import { ListArtikel } from 'ui/components/organism';
import Image from 'next/image';
import { newsList } from '../constants/news';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative">
      <Layout>
        <div className="hidden md:block border-b border-gray-100 py-1 mb-4">
          <div className="px-16">
            <BreadCrumbs />
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
                <Image
                  src="/images/banner.webp"
                  alt=""
                  objectFit="cover"
                  objectPosition="0 0"
                  fill
                />
                <h3 className="absolute text-white bottom-16 left-14 text-4xl font-bold w-[535px]">
                  Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli
                </h3>
              </Link>
            </div>
          </div>
          {/* List Artikel Desktop */}
          <div className="py-4">
            <ListArtikel itemList={newsList} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
