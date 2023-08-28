import { useEffect, useMemo, useState } from 'react';
import { TabBar, ArticleList } from 'ui/components/molecules';

const ArticleListTabSection = ({ itemList = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Mengatur listener saat pergerakan scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan listener saat komponen dimuat
    window.addEventListener('scroll', handleScroll);

    // Membersihkan listener saat komponen akan unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <section className="px-4 lg:px-[100px]">
      <div className={`pt-4 pb-6 lg:py-8 ${isScrolled ? 'hidden' : ''}`}>
        <div className="">
          <h1 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
            Berita & Tips
          </h1>
          <p className="text-xs font-medium leading-relaxed text-reliableBlack lg:text-base">
            Dapatkan informasi terkini melalui berita eksklusif dan tips dari Auto2000
          </p>
        </div>
      </div>
      <div className="sticky top-48 z-20">
        <div>
          <TabBar tabs={tabsData} onTabChange={handleTabChange} />
        </div>
      </div>
    </section>
  );
};

export default ArticleListTabSection;
