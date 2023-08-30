import { useState } from 'react';
import Modal from '../Modal';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share';
import { MdContentCopy, MdOutlineCheck } from 'react-icons/md';
import Whatsapp from '../Icons/Whatsapp';
import FacebookIcon from '../Icons/FacebookIcon';
import XLogo from '../Icons/Xlogo';

export default function ModalShare({ visible, link, onClose }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(link);

    // Set is copied to false after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  };

  const title = 'Kupas Tuntas Fitur Safety Toyota CHR Hybrid Ini Bikin Makin Pengen Beli';
  return (
    <Modal
      visible={visible}
      header={true}
      onClose={onClose}
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

      <div className="relative">
        <input
          className="w-full p-3 text-base text-reliableBlack70 bg-transparent border border-reliableBlack20 rounded-[5px]"
          value={link}
          disabled
        />
        <div className="absolute inset-y-0 right-2 top-1/2 transform -translate-y-1/2">
          {!isCopied ? (
            <button onClick={handleCopyLink}>
              <MdContentCopy size={22} color="#E1E1E1" />
            </button>
          ) : (
            <MdOutlineCheck size={22} color="#E1E1E1" />
          )}
        </div>
      </div>
    </Modal>
  );
}
