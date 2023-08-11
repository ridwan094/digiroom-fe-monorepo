import { Card, Tag } from 'ui/components/atoms';

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
  return (
    <>
      <a href="/detail-promo">
        <Card className="border border-reliableBlack10">
          {/* Tag */}
          <div className={`${!tag && 'pb-8'}`}>
            {tag && <Tag className="rounded-br">{tag}</Tag>}
          </div>

          <div className="p-[10px]">
            <img className="w-full object-cover mb-4" src={coverImg} alt="Auto2000 promo image" />
            <p className="text-xs font-medium text-reliableBlack mb-6 lg:text-lg">{title}</p>
            <p className="text-xs font-regular text-reliableBlack70 lg:text-base">
              <span>{startDate}</span>
              <span> - </span>
              <span>{endDate}</span>
            </p>
          </div>
        </div>
      </Card>
      </a>
    </>
  );
};

CardPromo.defaultProps = {
  title: '',
  coverImg: '',
  startDate: '',
  endDate: '',
  tag: null,
};

export default CardPromo;
