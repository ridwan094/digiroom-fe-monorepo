import { MdCheck } from 'react-icons/md';

const InquirySuccess = () => {
  return (
    <div className="container">
      <MdCheck className="mx-auto mb-8" size={150} />
      <div className="leading-5 text-center lg:leading-9">
        <p className="text-base font-semibold text-reliableBlack mb-1 lg:text-lg">
          Thank you for submitting your inquiry!
        </p>
        <p className="text-sm font-regular text-reliableBlack">
          Our team will be in touch with you soon to address your needs.
        </p>
        <p className="text-sm font-bold uppercase text-[#63CB55] mt-4">Done</p>
      </div>
    </div>
  );
};

export default InquirySuccess;
