import React from 'react';
import LayoutForm from '@/components/LayoutForm';
import LayoutSection from '@/components/LayoutSection';
import { BreadCrumbs, Text } from 'ui';
import LayoutPagePromo from '@/components/LayoutSection/LayoutPagePromo';

export default function PromoCms() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <Text.Head4>ADD PROMO</Text.Head4>
        <BreadCrumbs
          border={false}
          items={[
            { name: 'Dashboard', path: '/' },
            { name: 'List Promo', path: '/' },
            { name: 'Add Promo', path: '/' },
          ]}
        />
      </div>
      <div className="flex w-full">
        <LayoutSection
          items={[
            {
              id: 1,
              title: 'Layout 1',
              content: <LayoutPagePromo/>,
              isActive: true,
            },
            {
              id: 2,
              title: 'Layout 2',
              content: 'Content 2',
              isActive: false,
            },
            {
              id: 3,
              title: 'Layout 3',
              content: 'Content 3',
              isActive: false,
            },
          ]}
        />
        <LayoutForm />
      </div>
    </div>
  );
}
