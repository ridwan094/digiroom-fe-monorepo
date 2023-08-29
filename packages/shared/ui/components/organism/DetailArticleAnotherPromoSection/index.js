import { OtherPromo } from 'ui/components/molecules';
import { Button } from '../../atoms';
import { MdArrowForward } from 'react-icons/md';

const DetailArticleAnotherPromoSection = ({ anotherPromo }) => {
  return (
    <section className="my-4 lg:my-16">
      <div className="container lg:p-0">
        <div className="flex items-center justify-between mb-1 lg:mb-6">
          <h2 className="text-base font-bold uppercase text-reliableBlack lg:text-2xl">
            Promo Terkait
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
      </div>
    </section>
  );
};

export default DetailArticleAnotherPromoSection;
