import Card from "../../atoms/Card";

const CardPromo = ({ title, coverImg, startDate, endDate, tag }) => {
  return (
    <Card className="border md:border-b-2 md:border-t-0 md:border-r-0 md:border-l-0 border-reliableBlack20 md:mb-4 transition-all ease-in-out duration-300 hover:border-reliableBlack60 md:hover:scale-[1.02]">
      {/* Tag */}
      <div className={`${!tag && "pb-8"}`}>{tag}</div>

      <div className="p-2 lg:px-[10px] lg:pb-[10px]">
        <img
          className="w-full object-cover mb-[10px] overflow rounded-t-md"
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
  );
};

CardPromo.defaultProps = {
  title: "",
  coverImg: "",
  startDate: "",
  endDate: "",
  tag: null,
};

export default CardPromo;
