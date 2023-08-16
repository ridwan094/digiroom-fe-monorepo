import React, { useState } from 'react';
import Dropzone from './Dropzone';
import { Controller, useForm } from 'react-hook-form';
import { RichTextEditor, TextInput } from 'ui';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday } from 'react-icons/md';
import generateSlug from '@/helpers/utils/slug';
import SelectCategory from './Select';
import Select from 'react-select';

export default function LayoutForm() {
  const [dataForm, setDataForm] = useState({
    title: '',
    datePublished: '',
    dateExpired: '',
    detailPromosi: '',
    slug: '',
    shortDescription: '',
    showPage: [],
    robotsTag: [],
    region: [],
    city: [],
    branch: [],
    tags: [],
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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

  return (
    <div className="bg-white p-3 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dropzone />
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
        <div className="flex justify-between mb-6">
          <Controller
            control={control}
            name="publishDate"
            render={({ field }) => (
              <div className="w-[48%]">
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

          <Controller
            control={control}
            name="expiredDate"
            render={({ field }) => (
              <div className="w-[48%]">
                <label className="font-[500] mb-3 text-[14px] leading-[17px] text-reliableBlack70">
                  Date Expired
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

        <RichTextEditor
          register={register('detailPromosi', {
            onChange: (text) => setDataForm({ ...dataForm, detailPromosi: text }),
          })}
          value={dataForm.detailPromosi}
        />

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
            register={register('category', {
              onChange: (e) => setDataForm({ ...dataForm, category: e.target.value }),
            })}
            items={[
              { label: 'Mobil Baru', value: 'new_car' },
              { label: 'Mobil Bekas', value: 'second_car' },
            ]}
          />
        </div>

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
        <div>
          <label
            htmlFor="showpage"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            Show Page
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="showPage"
            options={optionsPage}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('showPage', {
              onChange: (e) => setDataForm({ ...dataForm, showPage: e.target.value }),
            })}
          />
        </div>

        <div>
          <label
            htmlFor="robot_tags"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            Robot Tags
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="robotTags"
            options={robotsTags}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('robotTags', {
              onChange: (e) => setDataForm({ ...dataForm, robotTags: e.target.value }),
            })}
          />
        </div>

        <div>
          <label
            htmlFor="underline_select"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            Region
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="region"
            options={regions}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('region', {
              onChange: (e) => setDataForm({ ...dataForm, region: e.target.value }),
            })}
          />
        </div>

        <div>
          <label
            htmlFor="city"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            City
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="city"
            options={city}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('city', {
              onChange: (e) => setDataForm({ ...dataForm, city: e.target.value }),
            })}
          />
        </div>

        <div>
          <label
            htmlFor="branch"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            Branch
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="branch"
            options={branch}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('branch', {
              onChange: (e) => setDataForm({ ...dataForm, branch: e.target.value }),
            })}
          />
        </div>

        <div>
          <label
            htmlFor="tags"
            className="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          >
            Tags
          </label>
          <Select
            isMulti
            placeholder="Please Insert Here"
            name="tags"
            options={tags}
            className="basic-multi-select mb-3 bg-[#f5f5f5] text-[14px] focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            classNamePrefix="select"
            register={register('tags', {
              onChange: (e) => setDataForm({ ...dataForm, tags: e.target.value }),
            })}
          />
        </div>

        <div className="flex justify-between mt-[48px]">
          <div>
            <button class="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold ">
              CANCEL
            </button>
          </div>
          <div className="flex">
            <button class="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold ">
              PREVIEW
            </button>
            <button
              type="submit"
              class="bg-reliableBlack90 rounded-[4px] tracking-wide text-white  py-2 px-4 border border-transparent text-[16px] font-bold "
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
