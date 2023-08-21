import React, { useState } from 'react';
import TabBar from 'ui/components/molecules/TabBar';
import Link from 'next/link';
import CardNews from '../../molecules/CardNews';

const ListArtikel = ({ itemList = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const ArticleItem = itemList.map((news, index) => (
    <Link key={news.id} href={`/${news.slug}`}>
      <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
        <CardNews title={news.title} date={news.subtitle} coverImg={news.image} index={index}/>
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
    <div className="container mx-auto py-2">
      <TabBar tabs={tabsData} onTabChange={handleTabChange} />
    </div>
  );
};

export default ListArtikel;
