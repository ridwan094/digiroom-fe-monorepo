import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabBarPromo, QuickLink, Layout, BreadCrumbs } from 'ui';
import { PromoBannerSection, PromoInfoSection, PromoFaqSection } from 'ui/components/organism';
import faqs from '../constants/faqs';

const options = ['Option 1', 'Option 2', 'Option 3'];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValues, setInputValues] = useState('');

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

        <div className="container hidden lg:block">
          <BreadCrumbs />
        </div>

        {/* Promo banner section */}
        <PromoBannerSection />

        {/* Tab Bar Promo */}
        <div className="lg:container">
          <TabBarPromo />
        </div>

        {/* Promo info section */}
        <PromoInfoSection />

        {/* Promo FAQ section */}
        <PromoFaqSection faqs={faqs} />
      </Layout>
    </>
  );
}
