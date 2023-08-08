import SuccessIcon from 'ui/components/atoms/Icons/SuccessIcon';
import './InquirySuccess.css';

const InquirySuccess = () => {
  return (
    <div className="container">
      <SuccessIcon />

      <div className="leading-5 text-center lg:leading-9">
        <p className="text-base font-semibold text-reliableBlack mb-2 lg:text-lg">
          Thank you for submitting your inquiry!
        </p>
        <p className="text-sm font-regular text-reliableBlack mb-4">
          Our team will be in touch with you soon to address your needs.
        </p>
        <p className="text-sm font-bold uppercase text-[#63CB55]">Done</p>
      </div>
    </div>
  );
};

export default InquirySuccess;
