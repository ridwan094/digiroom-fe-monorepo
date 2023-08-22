import { Dropdown, Avatar } from 'flowbite-react';
import { useAuth } from '@/helpers/utils/AuthContext';
import { useRouter } from 'next/router';

const CMSHeader = ({ sidebarCollapse }) => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header
      className={`flex items-center justify-between fixed top-0 z-50 bg-white shadow py-6 px-8 transition-all duration-300 ${
        sidebarCollapse ? 'left-[100px] w-[calc(100%-100px)]' : 'left-[300px] w-[calc(100%-300px)]'
      }`}
    >
      <div>
        <img className="h-8" src="/images/logo-beyond.webp" alt="Auto2000 logo brand image" />
      </div>

      <div>
        <Dropdown
          inline
          label={<Avatar rounded />}
          theme={{
            arrowIcon: 'ml-4 h-3 w-3',
          }}
        >
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </header>
  );
};

export default CMSHeader;
