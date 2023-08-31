import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TabBarPromo, QuickLink, Layout } from 'ui';
import { BreadCrumbs } from 'ui/components/molecules';
import {
  PromoBannerSection,
  PromoInfoSection,
  PromoFaqSection,
  BranchMapSection,
  BranchListSection,
} from 'ui/components/organism';
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

        <div className="hidden lg:block">
          <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
        </div>

        {/* Promo banner section */}
        <PromoBannerSection />
        {/* Promo banner section */}
        <BranchMapSection />
        <BranchListSection />

        {/* Tab Bar Promo */}
        <div className="lg:container">
          <TabBarPromo />
        </div>

        {/* Promo info section */}
        <PromoInfoSection />

        {/* Promo FAQ section */}
        <PromoFaqSection faqs={faqs} />

        {/* Breadcrumb for mobile screen */}
        <div className="lg:hidden">
          <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
        </div>
      </Layout>
    </>
  );
}
