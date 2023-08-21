import { MdLink } from 'react-icons/md';
import { Whatsapp, FacebookIcon, TwitterIcon } from 'ui/components/atoms';

const SocialMediaLinksSection = () => {
  return (
    <section className="my-[30px] py-4 bg-reliableBlack3 lg:hidden">
      <div className="container px-8 flex items-center justify-between">
        <Whatsapp size="22" fill="#231F20" />
        <FacebookIcon size="22" fill="#231F20" />
        <TwitterIcon size="22" fill="#231F20" />
        <MdLink size="28" fill="#231F20" />
      </div>
    </section>
  );
};

export default SocialMediaLinksSection;
