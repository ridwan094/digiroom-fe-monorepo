import { Button, Tag } from 'ui/components/atoms';
import { MdShare, MdOutlineCalendarMonth } from 'react-icons/md';

const DetailPromoBodySection = ({ promo }) => {
  return (
    <section className="my-4">
      <div className="container lg:p-0">
        {/* Tag */}
        <Tag className="hidden rounded mb-2 lg:inline-block" severity="warn">
          <span className="text-lg font-medium">{promo.tag}</span>
        </Tag>

        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-base font-bold uppercase text-reliableBlack pr-4 lg:text-3xl">
            {promo.title}
          </h1>
          <Button type="button" variant={'bg-reliableBlack10'}>
            <MdShare size={24} color="#4F4C4D" />
          </Button>
        </div>

        {/* Date */}
        <div className="mb-5">
          <p className="text-xl font-semibold mb-2 hidden lg:block">Periode Promosi</p>
          <div className="flex items-center gap-2 text-reliableBlack90 text-sm lg:text-base">
            <MdOutlineCalendarMonth size={18} />
            <p>
              {promo.startDate} - {promo.endDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-5">
          <p className="text-base font-semibold text-reliableBlack mb-2 lg:text-xl">
            Detail Promosi
          </p>
          {promo.content.split('</p>').map((v, idx) => (
            <div
              className="text-sm font-normal leading-relaxed text-reliableBlack mb-2 lg:text-lg"
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
          <p className="text-sm font-normal leading-relaxed text-reliableBlack lg:text-lg">
            {promo.rules}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailPromoBodySection;
