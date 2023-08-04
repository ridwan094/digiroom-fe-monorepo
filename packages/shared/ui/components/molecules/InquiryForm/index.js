import { useState } from "react";
import { ButtonConfirm, Dropdown } from "../../atoms";
import { Input } from "../../atoms";
import Text from "../../atoms/Text";
import { FiArrowRight } from "react-icons/fi";

const InquiryForm = ({ onSubmit }) => {
  const [submit, setSubmit] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    province: "",
    city: "",
    branchOptional: "",
  });

  const handleChange = (e, category) => {
    if (category === "fullname") {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        fullName: newValue,
      }));
    }

    if (category === "email") {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        email: newValue,
      }));
    }

    if (category === "number") {
      const newValue = e.target.value;
      setSubmit((prevState) => ({
        ...prevState,
        phoneNumber: newValue,
      }));
    }

    if (category === "province") {
      setSubmit((prevState) => ({
        ...prevState,
        province: e,
      }));
    }

    if (category === "city") {
      setSubmit((prevState) => ({
        ...prevState,
        city: e,
      }));
    }

    if (category === "branchOptional") {
      setSubmit((prevState) => ({
        ...prevState,
        branchOptional: e,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to Parents Inqury
    onSubmit(submit);
  };

  const checkFormInquiry = () => {
    return (
      !submit.fullName ||
      !submit.email ||
      !submit.phoneNumber ||
      !submit.province ||
      !submit.city ||
      !submit.branchOptional
    );
  };

  return (
    <form class="bg-white shadow-md rounded pt-6" onSubmit={handleSubmit}>
      <div class="mb-4 px-8">
        <Input
          type="text"
          labelClassName="text-black font-semibold p-4"
          onChange={(e) => handleChange(e, "fullname")}
          value={submit.fullName}
          label="Full Name"
          placeholder="First Name, Last Name"
          inputClassName="text-black bg-whiteRealible8 h-20"
          size="large"
          containerClassName="w-full"
        />
      </div>
      <div class="mb-6 px-8">
        <Input
          type="email"
          labelClassName="text-black font-semibold p-4"
          onChange={(e) => handleChange(e, "email")}
          value={submit.email}
          label="Email"
          placeholder="Email@abc.com"
          inputClassName="text-black bg-whiteRealible8 h-20"
          size="large"
          containerClassName="w-full"
        />
      </div>
      <div class="mb-6 px-8">
        <Input
          type="text"
          labelClassName="text-black font-semibold p-4"
          onChange={(e) => handleChange(e, "number")}
          value={submit.phoneNumber}
          label="Phone"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="+62 XXX-XXX-XXX"
          inputClassName="text-black whiteRealible8 h-20"
          size="large"
          containerClassName="w-full"
        />
      </div>
      <div class="mb-6 px-8">
        {/* DROPDOWN PROVINCE */}
        <Dropdown
          label="Province"
          options={[
            "Jakarta",
            "Jawa Barat",
            "Jawa Tengah",
            "Jawa Timur",
            "Bali",
          ]}
          selectedOption={submit.province}
          onSelect={(e) => handleChange(e, "province")}
          placeholder="Choose Province"
        />
      </div>
      <div class="mb-6 px-8">
        {/* DROPDOWN CITY */}
        <Dropdown
          label="City"
          options={[
            "Jakarta",
            "Bandung",
            "Semarang",
            "Surakarta",
            "Surabaya",
            "Jogja",
          ]}
          selectedOption={submit.city}
          onSelect={(e) => handleChange(e, "city")}
          placeholder="Choose City"
        />
      </div>
      <div class="mb-6 px-8">
        {/* BRANCH OPTIONAL */}
        <Dropdown
          label="Branch Optional"
          options={[
            "Auto 2000 Daan Magot",
            "Auto 2001 Daan Magot",
            "Auto 2002 Daan Magot",
            "Auto 2003 Daan Magot",
            "Auto 2004 Daan Magot",
            "Auto 2005 Daan Magot",
          ]}
          selectedOption={submit.branchOptional}
          onSelect={(e) => handleChange(e, "branchOptional")}
          placeholder="Choose Branch"
        />
      </div>
      <div class="flex items-center justify-between">
        <ButtonConfirm
          block={true}
          className={checkFormInquiry() ? "bg-gray-500" : "bg-supportiveRed"}
          size="large"
          variant={true}
          iconType="icon"
          disabled={checkFormInquiry()}
        >
          <div className="flex justify-end items-center gap-x-2">
            <Text.Head4>SUBMIT</Text.Head4>
            <FiArrowRight size={20} />
          </div>
        </ButtonConfirm>
      </div>
    </form>
  );
};

export default InquiryForm;
