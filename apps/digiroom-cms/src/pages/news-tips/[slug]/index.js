import React, { useRef, useState } from 'react';
import LayoutForm from '@/components/LayoutForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createNewsTips } from '@/service/news-tips';
import { componentConfigNewsTips } from '@/constants/add-news-page';
import { handleUpload } from '@/service/azure/fileUpload';
import { useRouter } from 'next/router';
import { Spinner, Toast } from 'flowbite-react';
import ModalText from '@/components/modal-text';
import CustomBreadCumb from '@/components/Breadcrumb';
import { getCategory, getSlug } from '@/service/news-tips';

const NewsTipsDetail = () => {
  window.history.replaceState(null, '', '/news-tips/edit-news-tips');
  const [dataForm, setDataForm] = useState({});
  const [urlImage, setUrlImage] = useState();
  const [statusType, setStatusType] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const slugId = router.query.id ? JSON.parse(router.query.id) : null;
  const [categories, setCategories] = useState([]);
  const [dataSlug, setDataSlug] = useState();
  const {
    handleSubmit,
    control,
    register,
    reset,
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

  const getCategories = async () => {
    const categoriesData = await getCategory();
    if (categoriesData !== null) {
      setCategories(categoriesData);
    }
  };

  const getSlugId = async () => {
    const slugData = await getSlug(slugId);
    console.log('isi slug data', slugData);
    if (slugData !== null) {
      setDataSlug(slugData);
    }
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
    const categoriesSelect = data.category ? JSON.parse(data.category) : [];
    setLoading(true);

    const dataTemporary = {
      id: slug.includes('edit') ? null : data.id,
      heroImageLink:
        'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/image.jpg',
      titlePage: data.title,
      startDate: data.startDate,
      endDate: data.expiredDate,
      publishedDate: data.publishedDate,
      titleHeader: data.titleHeader,
      slug: data.slug,
      contentCategory: categoriesSelect,
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
      detailContent: dataForm.detailContent,
    };
    console.log('isi tempore', dataTemporary);
    setStatusType(null);
    // const create = await createNewsTips(dataTemporary);
    // if (create === 'Success') {
    //   setLoading(false);
    // } else {
    //   setLoading(false);
    // }
  };

  const editor = useRef();

  useEffect(() => {
    getCategories();
    getSlugId();
  }, []);

  useEffect(() => {
    if (slug.includes('edit') && dataSlug) {
      const startDate = dataSlug.startDate ? new Date(dataSlug.startDate) : '';
      const endDate = dataSlug.endDate ? new Date(dataSlug.endDate) : '';
      const publishedDate = dataSlug.publishedDate ? new Date(dataSlug.publishedDate) : null;

      reset({
        id: dataSlug.id || '',
        title: dataSlug.titlePage || '',
        startDate: startDate || '',
        endDate: endDate || '',
        publishedDate: publishedDate || '',
        titleHeader: dataSlug.titleHeader || '',
        slug: dataSlug.slug || '',
        metaDescription: dataSlug.metaDescription || '',
        altImage: dataSlug.altImage || '',
        keyWord: dataSlug.keyword || '',
        contentCategory: dataSlug.category || '',
        // ... Add other fields and their data here
      });
      // setDataForm((dataForm.detailPromosi = dataSlug.detailContent));
    }
  }, [slug, dataSlug]);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
          <Spinner aria-label="Loading" size="lg" />
        </div>
      )}

      <LayoutForm
        control={control}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        handleUpload={handleUploadFile}
        editor={editor}
        showPreviewPage={showPreviewPage}
        componentConfig={componentConfigNewsTips(categories, dataSlug)}
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

export default NewsTipsDetail;
