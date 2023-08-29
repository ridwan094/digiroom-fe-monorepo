import { MdLink } from 'react-icons/md';
import { Whatsapp, FacebookIcon, XIcon, TiktokIcon } from 'ui/components/atoms';

const SocialMediaLinksSection = () => {
  return (
    <section className="my-[30px] px-8 py-4 bg-reliableBlack3 lg:my-0 lg:mt-16">
      <div className="flex items-center justify-between gap-12 lg:justify-center">
        <Whatsapp size="22" fill="#231F20" />
        <FacebookIcon size="22" fill="#231F20" />
        <XIcon size="22" fill="#231F20" />
        <TiktokIcon size="22" fill="#231F20" />
        <MdLink size="28" fill="#231F20" />
      </div>
    </section>
  );
};

export default SocialMediaLinksSection;
