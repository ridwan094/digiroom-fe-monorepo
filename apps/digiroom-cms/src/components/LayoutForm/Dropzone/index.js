import React, { useState } from 'react';

export default function Dropzone({
  onChange = () => {},
  onRemove = () => {}
}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (onChange) {
      onChange(file); // Pass the selected file to the onChange function
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);

    if (onRemove) {
      onRemove();
    }
  };

  return (
    <div className="flex items-center justify-center w-full mb-3">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            drop your image here or <span className="font-semibold">Browse</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Support: JPG, Jpeg2000, PNG</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />

        {selectedFile && (
          <div className="flex p-2 border-2">
            <img style={{ width: 30, height: 30, marginRight: 10 }} src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
            <div className="text-xs text-gray-500 dark:text-gray-400 mr-5">
              {selectedFile.name}
            </div>
            <button className="text-xs text-gray-500 text-end dark:text-gray-400" onClick={handleRemove}>X</button>
          </div>
        )}
      </label>
    </div>
  );
}
