import faqs from '@/constants/faqs';
import React from 'react';
import {
  BreadCrumbs,
  Layout,
  ProductKnowledgeBannerSection,
  PromoFaqSection,
  PromoInfoSection,
  QuickLink,
  TabBarProductKnowledge,
} from 'ui';

const ProductKnowledgePage = () => {
  return (
    <Layout>
      <div className="lg:px-24">
        <QuickLink />

        {/* Breadcrumb for web screen */}
        <BreadCrumbs
          isMobileScreen={false}
          items={[{ name: 'Home', path: '/' }, { name: 'Product Knowledge' }]}
        />

        {/* Product Knowledge Banner Section */}
        <ProductKnowledgeBannerSection />

        {/* Tab Bar Product Knowledge */}
        <TabBarProductKnowledge />

        {/* Info Section */}
        <PromoInfoSection />

        {/* FAQ Section */}
        <PromoFaqSection faqs={faqs} />

        {/* Breadcrumb for Mobile Screen */}
        <BreadCrumbs
          isMobileScreen={true}
          items={[{ name: 'Home', path: '/' }, { name: 'Product Knowledge' }]}
        />
      </div>
    </Layout>
  );
};
export default ProductKnowledgePage;
