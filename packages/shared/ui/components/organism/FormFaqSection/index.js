import { SubscriptionForm } from '../../molecules';
import BranchInfoSection from '../BranchInfoSection';
import PromoFaqAccordion from '../PromoFaqSection';

const FormFaqSection = ({ faqs }) => {
  return (
    <section>
      {/* Info Section */}
      <BranchInfoSection />

      {/* Subscription Form */}
      <SubscriptionForm
        containerClassForm="lg:px-[300px]"
        containerInputClassName="px-4"
        inputClassName="h-12 text-black !bg-reliableBlack5"
        dropdownClassName="h-12 !bg-reliableBlack5"
        containerDropdown="px-4"
        buttonContainer="w-full px-7 mt-8 lg:w-[300px]"
        onDetailBranch={false}
      />

      {/* FAQ Section */}
      <div className="border-t-4">
        <PromoFaqAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FormFaqSection;
