import React from 'react';
import Modal from '../Modal';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import Whatsapp from '../Icons/Whatsapp';
import FacebookIcon from '../Icons/FacebookIcon';
import XLogo from '../Icons/Xlogo';

export default function ModalShare({visible, close}) {
  const link = 'https://auto2000.co.id/product-knowledge/mobil-avanza-matic';
  const title = 'Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli';
  return (
    <Modal
      visible={visible}
      header={true}
      onClose={close}
      bodyClassName="bg-gray10 p-6"
      className={'!h-[240px] !w-[622px]'}
      title={'Bagikan'}
    >
      <div className="flex items-center gap-[26px] justify-center mb-[20px]">
        <WhatsappShareButton url={link} title={title}>
          <Whatsapp fill="#000" />
        </WhatsappShareButton>
        <FacebookShareButton url={link} quote={title} hashtag={'#toyota'}>
          <FacebookIcon fill="#000" />
        </FacebookShareButton>
        <TwitterShareButton url={link} title={title}>
          <XLogo fill="#000" />
        </TwitterShareButton>
      </div>
      <div className="flex-col border rounded-[5px] border-[#D3D2D2] p-3 text-[#D3D2D2]">
        https://auto2000.co.id/product-knowledge/mobil-avanza-matic
      </div>
    </Modal>
  );
}
