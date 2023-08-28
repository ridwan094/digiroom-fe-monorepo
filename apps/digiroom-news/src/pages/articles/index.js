import React, { useState } from 'react';
import { QuickLink, BreadCrumbs } from 'ui/components/molecules';
import {
  ArticleListHeroSection,
  ArticleListTabSection,
  ArticleListFaqSection,
  PromoInfoSection,
} from 'ui/components/organism';
import { FAQS, newsList } from '../../constants/news';

const ArticleListingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <React.Fragment>
      <QuickLink />

      {/* Breadcrumb for web screen */}
      <div className="sticky top-[124px] z-30 bg-white border-b-1 border-reliableBlack30">
        <div className="w-full">
          <BreadCrumbs
            isMobileScreen={false}
            items={[{ name: 'Home', path: '/' }, { name: 'Berita dan Tips' }]}
          />
        </div>
      </div>

      {/* Hero Section */}
      {/* <ArticleListHeroSection /> */}

      {/* List Artikel Desktop */}
      <div className={``}>
        {/* List Artikel Desktop */}
        <ArticleListTabSection itemList={newsList} />
      </div>

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
