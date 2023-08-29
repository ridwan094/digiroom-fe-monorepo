import { Whatsapp, FacebookIcon, XIcon, TiktokIcon } from 'ui/components/atoms';
import XLogo from '../../atoms/Icons/Xlogo';
import { PiLinkSimpleBold } from 'react-icons/pi';

const SocialMediaLinksSection = () => {
  return (
    <section className="py-4 lg:py-8 bg-reliableBlack3">
      <div className="px-8 flex items-center justify-center space-x-12 lg:space-x-[80px]">
        <Whatsapp size="23" fill="#231F20" />
        <FacebookIcon size="23" fill="#231F20" />
        <XLogo size="23" fill="#231F20" />
        <TiktokIcon size="23" fill="#231F20" />
        <PiLinkSimpleBold size="23" fill="#231F20" />
      </div>
    </section>
  );
};

export default SocialMediaLinksSection;
