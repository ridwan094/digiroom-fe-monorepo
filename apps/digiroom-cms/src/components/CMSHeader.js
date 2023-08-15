import { Dropdown, Avatar } from 'flowbite-react';

const CMSHeader = ({ sidebarCollapse }) => {
  return (
    <header
      className={`flex items-center justify-between fixed top-0 z-50 bg-white shadow py-6 px-8 transition-all duration-300 ${
        sidebarCollapse ? 'left-[100px] w-[calc(100%-100px)]' : 'left-[300px] w-[calc(100%-300px)]'
      }`}
    >
      <div>
        <img className="h-8" src="/header-logo.png" alt="Auto2000 logo image" />
      </div>

      <div>
        <Dropdown
          inline
          label={<Avatar rounded />}
          theme={{
            arrowIcon: 'ml-4 h-3 w-3',
          }}
        >
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </header>
  );
};

export default CMSHeader;
