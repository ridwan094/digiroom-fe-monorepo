import { useMemo, useState } from 'react';
import { TabBar, ArticleList } from 'ui/components/molecules';

const ArticleListTabSection = ({ itemList = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const allArticles = useMemo(() => itemList.filter((item) => item), [itemList]);
  const newsArticles = useMemo(
    () => itemList.filter((item) => item.category === 'Berita'),
    [itemList]
  );
  const reviewsArticles = useMemo(
    () => itemList.filter((item) => item.category === 'Ulasan Produk'),
    [itemList]
  );
  const tipsArticles = useMemo(
    () => itemList.filter((item) => item.category === 'Tips & Trik'),
    [itemList]
  );
  const eventArticles = useMemo(
    () => itemList.filter((item) => item.category === 'Event'),
    [itemList]
  );

  const tabsData = [
    {
      title: 'Semua',
      content: <ArticleList articles={allArticles} usingTag={true} />,
    },
    {
      title: 'Berita',
      content: <ArticleList articles={newsArticles} />,
    },
    {
      title: 'Ulasan Produk',
      content: <ArticleList articles={reviewsArticles} />,
    },
    {
      title: 'Tips & Trik',
      content: <ArticleList articles={tipsArticles} />,
    },
    {
      title: 'Event',
      content: <ArticleList articles={eventArticles} />,
    },
  ];

  return (
    <section className="">
      <div className="lg:container">
        <TabBar tabs={tabsData} onTabChange={handleTabChange} />
      </div>
    </section>
  );
};

export default ArticleListTabSection;
