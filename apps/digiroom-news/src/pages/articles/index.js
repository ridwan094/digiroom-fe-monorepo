import { QuickLink, BreadCrumbs } from 'ui/components/molecules';
import {
  ArticleListHeroSection,
  ArticleListTabSection,
  ArticleListFaqSection,
  PromoInfoSection,
} from 'ui/components/organism';
import { FAQS, newsList } from '../../constants/news';

const ArticleListingPage = () => {
  return (
    <>
      <QuickLink />

      {/* Breadcrumb for web screen */}
      <BreadCrumbs
        isMobileScreen={false}
        items={[{ name: 'Home', path: '/' }, { name: 'Berita dan Tips' }]}
      />

      {/* Hero Section */}
      <ArticleListHeroSection />

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
    </>
  );
};

export default ArticleListingPage;
