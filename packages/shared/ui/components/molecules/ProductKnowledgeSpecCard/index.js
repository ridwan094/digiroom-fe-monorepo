import React from 'react';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';
import { Button } from '../../atoms';

const ProductKnowledgeSpecCard = ({ title, caption, specList }) => {
  return (
    <Card>
      <div className="lg:bg-reliableBlack5 lg:p-5 rounded">
        <Text.BodyMediumSemibold className="mb-4 lg:text-2xl lg">{title}</Text.BodyMediumSemibold>
        <Text.BodyMedium className="mb-[18px]">{caption}</Text.BodyMedium>

        <div className="bg-reliableBlack3 rounded p-4">
          {specList.map((spec) => (
            <div key={spec.id} className="flex gap-5 mb-3 lg:flex-col lg:gap-0">
              <Text.BodyMediumSemibold className="w-24 lg:text-base lg:w-full">
                {spec.title}
              </Text.BodyMediumSemibold>
              <Text.BodyMedium className="flex-1">{spec.desc}</Text.BodyMedium>
            </div>
          ))}
          <Button variant="bg-reliableBlack90" className="text-white w-full mt-6">
            LIHAT DETAIL
          </Button>
        </div>
      </div>
    </Card>
  );
};

ProductKnowledgeSpecCard.defaultProps = {
  title: '',
  caption: '',
  specList: [],
};

export default ProductKnowledgeSpecCard;
