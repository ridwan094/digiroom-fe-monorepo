import faqs from '@/constants/faqs';
import React from 'react';
import { BreadCrumbs, QuickLink } from 'ui/components/molecules';
S;
import {
  ProductKnowledgeBannerSection,
  PromoFaqSection,
  PromoInfoSection,
  TabBarProductKnowledge,
} from 'ui/components/organism';

const ProductKnowledgePage = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default ProductKnowledgePage;
