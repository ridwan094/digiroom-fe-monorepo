import React, { useEffect, useState } from 'react';
import { QuickLink, BreadCrumbs } from 'ui/components/molecules';
import {
  ArticleListHeroSection,
  ArticleListTabSection,
  ArticleListFaqSection,
  PromoInfoSection,
} from 'ui/components/organism';
import { FAQS, newsList } from '../../constants/news';

import { getListNews } from '@/service/article';

const ArticleListingPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchListnews = async () => {
    setIsLoading(true);
    try {
      const data = await getListNews({ category: '', page: 0, size: 15 });
      console.log('data getListNews =>', data);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchListnews();
  }, []);

  return (
    <React.Fragment>
      <QuickLink />

      {/* Breadcrumb for web screen */}
      <div className="sticky top-[123.5px] z-30 bg-white border-b-1 border-reliableBlack30">
        <div className="w-full">
          <BreadCrumbs
            isMobileScreen={false}
            items={[{ name: 'Home', path: '/' }, { name: 'Berita dan Tips' }]}
          />
        </div>
      </div>

      {/* List Artikel Desktop */}
      <ArticleListTabSection itemList={newsList} />

      {/* Info section */}
      <PromoInfoSection />

      {/* FAQ section */}
      <ArticleListFaqSection faqs={FAQS} />

      {/* Breadcrumb for mobile screen */}
      <BreadCrumbs
        isMobileScreen={true}
        items={[{ name: 'Home', path: '/' }, { name: 'Berita dan Tips' }]}
      />
    </React.Fragment>
  );
};

export default ArticleListingPage;
