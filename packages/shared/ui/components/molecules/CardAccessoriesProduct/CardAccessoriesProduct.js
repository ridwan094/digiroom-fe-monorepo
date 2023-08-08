import { Button } from '../../atoms';
import Card from '../../atoms/Card';

const CardAccessoriesProduct = ({
  title,
  coverImg,
  price,
  carTypes,
  discountPercentage,
  discountPrice,
}) => {
  return (
    <Card className="p-4 border border-[#D9D9D9] rounded">
      <img
        className="w-full mb-4 object-cover"
        src={coverImg}
        alt="Car accessories product image auto2000"
      />
      <p className="text-base font-semibold text-reliableBlack mb-1">{title}</p>
      {/* <p className="text-sm font-regular">
        {carTypes.length &&
          carTypes.map((car, index) => (
            <span key={index}>
              <span>{car}</span>
              {index + 1 !== carTypes.length && <span className="inline-block mx-1">|</span>}
            </span>
          ))}
      </p> */}

      {/* Card footer */}
      <div className="flex flex-col justify-start">
        <div className="flex gap-2 items-center">
          <p className="text-sm text-black font-semibold text-supportiveRed">{price}</p>
          {discountPercentage && (
            <p className="text-sm text-center text-black bg-[#BDF2EF] px-1">{discountPercentage}</p>
          )}
        </div>
        <p className="text-xs font-normal line-through text-reliableBlack">{discountPrice}</p>
      </div>
      <div className="flex justify-end">
        <Button type="button" size={'small'} variant={'bg-white border border-supportiveRed mt-2'}>
          <span className="text-supportiveRed font-bold">Add</span>
        </Button>
      </div>
    </Card>
  );
};

CardAccessoriesProduct.defaultProps = {
  title: '',
  coverImg: '',
  price: '',
  carTypes: [],
  discountPercentage: null,
};

export default CardAccessoriesProduct;
