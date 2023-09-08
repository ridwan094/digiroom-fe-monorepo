import React from 'react';
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

export const optionsPage = [
  { value: 'product_detail_page', label: 'Product Detail Page' },
  { value: 'cek_promo_menarik', label: 'Cek Promo Menarik' },
  { value: 'stand_banner_homepage', label: 'Stand Banner Homepage' },
];

export const robotsTags = [
  { value: 'index', label: 'Index' },
  { value: 'follow', label: 'Follow' },
  { value: 'noindex', label: 'Noindex' },
  { value: 'nofollow', label: 'Nofollow' },
  { value: 'noimageindex', label: 'Noimageindex' },
  { value: 'nocache', label: 'Nocache' },
];

export const regions = [
  { value: 'dki', label: 'DKI Jakarta' },
  { value: 'jabar', label: 'Jawa Barat' },
  { value: 'jateng', label: 'Jawa Tengah' },
  { value: 'jatim', label: 'Jawa Timur' },
];

export const city = [
  { value: 'jaksel', label: 'Jakarata Selatan' },
  { value: 'depok', label: 'Depok' },
  { value: 'jaktim', label: 'Jaktim' },
  { value: 'bandung', label: 'Bandung' },
];

export const branch = [
  { value: 'dki', label: 'DKI Jakarta' },
  { value: 'jabar', label: 'Jawa Barat' },
  { value: 'jateng', label: 'Jawa Tengah' },
  { value: 'jatim', label: 'Jawa Timur' },
];

export const tags = [
  { value: 'hotdeals', label: 'Hot Deals' },
  { value: 'trending', label: 'Trending' },
];

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

export function componentConfigNewsTips(categories) {
  return [
    {
      title: 'Upload',
      render: ({ control, handleUpload, previewImage }) => (
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
              initialValue={previewImage}
            />
          )}
        />
      ),
    },
    {
      title: 'Title Page',
      render: ({ control, errors }) => (
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Title is required' }}
          render={({ field }) => (
            <TextInput
              labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
              inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
              placeholder="Insert title page"
              error={errors?.title && errors?.title?.message}
              type="text"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
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
            name="endDate"
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
      title: 'Detail News & Tips',
      render: ({ handleQuillChange, control, errors }) => (
        <div>
          <Controller
            name="detailContent"
            control={control}
            render={({ field }) => (
              <div>
                <ReactQuill
                  theme="snow"
                  className={`my-3 ${errors?.detailContent ? 'border-red-500' : ''}`}
                  value={field.value}
                  onChange={field.onChange}
                />
                {errors?.detailContent && (
                  <p className="text-red-500 text-sm mt-1">{errors.detailContent.message}</p>
                )}
              </div>
            )}
          />
        </div>
      ),
    },

    {
      title: 'Title Header',
      render: ({ control, errors }) => (
        <Controller
          name="titleHeader"
          control={control}
          render={({ field }) => (
            <TextInput
              labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
              inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
              placeholder="Insert title header page"
              error={errors?.titleHeader && errors?.titleHeader?.message}
              type="text"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
        />
      ),
    },
    {
      title: 'Slug & Category',
      render: ({ errors, control }) => (
        <div className="flex flex-row justify-between mb-3">
          <Controller
            name="slug"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Slug"
                containerClassName="w-[48%]"
                labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
                inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
                placeholder="Insert Slug"
                error={errors?.slug && errors?.slug?.message}
                type="text"
                value={field.value}
                onChange={(e) => {
                  const newSlug = e.target.value.toLowerCase().replace(/\s+/g, '-');
                  field.onChange(newSlug);
                }}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <SelectCategory
                control={control}
                items={categories.map((category) => ({
                  label: category.name,
                  value: category,
                }))}
              />
            )}
          />
        </div>
      ),
    },
    {
      title: 'Meta Description',
      render: ({ errors, control }) => (
        <Controller
          name="metaDescription"
          control={control}
          render={({ field }) => (
            <TextInput
              labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
              inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
              placeholder="Insert meta description"
              error={errors?.metaDescription && errors?.metaDescription?.message}
              type="text"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
        />
      ),
    },
    {
      title: 'ALT Image',
      render: ({ errors, control }) => (
        <Controller
          name="altImage"
          control={control}
          render={({ field }) => (
            <TextInput
              labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
              inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
              placeholder="Insert alt image"
              error={errors?.altImage && errors?.altImage?.message}
              type="text"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
        />
      ),
    },
    {
      title: 'Keyword',
      render: ({ errors, control }) => (
        <Controller
          name="keyword"
          control={control}
          render={({ field }) => (
            <TextInput
              labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
              inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
              placeholder="Insert keyword"
              error={errors?.keyword && errors?.keyword?.message}
              type="text"
              value={field.value}
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
        />
      ),
    },
    {
      title: 'Robot Tags',
      render: ({ control, dropdownData }) => (
        <Controller
          control={control}
          name="robotTags"
          render={({ field }) => (
            <Select
              isMulti
              placeholder="Please Insert Here"
              options={robotsTags}
              defaultValue={dropdownData}
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
      render: ({ cancelPage, showPreviewPage, draftPage }) => (
        <div className="flex flex-col md:flex-row justify-between mt-[48px]">
          <div className="mb-2 md:mb-0">
            <button
              type="button"
              onClick={cancelPage}
              className="text-reliableBlack90 py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold "
            >
              CANCEL
            </button>
            <button
              type="button"
              onClick={draftPage}
              className="text-reliableBlack90 py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold mt-2 md:mt-0 md:ml-2"
            >
              DRAFT
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <button
              type="button"
              onClick={showPreviewPage}
              className="text-reliableBlack90 py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold "
            >
              PREVIEW
            </button>
            <button
              type="submit"
              className="bg-reliableBlack90 rounded-[4px] tracking-wide text-white py-2 px-4 border border-transparent text-[16px] font-bold mt-2 md:mt-0 md:ml-2"
            >
              SUBMIT
            </button>
          </div>
        </div>
      ),
    },
  ];
}
