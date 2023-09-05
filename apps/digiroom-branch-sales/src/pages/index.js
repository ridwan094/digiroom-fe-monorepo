import faqs from '@/constants/faqs';
import {
  QuickLink,
  Layout,
  BranchListSection,
  ReviewSection,
  CurrentInformationSection,
  FormFaqSection,
  PromoEventSection,
} from 'ui';
import { BreadCrumbs } from 'ui/components/molecules';

export default function Home() {
  return (
    <>
      <Layout>
        <QuickLink />
        <div className="hidden lg:block">
          <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
        </div>

        <BranchListSection />
        <PromoEventSection />
        <CurrentInformationSection />
        <FormFaqSection faqs={faqs} />
        <ReviewSection />

        <div className="lg:hidden">
          <BreadCrumbs items={[{ name: 'Home', path: '/' }, { name: 'Promo' }]} />
        </div>
      </Layout>
    </>
  );
}
