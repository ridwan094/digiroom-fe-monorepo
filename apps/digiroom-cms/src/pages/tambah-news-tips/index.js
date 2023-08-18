import { useEffect, useMemo, useState } from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { PiMountainsFill } from 'react-icons/pi';
import { Toast, Card, Accordion, Label, TextInput, Button, Dropdown, Avatar } from 'flowbite-react';
import MOCKIMAGE from '../../../public/images/Auto2000.webp';
import { Input } from 'ui';

// Custom Theme
const cutomThemeCardAccordion = {
  root: {
    base: 'flex border border-gray-200 bg-white',
    children: 'flex h-full flex-col justify-center gap-4',
  },
};

const cutomThemeCardInput = {
  root: {
    base: 'border border-gray-200 bg-white p-3 rounded-lg mb-3',
    children: '',
  },
};

const customThemeAccordion = {
  root: {
    base: 'divide-y-reverse divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
  },
};

// Page
const AddNewsAndTips = () => {
  const [layoutAccordion, setlayoutAccordion] = useState({
    accordionOne: true,
    accordionTwo: false,
    accordionThree: false,
  });

  const [showToast, setShowToast] = useState(false);

  // handle Accordion
  const handleAccordion = (accordionNumb) => {
    console.log('accordionNumb =>', accordionNumb);
    if (accordionNumb === 1) {
      console.log('HELLO THIS 1');
      setlayoutAccordion(() => {
        return {
          accordionOne: true,
          accordionTwo: false,
          accordionThree: false,
        };
      });
    } else if (accordionNumb === 2) {
      console.log('HELLO THIS 2');
      setlayoutAccordion(() => {
        return {
          accordionOne: false,
          accordionTwo: true,
          accordionThree: false,
        };
      });
    } else {
      console.log('HELLO THIS 3');
      setlayoutAccordion(() => {
        return {
          accordionOne: false,
          accordionTwo: false,
          accordionThree: true,
        };
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className={`fixed inset-x-0 top-10 right-10 z-50 flex justify-end items-left ${
          showToast
            ? 'opacity-100 transition-opacity duration-300'
            : 'opacity-0 transition-opacity duration-300'
        }`}
      >
        {showToast && (
          <Toast className="bg-white border border-gray-300 p-3 rounded-md shadow-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white text-2xl">
              {toastIcons}
            </div>
            <div className="ml-3 text-sm font-normal text-gray-800">{toastDescription}</div>
            <Toast.Toggle
              onDismiss={() => setShowToast(false)}
              className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer"
            />
          </Toast>
        )}
      </div>

      <div className="flex justify-between gap-6">
        <div className="w-3/5">
          <div></div>
          <Card theme={cutomThemeCardAccordion}>
            <p className="font-bold text-gray-900 dark:text-white border border-b p-4">
              Layout Section
            </p>
            <div className="px-4 pb-4">
              <Accordion theme={customThemeAccordion}>
                <Accordion.Panel isOpen={layoutAccordion.accordionOne}>
                  <Accordion.Title>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={() => handleAccordion(1)}
                        id="red-radio"
                        type="radio"
                        value={layoutAccordion.accordionOne}
                        name="colored-radio"
                        checked={layoutAccordion.accordionOne}
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-500 focus:ring-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="red-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Layout 1
                      </label>
                    </div>
                  </Accordion.Title>
                  {layoutAccordion.accordionOne === true && (
                    <Accordion.Content>
                      <img src={MOCKIMAGE} alt="image_product" />
                      <p className="font-bold text-lg text-gray-900 mt-3.5">Title Page</p>
                      <p className="text-base text-gray-900 mt-3">Periode Promosi</p>
                      <div className="flex flex-row items-center gap-2 mt-1.5">
                        <MdOutlineCalendarMonth />
                        <p className="text-xs text-gray-500">Date published - Date Expired</p>
                        <p className="text-xs text-gray-500 p-2 bg-gray-200">Countdown</p>
                      </div>
                      <p className="font-bold text-lg text-gray-900 mt-3">Detail Promosi</p>
                      <p className="text-sm text-gray-900 mt-1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.
                      </p>
                    </Accordion.Content>
                  )}
                </Accordion.Panel>
                <Accordion.Panel isOpen={layoutAccordion.accordionTwo}>
                  <Accordion.Title>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={() => handleAccordion(2)}
                        id="red-radio-2"
                        type="radio"
                        value={layoutAccordion.accordionTwo}
                        name="colored-radio"
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-500 focus:ring-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="red-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Layout 2
                      </label>
                    </div>
                  </Accordion.Title>
                  {layoutAccordion.accordionTwo === true && (
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">HELLO</p>
                    </Accordion.Content>
                  )}
                </Accordion.Panel>
                <Accordion.Panel isOpen={layoutAccordion.accordionThree}>
                  <Accordion.Title>
                    <div className="flex items-center mr-4">
                      <input
                        onChange={() => handleAccordion(3)}
                        id="red-radio-3"
                        type="radio"
                        value={layoutAccordion.accordionThree}
                        name="colored-radio"
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-500 focus:ring-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="red-radio-3"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Layout 3
                      </label>
                    </div>
                  </Accordion.Title>
                  {layoutAccordion.accordionThree === true && (
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">HELLO</p>
                    </Accordion.Content>
                  )}
                </Accordion.Panel>
              </Accordion>
            </div>
          </Card>
        </div>
        <div className="w-full">
          <Card theme={cutomThemeCardInput}>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-black border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <PiMountainsFill fill="black" size={50} />
                  <p class="mb-2 text-base font-medium text-gray-500 dark:text-gray-400">
                    drop your image here or{' '}
                    <span class="font-bold underline text-black">Browse</span>
                  </p>
                  <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Support: JPG, Jpeg2000, PNG
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </Card>
          <Card theme={cutomThemeCardInput}>
            {/* Title Page */}
            <Input
              type="text"
              labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack50 px-8 pb-8'}
              inputClassName={'border-b border-black'}
              // onChange={(e) => handleChange(e, 'fullname')}
              value=""
              label="Title Page"
              placeholder="Insert title page"
              size="large"
            />
          </Card>
          {/* Date Published */}
          <Card theme={cutomThemeCardInput}>
            <Input
              type="date"
              labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack50 px-8 pb-8'}
              inputClassName={'border-b border-black'}
              // onChange={(e) => handleChange(e, 'fullname')}
              value=""
              label="Date Published"
              placeholder="DD/MM/YYYY"
              size="large"
            />
          </Card>
          {/* Slug */}
          <Card theme={cutomThemeCardInput}>
            <Input
              type="date"
              labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack50 px-8 pb-8'}
              inputClassName={'border-b border-black'}
              // onChange={(e) => handleChange(e, 'fullname')}
              value=""
              label="Slug"
              placeholder="Insert slug"
              size="large"
            />
          </Card>
          {/* Short Description */}
          <Card theme={cutomThemeCardInput}>
            <Input
              type="date"
              labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack50 px-8 pb-8'}
              inputClassName={'border-b border-black'}
              // onChange={(e) => handleChange(e, 'fullname')}
              value=""
              label="Short Description"
              placeholder="Insert short description"
              size="large"
            />
          </Card>
          {/* Keyword */}
          <Card theme={cutomThemeCardInput}>
            <Input
              type="date"
              labelClassName="block text-reliableBlack70 text-sm font-semibold mb-2"
              labelStyle={'text-[#666666]'}
              containerClassForm={'bg-reliableBlack50 px-8 pb-8'}
              inputClassName={'border-b border-black'}
              // onChange={(e) => handleChange(e, 'fullname')}
              value=""
              label="Keyword"
              placeholder="Insert Keyword"
              size="large"
            />
          </Card>
          {/* Robots Tag */}
          <Card theme={cutomThemeCardInput}>
            <Dropdown
              inline
              label={<Avatar rounded />}
              theme={{
                arrowIcon: 'ml-4 h-3 w-3',
              }}
            >
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddNewsAndTips;
