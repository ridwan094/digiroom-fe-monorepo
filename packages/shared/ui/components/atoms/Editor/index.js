import React from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor({ onChange, value, register }) {
  return (
    <>
      <label className="font-[500] text-[14px] leading-[17px] text-reliableBlack70 mb-4">
        Detail Promosi
      </label>
      <ReactQuill
        theme="snow"
        className='my-3'
        value={value}
        onChange={onChange}
        {...register}
      />
    </>
  );
}
