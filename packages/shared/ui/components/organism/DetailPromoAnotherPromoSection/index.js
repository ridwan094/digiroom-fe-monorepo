import { MdArrowForward } from 'react-icons/md';
import { Button } from 'ui/components/atoms';
import { OtherPromo } from 'ui/components/molecules';

const DetailPromoAnotherPromoSection = ({ anotherPromo }) => {
  return (
    <section className="my-4 lg:my-16">
      <div className="flex items-center justify-between mb-1 lg:mb-6">
        <h2 className="text-base font-bold uppercase text-reliableBlack lg:text-2xl">
          Promo Lainnya
        </h2>

        <Button className="bg-transparent text-reliableBlack text-xs font-semibold uppercase lg:text-base lg:font-medium">
          <span className="flex items-center gap-2 lg:gap-4">
            Lihat semua
            <MdArrowForward color="#CE181E" size={18} />
          </span>
        </Button>
      </div>

      {/* Another promo card */}
      <OtherPromo items={anotherPromo} />
    </section>
  );
};

export default DetailPromoAnotherPromoSection;
