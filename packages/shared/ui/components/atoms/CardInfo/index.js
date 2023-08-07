import Card from '../Card/Card';
import Text from '../Text';
import { usFlag } from '../../../assets/images';

const CardInfo = ({ data, containerClassname }) => {
  return (
    <div class={containerClassname}>
      <div class="flex flex-row flex-wrap items-stretch gap-4">
        {data?.map((items, index) => {
          const flexMainMenu = items.mainInfo
            ? 'basis-1/2 border-b border-reliableBlack20'
            : 'flex-1 border-b border-reliableBlack20';
          return (
            <Card className={flexMainMenu} key={index}>
              <div class="block bg-white overflow-hidden h-full">
                <div className="bg-red-500">
                  <img src={usFlag} className="h-64 w-full object-cover" />
                </div>

                <div class="mx-4 flex flex-col gap-4 my-4">
                  <Text.Head3 maxLines={2} isClamp={true}>
                    {items?.title ? items?.title : '-'}
                  </Text.Head3>
                  <Text.BodySmall>{items?.datePost ? items?.datePost : '-'}</Text.BodySmall>
                  <Text.BodyMedium maxLines={3} isClamp={true}>
                    {items?.subtitle ? items?.subtitle : '-'}
                  </Text.BodyMedium>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

CardInfo.defaultProps = {
  data: [],
  containerClassname: '',
};
export default CardInfo;
