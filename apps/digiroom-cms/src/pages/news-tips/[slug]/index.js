import React, { useRef, useState } from 'react';
import LayoutForm from '@/components/LayoutForm';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createNewsTips } from '@/service/news-tips-dashboard/news-tips-dashboard';
import { componentConfigNewsTips } from '@/constants/add-news-page';
import { handleUpload } from '@/service/azure/fileUpload';
import { useRouter } from 'next/router';
import { Spinner, Toast } from 'flowbite-react';
import ModalText from '@/components/modal-text';

const NewsTipsDetail = () => {
  const [dataForm, setDataForm] = useState({});
  const [urlImage, setUrlImage] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState();
  const router = useRouter();
  const { slug } = router.query;
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

  const draftPage = (data) => {};

  const cancelPage = () => {
    router.back();
  };

  const onSubmit = async (data) => {
    setLoading(true);

    const dataTemporary = {
      heroImageLink:
        'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/mukaseneng.jpg?sp=racwdli&st=2023-08-29T07:30:27Z&se=2026-06-30T15:30:27Z&spr=https&sv=2022-11-02&sr=c&sig=N4eYieESRJHkTZ1PSN2F6W%2Fz7AGJUcLyXOPgBsTehek%3D',
      titlePage: data.title,
      startDate: data.startDate,
      endDate: data.expiredDate,
      publishDate: data.publishedDate,
      titleHeader: data.titleHeader,
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
      metaDescription: data.metaDescription,
      altImage: data.altImage,
      ordering: 1,
      metaRobotList: data.robotTags,
      cmsStatusType: 'DRAFT',
      detailContent: dataForm.detailPromosi,
    };
    const create = await createNewsTips(dataTemporary);
    if (create === 'Success') {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const editor = useRef();

  useEffect(() => {}, dataForm, slug);
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
        componentConfig={componentConfigNewsTips}
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
