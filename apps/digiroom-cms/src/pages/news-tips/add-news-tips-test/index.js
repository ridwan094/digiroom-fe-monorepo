import React, { useRef, useState } from 'react';
import LayoutForm from '@/components/LayoutForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createNewsTips } from '@/service/news-tips';
import { componentConfigNewsTips } from '@/helpers/utils/news-tips-page/AddNewsPage';
import { handleUpload } from '@/service/azure/fileUpload';
import { useRouter } from 'next/router';
import { Spinner, Toast } from 'flowbite-react';
import { getCategory } from '@/service/news-tips';
import { MdDoneOutline, MdClear } from 'react-icons/md';

const NewsTips = () => {
  const [dataForm, setDataForm] = useState({});
  const [urlImage, setUrlImage] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [statusType, setStatusType] = useState();
  const [buttonClicked, setButtonClicked] = useState();
  const [showToast, setShowToast] = useState(false);
  const [iconToast, setIconToast] = useState(<MdClear />);
  const [textToast, setTextToast] = useState();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const handleUploadFile = async (file) => {
    event.preventDefault();
    const uploadData = await handleUpload(file);
    if (uploadData) {
      setUrlImage(uploadData.url);
    } else {
      console.log('Upload failed.');
    }
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

  const draftPage = () => {
    setStatusType('DRAFT');
    handleSubmit(onSubmit)();
  };

  const cancelPage = () => {
    router.back();
  };

  const getCategories = async () => {
    const categoriesData = await getCategory();
    if (categoriesData !== null) {
      setCategories(categoriesData);
    }
  };

  const onSubmit = async (data) => {
    const categoriesSelect = data.category ? JSON.parse(data.category) : [];
    setLoading(true);
    const dataTemporary = {
      id: null,
      heroImageLink:
        'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/image.jpg',
      titlePage: data.title,
      startDate: data.startDate,
      endDate: data.expiredDate,
      publishedDate: data.publishedDate,
      titleHeader: data.titleHeader,
      slug: data.slug,
      contentCategory: categoriesSelect,
      keyword: data.keyWord,
      metaDescription: data.metaDescription,
      altImage: data.altImage,
      priority: 1,
      tag: {
        id: 1,
        name: 'BEST SELLER',
        description: null,
      },
      cmsStatusType: statusType === 'DRAFT' ? 'DRAFT' : 'PUBLISH',
      detailContent: dataForm.detailPromosi,
    };
    setStatusType(null);
    const create = await createNewsTips(dataTemporary);
    if (create !== null) {
      setLoading(false);
      setShowToast(true);
      setIconToast(<MdDoneOutline />);
      setTextToast('Create News Tips Success');
    } else {
      setLoading(false);
      setShowToast(true);
      setIconToast(<MdClear />);
      setTextToast('Create News Tips Error');
    }
  };

  const editor = useRef();

  useEffect(() => {
    getCategories();
  }, dataForm);
  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
          <Spinner aria-label="Loading" size="lg" />
        </div>
      )}
      {showToast && (
        <Toast
          className="bg-white border border-gray-300 p-3 rounded-md shadow-md"
          style={{ position: 'fixed', right: '20px', transform: 'translateY(-50%)', zIndex: 1000 }}
        >
          <div
            className={`flex rounded-3xl items-center justify-center w-10 h-10 text-white text-2xl ${
              textToast.includes('Success')
                ? 'bg-green-600'
                : textToast.includes('Error')
                ? 'bg-red-600'
                : 'bg-black'
            }`}
          >
            {iconToast}
          </div>
          <div className="ml-3 text-sm font-normal capitalize text-gray-800">{textToast}</div>
          <Toast.Toggle
            onDismiss={() => setShowToast(false)}
            className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer"
          />
        </Toast>
      )}

      <LayoutForm
        control={control}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        handleUpload={handleUploadFile}
        editor={editor}
        showPreviewPage={showPreviewPage}
        componentConfig={componentConfigNewsTips(categories)}
        dataForm={dataForm}
        setDataForm={setDataForm}
        errors={errors}
        handleQuillChange={handleQuillChange}
        cancelPage={cancelPage}
        draftPage={draftPage}
      />
    </div>
  );
};

export default NewsTips;
