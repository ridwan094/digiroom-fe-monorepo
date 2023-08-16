import { useState } from 'react';
import CMSSidebar from '@/components/CMSSidebar';
import CMSHeader from '@/components/CMSHeader';

const CMSLayout = ({ children }) => {
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
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default CMSLayout;
