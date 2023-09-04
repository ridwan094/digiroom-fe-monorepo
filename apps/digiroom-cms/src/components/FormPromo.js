import React, { useRef, useState, useEffect } from 'react';
import Dropzone from './LayoutForm/Dropzone';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'ui';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCalendarToday } from 'react-icons/md';
import generateSlug from '@/helpers/utils/slug';
import Select from 'react-select';
import { handleUpload } from '@/service/azure/fileUpload';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { getAzurePublicUrl } from '@/constants';
import { createPromo, updatePromo, getPromoBySlug as getPromoBySlugApi } from '@/service/promo';
import { typePage } from '@/constants/type';
import Router from 'next/router';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function FormPromo({ pathSlug, type }) {
  const [dataForm, setDataForm] = useState({
    id: '',
    file: '',
    titlePage: '',
    datePublished: '',
    dateExpired: '',
    detailPromosi: '',
    titleHeader: '',
    slug: '',
    keyword: '',
    metaDescription: '',
    showPage: [],
    robotsTag: [],
    region: [],
    city: [],
    branch: [],
    tags: [],
    ordering: 0,
    alt: '',
  });

  const getPromoBySlug = async () => {
    const dataPromo = await getPromoBySlugApi(pathSlug);

    setDataForm({
      id: dataPromo?.id,
      file: dataPromo?.heroImageLink,
      titlePage: dataPromo?.titlePage,
      datePublished: dataPromo?.publishedDate,
      dateExpired: dataPromo?.endDate,
      detailPromosi: dataPromo?.detailContent,
      titleHeader: dataPromo?.titleHeader,
      slug: dataPromo?.slug,
      keyword: dataPromo?.keyword,
      metaDescription: dataPromo?.metaDescription,
      ordering: dataPromo?.ordering,
    })
  }

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if(pathSlug) {
      getPromoBySlug();
    }
  }, [])

  const onSubmit = async (data) => {
    const startDate = data?.startDate?.toISOString();
    const endDate = data?.endDate?.toISOString();
    const publishDate = data?.publishDate?.toISOString();
    const imageUrl = await getAzurePublicUrl(data?.file)

    const reqBody = {
      "heroImageLink": imageUrl,
      "titlePage": dataForm?.titlePage,
      "startDate": startDate,
      "endDate": endDate,
      "publishDate": publishDate,
      "detailContent": dataForm?.detailPromosi,
      "titleHeader": dataForm?.titleHeader,
      "slug": dataForm?.slug,
      "contentCategory": {
        "id": 1,
        "contentCategoryType": "MOBIL_BARU",
        "name": "MOBIL BARU",
        "description": null,
        "categoryId": 1,
        "priority": 1
      },
      "keyword": dataForm?.keyword,
      "metaDescription": dataForm?.metaDescription,
      "altImage": dataForm?.alt,
      "ordering": parseInt(dataForm?.ordering) 
    }

    let res = null;

    if (pathSlug) {
      if(type === typePage.UPDATE) {
        const data = {id: dataForm?.id, ...reqBody};

        res = await updatePromo(data);
      } 
      else if(type === typePage.DUPLICATE) {
        res = await createPromo(reqBody);
      }
    } else {
      res = await createPromo(reqBody);
    }

    if(res) {
      Router.push('/promo')
    }
  };

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

  const robotsTags = [
    { value: 'index', label: 'Index' },
    { value: 'follow', label: 'Follow' },
    { value: 'noindex', label: 'Noindex' },
    { value: 'nofollow', label: 'Nofollow' },
    { value: 'noimageindex', label: 'Noimageindex' },
    { value: 'nocache', label: 'Nocache' },
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
    window.open("http://localhost:3004/promo/preview", "_blank"); 
  };

  return (
    <div className="bg-white p-3 w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            control={control}
            name="file"
            defaultValue={dataForm?.file}
            render={({ field }) => (
              <Dropzone 
                onChange={(file) => {
                  handleUpload(file);
                  field.onChange(file);
                }}
                initialValue={dataForm?.file}
                onRemove={() => setDataForm({ ...dataForm, file: null })}
              />
            )}
        />
        <TextInput
          label="Title Page"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert title page"
          error={errors?.title && errors?.title?.message}
          type="text"
          register={register('titlePage', {
            onChange: (e) => setDataForm({ ...dataForm, titlePage: e.target.value }),
          })}
          value={dataForm?.titlePage}
        />
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

        <label className="font-[500] text-[14px] leading-[17px] text-reliableBlack70 mb-4">
          Detail Promosi
        </label>
        <ReactQuill
          ref={editor}
          theme="snow"
          className="my-3"
          value={dataForm.detailPromosi}
          onChange={handleDetailPromo}
          register={register('detailPromosi')}
        />

        <p className="pt-5 pb-5 text-lg font-semibold">ADDITIONAL FORM</p>

        <TextInput
          label="Title Header"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert title header"
          error={errors?.title && errors?.title?.message}
          type="text"
          register={register('titleHeader', {
            onChange: (e) => setDataForm({ ...dataForm, titleHeader: e.target.value }),
          })}
          value={dataForm?.titleHeader}
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
        </div>

        <TextInput
          label="Keyword"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert keyword"
          error={errors?.keyword && errors?.keyword?.message}
          type="text"
          register={register('keyword', {
            onChange: (e) => setDataForm({ ...dataForm, keyword: e.target.value }),
          })}
          value={dataForm?.keyword}
        />

        <TextInput
          label="Meta Description"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert short description"
          error={errors?.metaDescription && errors?.metaDescription?.message}
          type="text"
          register={register('metaDescription', {
            onChange: (e) => setDataForm({ ...dataForm, metaDescription: e.target.value }),
          })}
          value={dataForm?.metaDescription}
        />

        <TextInput
          label="ALT"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert alt"
          error={errors?.alt && errors?.alt?.message}
          type="text"
          register={register('alt', {
            onChange: (e) => setDataForm({ ...dataForm, alt: e.target.value }),
          })}
          value={dataForm?.alt}
        />

        <TextInput
          label="Ordering"
          containerClassName="w-[48%]"
          labelClassName="font-[500] text-[14px] leading-[17px] text-reliableBlack70"
          inputClassName="mb-3 border-b border-gray100 placeholder-gray80 text-[16px] py-[12px] px-[14px] mt-[8px]  text-[#777777] font-[400]"
          placeholder="Insert Ordering"
          error={errors?.ordering && errors?.ordering?.message}
          type="text"
          register={register('ordering', {
            onChange: (e) => setDataForm({ ...dataForm, ordering: e.target.value }),
          })}
          value={dataForm?.ordering}
        />

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

        <div className="flex justify-between mt-[48px]">
          <div>
            <button className="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold ">
              CANCEL
            </button>
          </div>
          <div className="flex">
            <button onClick={showPreviewPage} className="text-reliableBlack90  py-2 px-4 tracking-wide border border-transparent text-[16px] font-bold ">
              PREVIEW
            </button>
            <button
              type="submit"
              className="bg-reliableBlack90 rounded-[4px] tracking-wide text-white  py-2 px-4 border border-transparent text-[16px] font-bold "
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
