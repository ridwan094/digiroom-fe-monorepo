import { TabBarPromo, QuickLink } from 'ui';
import { BreadCrumbs } from 'ui/components/molecules';
import { PromoBannerSection, PromoInfoSection, PromoFaqSection } from 'ui/components/organism';
import faqs from '../../constants/faqs';

const PromoPage = () => {
  return (
    <>
      <QuickLink />

      {/* Breadcrumb for web screen */}
      <BreadCrumbs
        isMobileScreen={false}
        items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]}
      />

      {/* Promo banner section */}
      <PromoBannerSection />

      {/* Tab Bar Promo */}
      <TabBarPromo />

      {/* Promo info section */}
      <PromoInfoSection />

      {/* Promo FAQ section */}
      <PromoFaqSection faqs={faqs} />

      {/* Breadcrumb for mobile screen */}
      <BreadCrumbs isMobileScreen={true} items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
    </>
  );
};
export default PromoPage;
