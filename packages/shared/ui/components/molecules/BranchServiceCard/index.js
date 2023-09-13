import { Card, Text } from '../../atoms';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const BranchServiceCard = ({ title, subTitle, icons, textButton }) => {
  return (
    <Card className="flex flex-row justify-between gap-2">
      <img
        src={icons}
        alt="branch service icon"
        style={{ width: 100, height: 100 }}
        className="px-4 py-4 bg-reliableBlack5"
      />

      <div className="flex flex-col gap-2">
        <Text.Head4 className="text-reliableBlack90 md-max-w:text-head5" isClamp maxLines={1}>
          {title ? title : '-'}
        </Text.Head4>
        <Text.BodyMedium className="text-sm text-reliableBlack" isClamp maxLines={3}>
          {subTitle ? subTitle : '-'}
        </Text.BodyMedium>
        <Link href="/" className="flex items-center gap-4">
          <Text.BodyLarge>{textButton ? textButton : '-'}</Text.BodyLarge>
          <FiArrowRight size={20} />
        </Link>
      </div>
    </Card>
  );
};

BranchServiceCard.defaultProps = {
  title: '',
  subTitle: '',
  icons: '',
  textButton: '',
};

export default BranchServiceCard;
