import Link from 'next/link';
import { Sidebar, Tooltip } from 'flowbite-react';
import {
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import menu from '@/constants/menu';

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
          {menu.map((item, index) => {
            return (
              <div key={index}>
                {!item.subMenu && (
                  <Tooltip
                    className={`${!sidebarCollapse && 'hidden'}`}
                    content={item.name}
                    placement="right"
                    theme={{ target: 'w-full' }}
                  >
                    <Sidebar.Item
                      className="text-reliableBlack60"
                      href={item.path}
                      as={Link}
                      icon={item.icon}
                    >
                      {!sidebarCollapse && <p>{item.name}</p>}
                    </Sidebar.Item>
                  </Tooltip>
                )}
                
                {item.subMenu && (
                  <Sidebar.Collapse
                    className="mt-4 text-reliableBlack60"
                    icon={item.icon}
                    label={!sidebarCollapse ? item.name : ''}
                  >
                  {item.subMenu.map((subMenu, indexSubMenu) => (
                    <Tooltip
                      key={indexSubMenu}
                      className={`${!sidebarCollapse && 'hidden'}`}
                      content={subMenu.name}
                      placement="right"
                      theme={{ target: 'w-full' }}
                    >
                      <Sidebar.Item
                        className="text-reliableBlack60"
                        href={subMenu.path}
                        as={Link}
                        icon={subMenu.icon}
                      >
                        {!sidebarCollapse && <p>{subMenu.name}</p>}
                      </Sidebar.Item>
                    </Tooltip>
                  ))}
              </Sidebar.Collapse>
              )}
            </div>
            )
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default CMSSidebar;
