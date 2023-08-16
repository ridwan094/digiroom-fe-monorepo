import React from 'react';
import { Text } from 'ui';
import { MdOutlineCalendarMonth } from 'react-icons/md';

export default function LayoutPagePromo() {
  return (
    <div>
      <img src="https://placehold.co/368x220" className="mb-2" />
      <Text.BodySmall className="font-bold mb-3">TITLE PAGE</Text.BodySmall>
      <Text.BodySmall className="mb-2">Periode Promosi</Text.BodySmall>
      <div className="flex items-center mb-2">
        <MdOutlineCalendarMonth />
        <Text.BodySmall className="mx-2">Date published - Date expired </Text.BodySmall>
        <button className="bg-[#E9E9E9] text-[12px] px-2">Countdown</button>
      </div>
      <Text.BodySmall className="font-semibold mb-1">DETAIL PROMOSI</Text.BodySmall>
      <Text.BodySmall>
        Lorem ipsum dolor sit amet consectetur. Ac volutpat enim vestibulum molestie pharetra amet
        id. Semper id faucibus viverra id. Eget ac dictumst tristique nullam sed risus interdum
        massa. Imperdiet dolor scelerisque ut elementum amet proin amet velit
      </Text.BodySmall>
    </div>
  );
}
