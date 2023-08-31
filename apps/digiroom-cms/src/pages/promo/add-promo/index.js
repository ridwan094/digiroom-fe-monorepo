import React, { useRef, useState } from 'react';
import LayoutForm from '@/components/LayoutForm';
import { useForm } from 'react-hook-form';
import { handleUpload } from '@/service/azure/fileUpload';

import { Controller } from 'react-hook-form';
import Dropzone from '@/components/LayoutForm/Dropzone';
import { TextInput } from 'ui';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday } from 'react-icons/md';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '@/components/LayoutForm/Select';
import Select from 'react-select';
import { useEffect } from 'react';

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <div className="border-b-2 border-[#bdbcbc] bg-[#f8f8f8] p-3 mt-3">
      <label onClick={props.onClick} ref={ref} className="placeholder-gray80">
        {props.value || props.placeholder}
      </label>
      <MdCalendarToday
        onClick={props.onClick}
        style={{ position: 'absolute', top: '28px', right: '16px' }}
      />
    </div>
  );
});

const optionsPage = [
  { value: 'product_detail_page', label: 'Product Detail Page' },
  { value: 'cek_promo_menarik', label: 'Cek Promo Menarik' },
  { value: 'stand_banner_homepage', label: 'Stand Banner Homepage' },
];

const robotsTags = [
  { value: 'index', label: 'Index' },
  { value: 'follow', label: 'Follow' },
  { value: 'noindex', label: 'Noindex' },
  { value: 'nofollow', label: 'Nofollow' },
  { value: 'noimageindex', label: 'Noimageindex' },
  { value: 'nocache', label: 'Nocache' },
];

const regions = [
  { value: 'dki', label: 'DKI Jakarta' },
  { value: 'jabar', label: 'Jawa Barat' },
  { value: 'jateng', label: 'Jawa Tengah' },
  { value: 'jatim', label: 'Jawa Timur' },
];

const city = [
  { value: 'jaksel', label: 'Jakarata Selatan' },
  { value: 'depok', label: 'Depok' },
  { value: 'jaktim', label: 'Jaktim' },
  { value: 'bandung', label: 'Bandung' },
];

const branch = [
  { value: 'dki', label: 'DKI Jakarta' },
  { value: 'jabar', label: 'Jawa Barat' },
  { value: 'jateng', label: 'Jawa Tengah' },
  { value: 'jatim', label: 'Jawa Timur' },
];

const tags = [
  { value: 'hotdeals', label: 'Hot Deals' },
  { value: 'trending', label: 'Trending' },
];

const componentConfig = [
  {
    title: 'Upload',
    render: ({ control, handleUpload, dataForm }) => (
      <Controller
        key="file"
        control={control}
        name="file"
        render={({ field }) => (
          <Dropzone
            onChange={(file) => {
              handleUpload(file);
              field.onChange(file);
            }}
          />
        )}
      />
    ),
  },
  {
    title: 'Title Page',
    render: ({ register, dataForm, setDataForm, errors }) => (
      <TextInput
        labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
        inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
        placeholder="Insert title page"
        error={errors?.title && errors?.title?.message}
        type="text"
        register={register('title', {
          onChange: (e) => setDataForm({ ...dataForm, title: e.target.value }),
        })}
        value={dataForm?.title}
      />
    ),
  },
  {
    title: 'Start Date & End Date',
    render: ({ control }) => (
      <div className="flex justify-between mb-6">
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <div className="w-[48%]">
              <label className="font-[500] mb-3 text-[14px] leading-[17px] text-reliableBlack70">
                Start Date
              </label>
              <DatePicker
                id="input-custom"
                className="w-full my-3 border-b-2 border-gray100 placeholder-gray80 text-[16px] py-[12px] !px-3 mt-[8px]  text-reliableBlack90 font-[400]"
                showIcon
                placeholderText="DD/MM/YYYY --:--:--"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                showTimeInput
                customInput={<CustomInput />}
                dateFormat="dd/MM/yyyy hh:mm:ss"
                customStyles={{
                  dateIcon: {
                    width: '40px',
                    height: '40px',
                  },
                }}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name="expiredDate"
          render={({ field }) => (
            <div className="w-[48%]">
              <label className="font-[500] mb-3 text-[14px] leading-[17px] text-reliableBlack70">
                End Date
              </label>
              <DatePicker
                id="input-custom"
                className="w-full my-3  border-b-2 border-gray100 placeholder-gray80 text-[16px] py-[12px] !px-3 mt-[8px]  text-reliableBlack90 font-[400]"
                showIcon
                placeholderText="DD/MM/YYYY --:--:--"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                showTimeInput
                customInput={<CustomInput />}
                dateFormat="dd/MM/yyyy hh:mm:ss"
                customStyles={{
                  dateIcon: {
                    width: '40px',
                    height: '40px',
                  },
                }}
              />
            </div>
          )}
        />
      </div>
    ),
  },
  {
    title: 'Published Date',
    render: ({ control }) => (
      <Controller
        control={control}
        name="publishedDate"
        render={({ field }) => (
          <div className="w-full">
            <DatePicker
              id="input-custom"
              className="w-full my-3  border-b-2 border-gray100 placeholder-gray80 text-[16px] py-[12px] !px-3 mt-[8px]  text-reliableBlack90 font-[400]"
              showIcon
              placeholderText="DD/MM/YYYY --:--:--"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              showTimeInput
              customInput={<CustomInput />}
              dateFormat="dd/MM/yyyy hh:mm:ss"
              customStyles={{
                dateIcon: {
                  width: '40px',
                  height: '40px',
                },
              }}
            />
          </div>
        )}
      />
    ),
  },
  {
    title: 'Detail Promosi',
    render: ({ handleQuillChange, dataForm, errors, trigger }) => (
      <div>
        <ReactQuill
          theme="snow"
          className={`my-3 ${errors?.detailPromosi ? 'border-red-500' : ''}`}
          value={dataForm.detailPromosi}
          onChange={(value) => {
            handleQuillChange(value);
          }}
        />
        {errors?.detailPromosi && (
          <p className="text-red-500 text-sm mt-1">{errors.detailPromosi.message}</p>
        )}
      </div>
    ),
  },

  {
    title: 'Slug & Category',
    render: ({ register, errors, dataForm, control, handleSlug }) => (
      <div className="flex justify-between mb-3">
        <TextInput
          label="Slug"
          containerClassName="w-[48%]"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Please Insert Here"
          error={errors?.title && errors?.title?.message}
          type="text"
          register={register('slug', {
            onChange: (e) => handleSlug(e.target.value),
          })}
          value={dataForm?.slug}
        />

        <SelectCategory
          register={register}
          control={control}
          items={[
            { label: 'Mobil Baru', value: 'new_car' },
            { label: 'Mobil Bekas', value: 'second_car' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Short Description',
    render: ({ register, errors, setDataForm, dataForm }) => (
      <TextInput
        labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
        inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
        placeholder="Insert short description"
        error={errors?.shortDescription && errors?.shortDescription?.message}
        type="text"
        register={register('shortDescription', {
          onChange: (e) => setDataForm({ ...dataForm, shortDescription: e.target.value }),
        })}
        value={dataForm?.shortDescription}
      />
    ),
  },
  {
    title: 'Show Page',
    render: ({ control }) => (
      <Controller
        control={control}
        name="showPage"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={optionsPage}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: 'Robot Tags',
    render: ({ control }) => (
      <Controller
        control={control}
        name="robotTags"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={robotsTags}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: 'Region',
    render: ({ control }) => (
      <Controller
        control={control}
        name="region"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={regions}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: 'City',
    render: ({ control }) => (
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={city}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: 'Branch',
    render: ({ control }) => (
      <Controller
        control={control}
        name="branch"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={branch}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: 'Tags',
    render: ({ control }) => (
      <Controller
        control={control}
        name="tags"
        render={({ field }) => (
          <Select
            isMulti
            placeholder="Please Insert Here"
            options={tags}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            {...field}
          />
        )}
      />
    ),
  },
  {
    title: '',
    render: ({ cancelPage, showPreviewPage }) => (
      <div className="flex justify-between mt-[48px]">
        <div>
          <button
            type="button"
            onClick={cancelPage}
            className="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold "
          >
            CANCEL
          </button>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={showPreviewPage}
            className="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold "
          >
            PREVIEW
          </button>
          <button
            type="submit"
            className="bg-reliableBlack90 rounded-[4px] tracking-wide text-white  py-2 px-4 border border-transparent text-[16px] font-bold "
          >
            SUBMIT
          </button>
        </div>
      </div>
    ),
  },
];

const AddPromo = () => {
  const [dataForm, setDataForm] = useState({});
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const handleUpload = (file) => {
    handleUpload(file);
  };

  const handleQuillChange = (value) => {
    setDataForm((prev) => {
      return {
        ...prev,
        detailPromosi: value,
      };
    });
  };

  const showPreviewPage = () => {
    window.open('http://localhost:3004/promo/preview', '_blank');
  };

  const onSubmit = (data) => {
    const dataTemporary = {
      heroImageLink:
        'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/image.jpg',
      titlePage: data.title,
      startDate: data.startDate,
      endDate: data.expiredDate,
      publishedDate: data.publishedDate,
      titleHeader: data.shortDescription,
      slug: data.slug,
      category: {
        id: 2,
        categoryType: 'News_tips',
        name: 'NEWS AND TIPS',
        description: null,
      },
      contentCategory: {
        id: 4,
        contentCategoryType: 'BERITA_TIPS',
        name: 'Berita And Tips',
        description: null,
        categoryId: 2,
        priority: 1,
      },
      keyword: 'this for keyword',
      metaDescription: 'this for metaDescription',
      altImage: 'this for altImage',
      ordering: 1,
      tag: null,
      metaRobotList: [],
      cmsStatusType: null,
      groupType: null,
      region: null,
      city: null,
      branch: null,
      detailContent: dataForm.detailPromosi,
    };
  };

  const editor = useRef();

  useEffect(() => {}, dataForm);
  return (
    <LayoutForm
      control={control}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      handleUpload={handleUpload}
      editor={editor}
      showPreviewPage={showPreviewPage}
      componentConfig={componentConfig}
      dataForm={dataForm}
      setDataForm={setDataForm}
      errors={errors}
      handleQuillChange={handleQuillChange}
      cancelPage={cancelPage}
    />
  );
};

export default AddPromo;

// import React from 'react';
// import LayoutForm from '@/components/LayoutForm';
// import LayoutSection from '@/components/LayoutSection';
// import LayoutPagePromo from '@/components/LayoutSection/LayoutPagePromo';

// export default function PromoCms() {
//   return (
//     <div className="pt-5">
//       <div className="flex w-full">
//         <LayoutSection
//           items={[
//             {
//               id: 1,
//               title: 'Layout 1',
//               content: <LayoutPagePromo/>,
//               isActive: true,
//             },
//             {
//               id: 2,
//               title: 'Layout 2',
//               content: 'Content 2',
//               isActive: false,
//             },
//             {
//               id: 3,
//               title: 'Layout 3',
//               content: 'Content 3',
//               isActive: false,
//             },
//           ]}
//         />
//         <LayoutForm />
//       </div>
//     </div>
//   );
// }
