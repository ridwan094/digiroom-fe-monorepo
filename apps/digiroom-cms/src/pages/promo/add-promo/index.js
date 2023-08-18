import React from 'react';
import LayoutForm from '@/components/LayoutForm';
import LayoutSection from '@/components/LayoutSection';
import { BreadCrumbs, Text } from 'ui';
import LayoutPagePromo from '@/components/LayoutSection/LayoutPagePromo';

export default function PromoCms() {
  return (
    <div className="pt-5">
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
