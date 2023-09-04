import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BreadCrumbs, QuickLink } from 'ui/components/molecules';
import {
  ArticleListHeroSection,
  ArticleListTabSection,
  ArticleListFaqSection,
  PromoInfoSection,
} from 'ui/components/organism';
import { FAQS, newsList } from '@/constants/news';

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
      <QuickLink />

      <div className="hidden lg:block">
        <BreadCrumbs
          isMobileScreen={false}
          items={[{ name: 'Home', path: '/' }, { name: 'Berita dan Tips' }]}
        />
      </div>

      {/* Promo banner section */}
      <ArticleListHeroSection />

      {/* Tab Bar Promo */}
      <div className="lg:container">
        <ArticleListTabSection itemList={newsList} />
      </div>

      {/* Promo info section */}
      <PromoInfoSection />

      {/* Promo FAQ section */}
      <ArticleListFaqSection faqs={FAQS} />

      {/* Breadcrumb for mobile screen */}
      <div className="lg:hidden">
        <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
      </div>
    </>
  );
}
