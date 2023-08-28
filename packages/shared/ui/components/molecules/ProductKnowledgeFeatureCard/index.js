import React from 'react';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';

const ProductKnowledgeFeatureCard = ({ title, itemList }) => {
  return (
    <div>
      <Text.BodyMediumSemibold className="mb-[18px] lg:text-xl">{title}</Text.BodyMediumSemibold>
      <div className="flex gap-[10px] lg:grid grid-cols-2 overflow-scroll">
        {itemList.map((item) => (
          <Card className="bg-[#F8F8F8] p-4 rounded" key={item.id}>
            <Text.BodyMediumSemibold className="w-60 mb-2 lg:text-xl">
              {item.title}
            </Text.BodyMediumSemibold>
            <Text.BodyMedium className="lg:text-lg">{item.text}</Text.BodyMedium>
          </Card>
        ))}
      </div>
    </div>
  );
};

ProductKnowledgeFeatureCard.defaultProps = {
  title: '',
  itemList: [],
};

export default ProductKnowledgeFeatureCard;
