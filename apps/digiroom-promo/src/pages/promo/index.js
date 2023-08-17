import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabBarPromo, QuickLink, Layout } from 'ui';
import { Pagination } from 'ui/components/atoms';
import { BreadCrumbs } from 'ui/components/molecules';
import { PromoBannerSection, PromoInfoSection, PromoFaqSection } from 'ui/components/organism';
import faqs from '../../constants/faqs';

const PromoPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const { searchValue } = useSelector((state) => state.example);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValues(newValue);
  };

  return (
    <>
      <Layout>
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
        <BreadCrumbs
          isMobileScreen={true}
          items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]}
        />
      </Layout>
    </>
  );
};
export default PromoPage;
