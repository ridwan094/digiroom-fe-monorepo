import React from 'react';
import generateSlug from '@/helpers/utils/slug';

const LayoutForm = ({
  control,
  register,
  onSubmit,
  handleUpload,
  editor,
  showPreviewPage,
  componentConfig,
  dataForm,
  setDataForm,
  errors,
  handleQuillChange,
  cancelPage
}) => {
  const handleSlug = (txt) => {
    setDataForm({ ...dataForm, slug: generateSlug(txt) });
  };
  return (
    <div className="bg-white p-3 w-full">
      <form onSubmit={onSubmit}>
        {componentConfig.map((config, index) => (
          <div key={index} className="mb-3">
            <div className="font-[500] text-[14px] leading-[17px] text-reliableBlack70 mt-2 mb-4 text-lg font-bold">
              {config.title}
            </div>
            {config.render({
              control,
              handleUpload,
              register,
              dataForm,
              setDataForm,
              errors,
              editor,
              editor,
              handleSlug,
              trigger: register().trigger,
              handleQuillChange,
              showPreviewPage,
              cancelPage
            })}
          </div>
        ))}
      </form>
    </div>
  );
};

export default LayoutForm;
