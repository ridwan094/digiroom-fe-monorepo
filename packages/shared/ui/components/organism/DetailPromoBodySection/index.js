import { Button } from 'ui/components/atoms';
import { MdShare, MdOutlineCalendarMonth } from 'react-icons/md';

const DetailPromoBodySection = ({ promo }) => {
  return (
    <section className="my-4 lg:mt-8">
      <div className="container">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
          <h1 className="text-base font-bold uppercase text-reliableBlack lg:text-[32px]">
            {promo.title}
          </h1>
          <Button type="button" variant={'bg-reliableBlack10'}>
            <MdShare size={24} color="#4F4C4D" />
          </Button>
        </div>

        {/* Date */}
        <div className="mb-8">
          <p className="text-xl font-semibold mb-2 hidden lg:block">Periode Promosi</p>
          <div className="flex items-center gap-2 text-reliableBlack90 text-sm lg:text-base">
            <MdOutlineCalendarMonth size={18} />
            <p>
              {promo.startDate} - {promo.endDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          <p className="text-base font-semibold text-reliableBlack mb-2 lg:text-xl">
            Detail Promosi
          </p>
          {promo.content.split('</p>').map((v, idx) => (
            <div
              className="text-sm font-regular leading-relaxed text-reliableBlack mb-3"
              dangerouslySetInnerHTML={{ __html: v }}
              key={idx}
            ></div>
          ))}
        </div>

        {/* Rules and agreement */}
        <div>
          <p className="text-base font-semibold text-reliableBlack mb-2 lg:text-xl">
            Syarat dan Ketentuan
          </p>
          <p className="text-sm font-regular leading-relaxed text-reliableBlack mb-3">
            {promo.rules}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailPromoBodySection;
