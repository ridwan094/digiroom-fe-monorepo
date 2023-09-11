import React from 'react';
import { Controller } from 'react-hook-form';
import Dropzone from '@/components/LayoutForm/Dropzone';
import { TextInput } from 'ui';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '@/components/LayoutForm/Select';
import Select from 'react-select';
import CustomDatePicker from '@/components/DatePicker';

export const robotsTags = [
  { value: 'index', label: 'Index' },
  { value: 'follow', label: 'Follow' },
  { value: 'noindex', label: 'Noindex' },
  { value: 'nofollow', label: 'Nofollow' },
  { value: 'noimageindex', label: 'Noimageindex' },
  { value: 'nocache', label: 'Nocache' },
];

export const componentConfigProductKnowledge = [
  {
    title: 'Upload',
    render: ({ control, handleUpload, register, dataForm, setDataForm, errors }) => (
      <div className="mb-10">
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <label className="text-sm text-gray-600">Date Published</label>
          <Controller
            control={control}
            name="publishedDate"
            render={({ field }) => (
              <div className="w-full">
                <CustomDatePicker
                  id="input-custom-start"
                  customClass="w-full my-3 border-b-2 border-gray100 placeholder-gray80 text-[16px] py-[12px] !px-3 mt-[8px] text-reliableBlack90 font-[400]"
                  showIcon={true}
                  placeholderText="DD/MM/YYYY --:--:--"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  showTimeInput
                />
              </div>
            )}
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Detail Product Knowledge</label>
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
      </div>
    ),
  },
  {
    title: 'Advantage',
    render: ({ register, errors, setDataForm, dataForm, cancelPage }) => (
      <div className="mb-10">
        <div>
          <TextInput
            label="Title Header"
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert title header"
            error={errors?.titleHeader && errors?.titleHeader?.message}
            type="text"
            register={register('titleHeader', {
              onChange: (e) => setDataForm({ ...dataForm, titleHeader: e.target.value }),
            })}
            value={dataForm?.titleHeader}
          />
        </div>
        <div
          className="flex flex-col justify-center items-center border border-dashed border-black w-full h-40 hover:cursor-pointer"
          onClick={cancelPage}
        >
          <button
            type="button"
            className="text-reliableBlack90 py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold "
          >
            +
          </button>
          <label>Add Card</label>
        </div>
      </div>
    ),
  },
  {
    title: 'Offering',
    render: ({ register, errors, dataForm, control }) => (
      <div className="mb-10">
        <div>
          <TextInput
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert title header"
            error={errors?.titleHeader && errors?.titleHeader?.message}
            type="text"
            register={register('titleHeader', {
              onChange: (e) => setDataForm({ ...dataForm, titleHeader: e.target.value }),
            })}
            value={dataForm?.titleHeader}
          />
        </div>
        <div>
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
        </div>
      </div>
    ),
  },

  {
    title: 'Additional Form',
    render: ({ register, errors, setDataForm, dataForm, control }) => (
      <div className="">
        <div>
          <TextInput
            label="Title Header"
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert title header"
            error={errors?.shortDescription && errors?.shortDescription?.message}
            type="text"
            register={register('titleHeader', {
              onChange: (e) => setDataForm({ ...dataForm, metaDescription: e.target.value }),
            })}
            value={dataForm?.metaDescription}
          />
        </div>
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
        <div>
          <TextInput
            label="Keyword"
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert keyword"
            error={errors?.keyWord && errors?.keyWord?.message}
            type="text"
            register={register('keyWord', {
              onChange: (e) => setDataForm({ ...dataForm, keyWord: e.target.value }),
            })}
            value={dataForm?.keyWord}
          />
        </div>
        <div>
          <TextInput
            label="Meta Description"
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert meta description"
            error={errors?.shortDescription && errors?.shortDescription?.message}
            type="text"
            register={register('metaDescription', {
              onChange: (e) => setDataForm({ ...dataForm, metaDescription: e.target.value }),
            })}
            value={dataForm?.metaDescription}
          />
        </div>
        <div>
          <TextInput
            label="Alt"
            labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
            inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
            placeholder="Insert alt image"
            error={errors?.altImage && errors?.altImage?.message}
            type="text"
            register={register('altImage', {
              onChange: (e) => setDataForm({ ...dataForm, altImage: e.target.value }),
            })}
            value={dataForm?.altImage}
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Robot Tags</label>
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
        </div>
        <div>
          <label className="text-sm text-gray-600">Tags</label>
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
        </div>
      </div>
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
