import React, { useRef, useState } from 'react';
import LayoutForm from '@/components/LayoutForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createNewsTips, editNewsTips } from '@/service/news-tips';
import { componentConfigNewsTips } from '@/constants/add-news-page';
import { handleUpload } from '@/service/azure/fileUpload';
import { useRouter } from 'next/router';
import { Spinner, Toast } from 'flowbite-react';
import ModalText from '@/components/modal-text';
import { getCategory, getSlug } from '@/service/news-tips';
import { MdDoneOutline, MdClear } from 'react-icons/md';

const NewsTipsDetail = () => {
  const initialValues = {};
  const [formValues, setFormValues] = useState({});
  const [urlImage, setUrlImage] = useState();
  const [statusType, setStatusType] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const slugId = router.query.id ? JSON.parse(router.query.id) : null;
  const [categories, setCategories] = useState([]);
  const [dataSlug, setDataSlug] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [iconToast, setIconToast] = useState(<MdClear />);
  const [textToast, setTextToast] = useState();
  window.history.replaceState(null, '', `/news-tips/${router.query.slug}`);

  const {
    handleSubmit,
    control,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const handleUploadFile = async (file) => {
    event.preventDefault();
    const uploadData = await handleUpload(file);
    if (uploadData) {
      setUrlImage(uploadData.url);
    } else {
      console.log('Upload failed.');
    }
  };

  const getCategories = async () => {
    const categoriesData = await getCategory();
    if (categoriesData !== null) {
      setCategories(categoriesData);
    }
  };

  const getSlugId = async () => {
    const getData = await getSlug(slugId);
    // console.log('isi ', getData);
    // if (getData !== null) {
    setDataSlug(getData);
    // }
  };

  const handleQuillChange = (value) => {
    setDataForm((prev) => {
      return {
        ...prev,
        detailContent: value,
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

  const onSubmit = async (data) => {
    const categoriesSelect = data.category ? JSON.parse(data.category) : dataSlug.category;
    setLoading(true);

    const dataTemporary = {
      id: slug.includes('add') || slug.includes('duplicate') ? null : data.id,
      heroImageLink:
        'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/image.jpg',
      titlePage: data.title,
      startDate: data.startDate,
      endDate: data.endDate,
      publishedDate: data.publishedDate,
      titleHeader: data.titleHeader,
      slug: data.slug,
      contentCategory: {
        id: 4,
        name: 'MOBIL BARU',
        description: null,
        categoryId: 1,
        priority: 1,
      },
      keyword: data.keyword,
      metaDescription: data.metaDescription,
      altImage: data.altImage,
      priority: 1,
      tag: {
        id: 1,
        name: 'BEST SELLER',
        description: null,
      },
      cmsStatusType: statusType === 'DRAFT' ? 'DRAFT' : 'PUBLISH',
      detailContent: data.detailContent,
    };
    console.log('isi tempore', dataTemporary);
    setStatusType(null);
    let create = null;
    if (slug.includes('edit')) {
      create = await editNewsTips(dataTemporary);
    } else {
      create = await createNewsTips(dataTemporary);
    }
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
    if (slug !== undefined && (slug.includes('edit') || slug.includes('duplicate'))) {
      getSlugId();
    }
  }, []);

  useEffect(() => {
    if (slug.includes('edit') || (slug.includes('duplicate') && dataSlug !== null)) {
      if (dataSlug !== null) {
        const startDate = dataSlug.startDate ? new Date(dataSlug.startDate) : '';
        const endDate = dataSlug.endDate ? new Date(dataSlug.endDate) : '';
        const publishedDate = dataSlug.publishedDate ? new Date(dataSlug.publishedDate) : null;
        const updatedFormValues = {
          id: dataSlug.id || '',
          title: dataSlug.titlePage || '',
          startDate: startDate || '',
          endDate: endDate || '',
          publishedDate: publishedDate || '',
          titleHeader: dataSlug.titleHeader || '',
          slug: dataSlug.slug || '',
          metaDescription: dataSlug.metaDescription || '',
          altImage: dataSlug.altImage || '',
          keyword: dataSlug.keyword || '',
          contentCategory: dataSlug.contentCategory || '',
          detailContent: dataSlug.detailContent || '',
          // add other data fields here if needed later
        };
        Object.keys(updatedFormValues).forEach((key) => {
          setValue(key, updatedFormValues[key]);
        });
      }
    }
  }, [dataSlug, setValue]);

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
        componentConfig={componentConfigNewsTips(categories, dataSlug)}
        errors={errors}
        handleQuillChange={handleQuillChange}
        cancelPage={cancelPage}
        draftPage={draftPage}
      />
    </div>
  );
};

export default NewsTipsDetail;
