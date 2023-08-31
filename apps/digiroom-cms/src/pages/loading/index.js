import { Toast } from 'flowbite-react';

export const loadingEffect = (icons, text, isLoading) => {
  return (
    <div
      className={`fixed inset-x-0 top-10 right-10 z-50 flex justify-center items-center ${
        isLoading ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300`}
    >
      <Toast className="bg-white border border-gray-300 p-3 rounded-md shadow-md justify-center items-center">
        <div className="flex items-center justify-center w-10 h-10 text-black text-2xl">
          {icons}
        </div>
        <div className=" animate-pulse ml-3 text-xl font-normal text-gray-800">{text}</div>
      </Toast>
    </div>
  );
};
