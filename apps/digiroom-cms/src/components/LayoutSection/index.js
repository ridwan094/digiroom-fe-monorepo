import React, { useState } from 'react';
import Accordion from './Accordion';
import { Text } from 'ui';

export default function LayoutSection({ items }) {
  return (
    <div className='bg-white max-w-[400px] max-h-[668px] mr-6'>
        <Text.Head5 className="p-4">Layout Selection</Text.Head5>
        <div className='border-b'/>
        {items.map((data, _i) => {
          return (
            <Accordion key={_i} index={_i} title={data.title} isActive={data.isActive}>
              {data.content}
            </Accordion>
          );
        })}
    </div>
  );
}
