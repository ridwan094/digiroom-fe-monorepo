import { MdShare, MdOutlineCalendarMonth } from 'react-icons/md';
import { Button } from 'ui/components/atoms';

const DetailArticleBodySection = ({ article }) => {
  return (
    <section className="my-[30px] mx-4 lg:mx-0 lg:mt-8">
      <div
      // className="container"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-5 lg:mb-[30px]">
          <h1 className="text-sm font-semibold text-reliableBlack lg:text-4xl">{article.title}</h1>
          <Button type="button" variant={'bg-reliableBlack10'}>
            <MdShare size={24} color="#4F4C4D" />
          </Button>
        </div>

        {/* Date */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <MdOutlineCalendarMonth size={18} />
            <p className="text-sm text-reliableBlack80 lg:text-base">
              <span className="inline-block mr-1">Diterbitkan</span>
              {article.createdDate}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          {article.content.split('</p>').map((v, idx) => (
            <div
              className="text-sm font-normal leading-relaxed text-reliableBlack mb-3"
              key={idx}
              dangerouslySetInnerHTML={{ __html: v }}
            ></div>
          ))}
        </div>

        {/* Additional info */}
        <div>
          <p className="text-base font-bold uppercase text-reliableBlack mb-4 lg:text-xl">
            Pilih dan Miliki Toyota RUSH yang Anda inginkan
          </p>
          <p className="text-sm font-normal leading-relaxed text-reliableBlack">
            Informasi dalam artikel ini dapat berubah dan berbeda menyesuaikan dengan perkembangan,
            situasi, strategi bisnis, kemajuan teknologi, dan kebijakan tertentu tanpa pemberitahuan
            sebelumnya.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailArticleBodySection;
