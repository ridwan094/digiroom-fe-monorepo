import { EVENT_SECTION } from '@/constants/dummy';
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
  const breadcrumbsItems = [{ name: 'Home', path: '/' }, { name: 'Dealer Jakarta Pusat' }];

  return (
    <>
      <Layout>
        <QuickLink />
        <BreadCrumbs isMobileScreen={false} items={breadcrumbsItems} />
        <BranchListSection />
        <PromoEventSection data={EVENT_SECTION} />
        <CurrentInformationSection data={EVENT_SECTION} />
        <FormFaqSection faqs={faqs} />
        <ReviewSection />
        <BreadCrumbs items={breadcrumbsItems} />
      </Layout>
    </>
  );
}
