import { Card, Tag } from 'ui/components/atoms';

const CardPromo = ({ title, slug, coverImg, startDate, endDate, tag, classNames }) => {
  return (
    <>
      <a href={`/promo/${slug}`}>
        <Card className={`border border-reliableBlack10 ${classNames}`}>
          {/* Tag */}
          <div className={`${!tag && 'pb-8'}`}>
            {tag && (
              <Tag className="rounded-br" severity={`${tag === 'Trending' ? 'info' : 'warn'}`}>
                {tag}
              </Tag>
            )}
          </div>

          <div className="pt-2 px-3 pb-5">
            <img className="w-full object-cover mb-4" src={coverImg} alt="Auto2000 promo image" />
            <p className="text-xs font-medium text-reliableBlack mb-6 lg:text-lg lg:font-semibold lg:mb-3">
              {title}
            </p>
            <p className="text-xs font-normal text-reliableBlack70 lg:text-sm">
              <span>{startDate}</span>
              <span> - </span>
              <span>{endDate}</span>
            </p>
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
  classNames: '',
};

export default CardPromo;
