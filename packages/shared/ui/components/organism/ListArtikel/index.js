import React, { useState } from 'react';
import TabBar from 'ui/components/molecules/TabBar';
import Image from 'next/image';
import Link from 'next/link';

const ListArtikel = ({ itemList = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const ArticleItem = itemList.map((news) => (
    <Link href={`/${news.id}`}>
      <div
        key={news.id}
        className="w-full overflow-hidden object-cover flex flex-col gap-6 border-b border-black"
      >
        <div className="relative aspect-video">
          <Image src={news.image} alt={news.title} sizes="25vw" fill className="object-cover" />
        </div>
        <div className="px-4 flex flex-col gap-2 mb-4 flex-1 md:min-h-[120px]">
          <h5 className="font-medium text-base text-reliableBlack flex-1">{news.title}</h5>
          <p className="text-reliableBlack80">{news.subtitle}</p>
        </div>
      </div>
    </Link>
  ));

  const tabsData = [
    {
      title: 'NEWS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{ArticleItem}</div>
      ),
    },
    {
      title: 'TIPS & TRICKS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{ArticleItem}</div>
      ),
    },
    {
      title: 'PRODUCT REVIEWS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{ArticleItem}</div>
      ),
    },
    {
      title: 'EVENTS',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{ArticleItem}</div>
      ),
    },
  ];
  return (
    <div>
      <TabBar tabs={tabsData} onTabChange={handleTabChange} />
    </div>
  );
};

export default ListArtikel;
