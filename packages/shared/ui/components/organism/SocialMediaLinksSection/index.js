import { FaTiktok } from 'react-icons/fa';
import { PiLinkSimpleBold } from 'react-icons/pi';
import { Whatsapp, FacebookIcon, TwitterIcon } from 'ui/components/atoms';
import XLogo from '../../atoms/Icons/Xlogo';

const SocialMediaLinksSection = () => {
  return (
    <section className="py-4 lg:py-8 bg-reliableBlack3">
      <div className="px-8 flex items-center justify-center space-x-12 lg:space-x-[80px]">
        <Whatsapp size="22" fill="#231F20" />
        <FacebookIcon size="22" fill="#231F20" />
        <XLogo size="22" fill="#231F20" />
        <FaTiktok size="22" fill="#231F20" />
        <PiLinkSimpleBold size="28" fill="#231F20" />
      </div>
    </section>
  );
};

export default SocialMediaLinksSection;
