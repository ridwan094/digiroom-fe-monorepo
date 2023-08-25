import { Button } from 'ui/components/atoms';
import { MdShare, MdOutlineCalendarMonth } from 'react-icons/md';

const DetailProductKnowledgeBodySection = ({ product }) => {
  return (
    <section className="my-4 lg:mt-8">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-5 lg:mb-2">
          <h1 className="text-base font-bold uppercase text-reliableBlack lg:text-3xl">
            {product.title}
          </h1>
          <Button type="button" variant={'bg-reliableBlack10'}>
            <MdShare size={24} color="#4F4C4D" />
          </Button>
        </div>

        {/* Date */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-reliableBlack90 text-sm lg:text-base">
            <MdOutlineCalendarMonth size={18} />
            <p>Diterbitkan {product.issuedDate}</p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          {product.content.split('</p>').map((v, idx) => (
            <div
              className="text-sm lg:text-lg font-regular leading-relaxed text-reliableBlack mb-3"
              dangerouslySetInnerHTML={{ __html: v }}
              key={idx}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailProductKnowledgeBodySection;
