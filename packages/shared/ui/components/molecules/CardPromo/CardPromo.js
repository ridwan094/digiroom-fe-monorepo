import Card from '../../atoms/Card';

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
  return (
    <>
      <a href="/detail-promo">
      <Card className="border border-reliableBlack310 transition-all ease-in-out duration-300 md:hover:scale-[1.02]">
        <div className="relative">
          <div className='pb-6'>
            {tag && (
              <div className="absolute top-0 right-0">
                <span className="text-xs font-regular text-white">{tag}</span>
              </div>
            )}
          </div>
          <div className="p-2 lg:px-[10px] lg:pb-[10px]">
            {/* <div className='pb-8'></div> */}
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
