import { useEffect, useMemo, useState } from 'react';
import { TabBar, ArticleList } from 'ui/components/molecules';
import { Pagination } from '../../atoms';

const ArticleListTabSection = ({ itemList = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

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
    <section className="my-[30px] lg:my-8">
      <div className="lg:container">
        <div className={`container lg:p-0 ${isScrolled ? 'hidden' : ''}`}>
          <h1 className="text-base font-bold uppercase text-reliableBlack mb-2 lg:text-2xl">
            Berita & Tips
          </h1>
          <p className="text-xs font-medium leading-relaxed text-reliableBlack lg:text-base">
            Dapatkan informasi terkini melalui berita eksklusif dan tips dari Auto2000
          </p>
        </div>
        <div className="my-[30px] lg:my-8">
          <TabBar
            className={`${
              isScrolled ? 'border-b-2 border-reliableBlack10' : ''
            } sticky top-8 lg:top-[168.5px] z-20 bg-white`}
            tabs={tabsData}
            onTabChange={handleTabChange}
          />

          {/* Pagination */}
          <div className="flex items-center justify-center mt-6 lg:mt-9 lg:justify-between">
            <p className="hidden items-center gap-1 text-lg lg:flex">
              <span>Menampilkan</span>
              <span className="font-semibold">12</span>
              <span>dari</span>
              <span className="font-semibold">60</span>
            </p>

            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleListTabSection;
