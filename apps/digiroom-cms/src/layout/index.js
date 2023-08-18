import { useState } from 'react';
import CMSSidebar from '@/components/CMSSidebar';
import Breadcrumb from '@/components/Breadcrumb';
import CMSHeader from '@/components/CMSHeader';
import { useRouter } from 'next/router';

const getLastSegment = (path) => {
  const segments = path.split('/').filter(segment => segment !== '');
  return segments[segments.length - 1] || null;
};

const CMSLayout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;
  const lastSegment = getLastSegment(asPath);
  const nameLayout = lastSegment !== null ? lastSegment.replace(/-/g, ' ').toUpperCase() : 'Dashboard';
  
  const [sidebarCollapse, setSidebarCollapse] = useState(false);

  return (
    <>
      <CMSHeader sidebarCollapse={sidebarCollapse} />

      <main className="relative">
        <CMSSidebar
          sidebarCollapse={sidebarCollapse}
          onToggle={(value) => setSidebarCollapse(value)}
        />
        <div
          className="bg-gray-100 text-gray-800"
          style={{
            marginLeft: `${sidebarCollapse ? '100px' : '300px'}`,
            minHeight: '100vh',
            transition: 'margin 300ms',
          }}
        >
          <div className="container relative" style={{ padding: '120px 32px 16px' }}>
            <div className='flex justify-between'>
              <p className='text-2xl font-bold'>{nameLayout}</p>

              <Breadcrumb />
            </div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default CMSLayout;
