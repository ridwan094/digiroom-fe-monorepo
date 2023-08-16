import { useRouter } from 'next/router';
import Link from 'next/link';
import { Sidebar, Tooltip } from 'flowbite-react';
import {
  MdWork,
  MdTrendingUp,
  MdLocalOffer,
  MdInsertDriveFile,
  MdDirectionsCar,
  MdChevronLeft,
  MdChevronRight,
  MdList,
  MdQuestionAnswer,
} from 'react-icons/md';

const customTheme = {
  root: {
    base: 'h-full border-r border-gray-200',
    collapsed: {
      on: 'w-16',
      off: 'w-64',
    },
    inner:
      'h-full bg-white overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800',
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
          <Tooltip
            className={`${!sidebarCollapse && 'hidden'}`}
            content="Master Data"
            placement="right"
            theme={{ target: 'w-full' }}
          >
            <Sidebar.Item
              className="text-reliableBlack60"
              href="/master-data"
              as={Link}
              icon={MdWork}
            >
              {!sidebarCollapse && <p>Master Data</p>}
            </Sidebar.Item>
          </Tooltip>
          <Tooltip
            className={`${!sidebarCollapse && 'hidden'}`}
            content="Dashboard"
            placement="right"
            theme={{ target: 'w-full' }}
          >
            <Sidebar.Item
              className="mt-4 text-reliableBlack60"
              href="/dashboard"
              as={Link}
              icon={MdTrendingUp}
            >
              {!sidebarCollapse && <p>Dashboard</p>}
            </Sidebar.Item>
          </Tooltip>
          <Sidebar.Collapse
            className="mt-4 text-reliableBlack60"
            icon={MdLocalOffer}
            label={!sidebarCollapse ? 'Promo' : ''}
          >
            <Tooltip
              className={`${!sidebarCollapse && 'hidden'}`}
              content="List Promo"
              placement="right"
              theme={{ target: 'w-full' }}
            >
              <Sidebar.Item
                className="text-reliableBlack60"
                href="/dashboard-promo"
                as={Link}
                icon={MdList}
              >
                {!sidebarCollapse && <p>List Promo</p>}
              </Sidebar.Item>
            </Tooltip>
            <Tooltip
              className={`${!sidebarCollapse && 'hidden'}`}
              content="FAQ Promo"
              placement="right"
              theme={{ target: 'w-full' }}
            >
              <Sidebar.Item
                className="text-reliableBlack60"
                href="/promo/faq"
                as={Link}
                icon={MdQuestionAnswer}
              >
                {!sidebarCollapse && <p>FAQ Promo</p>}
              </Sidebar.Item>
            </Tooltip>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            className="mt-4 text-reliableBlack60"
            icon={MdInsertDriveFile}
            label={!sidebarCollapse ? 'Articles' : ''}
          >
            <Tooltip
              className={`${!sidebarCollapse && 'hidden'}`}
              content="List Article"
              placement="right"
              theme={{ target: 'w-full' }}
            >
              <Sidebar.Item
                className="text-reliableBlack60"
                href="/article/list"
                as={Link}
                icon={MdList}
              >
                {!sidebarCollapse && 'List Article'}
              </Sidebar.Item>
            </Tooltip>
            <Tooltip
              className={`${!sidebarCollapse && 'hidden'}`}
              content="FAQ Article"
              placement="right"
              theme={{ target: 'w-full' }}
            >
              <Sidebar.Item
                className="text-reliableBlack60"
                href="/article/faq"
                as={Link}
                icon={MdQuestionAnswer}
              >
                {!sidebarCollapse && 'FAQ Article'}
              </Sidebar.Item>
            </Tooltip>
          </Sidebar.Collapse>
          <Tooltip
            className={`${!sidebarCollapse && 'hidden'}`}
            content="Product Knowledge"
            placement="right"
            theme={{ target: 'w-full' }}
          >
            <Sidebar.Item
              className="mt-4 text-reliableBlack60"
              href="/product-knowledge"
              as={Link}
              icon={MdDirectionsCar}
            >
              {!sidebarCollapse && <p>Product Knowledge</p>}
            </Sidebar.Item>
          </Tooltip>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CMSSidebar;
