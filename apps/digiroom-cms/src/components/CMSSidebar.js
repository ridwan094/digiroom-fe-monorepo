import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Sidebar } from 'flowbite-react';
import {
  MdWork,
  MdTrendingUp,
  MdLocalOffer,
  MdInsertDriveFile,
  MdDirectionsCar,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';

const customTheme = {
  root: {
    base: 'border-r border-gray-200',
    inner: 'bg-white h-full',
  },
  logo: {
    base: '',
    img: 'mr-0 h-full w-full sm:h-full #{!important}',
  },
};

const CMSSidebar = ({ sidebarCollapse, onToggle }) => {
  const router = useRouter();

  return (
    <Sidebar
      id="navSidebar"
      className={`fixed h-full top-0 left-0 transition-all duration-300 ${
        sidebarCollapse ? 'w-[100px]' : 'w-[300px]'
      }`}
      aria-label="Auto2000 CMS Sidebar"
      theme={customTheme}
    >
      <div
        className={`flex items-center mb-12 px-6 pt-6 ${
          sidebarCollapse ? 'justify-center' : 'justify-between'
        }`}
      >
        {!sidebarCollapse && (
          <Link href="/">
            <img className="h-12" src="/images/Auto2000.webp" alt="Auto2000 logo brand image" />
          </Link>
        )}

        <button onClick={() => onToggle(!sidebarCollapse)}>
          {sidebarCollapse ? <MdChevronRight size={22} /> : <MdChevronLeft size={22} />}
        </button>
      </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            className={`mb-4 p-3 rounded-none text-reliableBlack60 hover:bg-[#F5F5F5] ${
              router.pathname === '/master-data' && 'bg-[#F5F5F5] text-reliableBlack90'
            }`}
            as={Link}
            href="/master-data"
          >
            <p
              className={`flex gap-3 items-center font-semibold uppercase ${
                sidebarCollapse && 'justify-center'
              }`}
            >
              <MdWork size={20} />
              {!sidebarCollapse && <span>Master Data</span>}
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            className={`mb-4 p-3 rounded-none text-reliableBlack60 hover:bg-[#F5F5F5] ${
              router.pathname === '/dashboard' && 'bg-[#F5F5F5] text-reliableBlack90'
            }`}
            as={Link}
            href="/dashboard"
          >
            <p
              className={`flex gap-3 items-center font-semibold uppercase ${
                sidebarCollapse && 'justify-center'
              }`}
            >
              <MdTrendingUp size={20} />

              {!sidebarCollapse && <span>Dashboard</span>}
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            className={`mb-4 p-3 rounded-none text-reliableBlack60 hover:bg-[#F5F5F5] ${
              router.pathname === '/promo' && 'bg-[#F5F5F5] text-reliableBlack90'
            }`}
            as={Link}
            href="/promo"
          >
            <p
              className={`flex gap-3 items-center font-semibold uppercase ${
                sidebarCollapse && 'justify-center'
              }`}
            >
              <MdLocalOffer size={20} />

              {!sidebarCollapse && <span>Promo</span>}
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            className={`mb-4 p-3 rounded-none text-reliableBlack60 hover:bg-[#F5F5F5] ${
              router.pathname === '/articles' && 'bg-[#F5F5F5] text-reliableBlack90'
            }`}
            as={Link}
            href="/articles"
          >
            <p
              className={`flex gap-3 items-center font-semibold uppercase ${
                sidebarCollapse && 'justify-center'
              }`}
            >
              <MdInsertDriveFile size={20} />

              {!sidebarCollapse && <span>Articles</span>}
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            className={`mb-4 p-3 rounded-none text-reliableBlack60 hover:bg-[#F5F5F5] ${
              router.pathname === '/product-knowledge' && 'bg-[#F5F5F5] text-reliableBlack90'
            }`}
            as={Link}
            href="/product-knowledge"
          >
            <p
              className={`flex gap-3 items-center font-semibold uppercase ${
                sidebarCollapse && 'justify-center'
              }`}
            >
              <MdDirectionsCar size={20} />

              {!sidebarCollapse && <span>Product Knowledge</span>}
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CMSSidebar;
