import React, { useRef, useState } from 'react';
import Dropzone from '../Dropzone';
import { Controller, useForm } from 'react-hook-form';
import { RichTextEditor, TextInput } from 'ui';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday } from 'react-icons/md';
import generateSlug from '@/helpers/utils/slug';
import SelectCategory from '../Select';
import Select from 'react-select';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function LayoutForm() {
  const [dataForm, setDataForm] = useState({
    title: '',
    datePublished: '',
    detailArticle: '',
    slug: '',
    shortDescription: '',
    keyword: '',
    robotsTag: [],
    category: [],
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

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

  const handleSlug = (txt) => {
    setDataForm({ ...dataForm, slug: generateSlug(txt) });
  };

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

  const handleDetailPromo = (value) => {
    setDataForm((prev) => {
      return {
        ...prev,
        detailPromosi: value,
      };
    });
  };

  const editor = useRef();

  const showPreviewPage = () => {
    window.open('http://localhost:3004/promo/preview', '_blank');
  };

  return (
    <div className="bg-white p-3 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dropzone />
        {/* Title */}
        <TextInput
          label="Title Page"
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
        {/* Date Published */}
        <div className="flex justify-between mb-6">
          <Controller
            control={control}
            name="publishDate"
            render={({ field }) => (
              <div className="w-full">
                <label className="font-[500] mb-3 text-[14px] leading-[17px] text-reliableBlack70">
                  Date Published
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
        </div>

        {/* Detail Article */}
        <label className="font-[500] text-[14px] leading-[17px] text-reliableBlack70 mb-4">
          Detail Article
        </label>
        <ReactQuill
          ref={editor}
          theme="snow"
          className="my-3"
          value={dataForm.detailArticle}
          onChange={handleDetailPromo}
          register={register('detailArticle')}
        />

        {/* Slug */}
        <div className="flex justify-between mb-3">
          <TextInput
            label="Slug"
            containerClassName="w-full"
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
        </div>

        {/* Short Description */}
        <TextInput
          label="Short Description"
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

        {/* Keywords */}
        <TextInput
          label="Keyword"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert Keyword"
          error={errors?.keyword && errors?.keyword?.message}
          type="text"
          register={register('keyword', {
            onChange: (e) => setDataForm({ ...dataForm, keyword: e.target.value }),
          })}
          value={dataForm?.keyword}
        />

        <div>
          <SelectCategory
            block={true}
            register={register('category', {
              onChange: (e) => setDataForm({ ...dataForm, category: e.target.value }),
            })}
            items={[
              { label: 'Mobil Baru', value: 'new_car' },
              { label: 'Mobil Bekas', value: 'second_car' },
            ]}
          />
        </div>

        <div className="flex justify-between mt-[48px]">
          <div>
            <button className="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold ">
              CANCEL
            </button>
          </div>
          <div className="flex">
            <button
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
      </form>
    </div>
  );
}
