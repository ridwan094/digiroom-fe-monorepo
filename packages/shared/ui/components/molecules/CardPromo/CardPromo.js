import Card from '../../atoms/Card';

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
  return (
    <>
      <a href="/detail-promo">
        <Card className="border border-reliableBlack310 transition-all ease-in-out duration-300 md:hover:scale-[1.02]">
          {/* Tag */}
          <div className={`${!tag && 'pb-8'}`}>{tag}</div>

          <div className="p-2 lg:px-[10px] lg:pb-[10px]">
            <img
              className="w-full object-cover mb-[10px]"
              src={coverImg}
              alt="Auto2000 promo image"
            />
            <p className="text-xs font-medium text-reliableBlack mb-6 lg:text-base">{title}</p>
            <p className="text-xs text-reliableBlack70 lg:text-base">
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
};

export default CardPromo;
