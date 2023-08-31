import { Modal } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { BsImageAlt } from 'react-icons/bs';

export default function ModalPreview({ isOpen, onClose, dataPreview }) {
  const data = dataPreview && dataPreview[0];

  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={onClose}
      size={'7xl'}
      className={`transform transition-all ease-in-out ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <Modal.Header>Preview Modal</Modal.Header>
      <Modal.Body>
        <div>
          <div className="bg-white p-4">
            <div className="h-40 bg-slate-100 flex justify-center items-center">
              {data && data.img ? (
                <Image src={data.img} alt="Image" width={100} height={100} />
              ) : (
                <BsImageAlt size={100} color="#D3D2D2" />
              )}
            </div>

            <div className="grid grid-rows-1 grid-col-2 py-4">
              <InfoItem className="col-span-4" label="Title" data={data?.title} />
              <InfoItem className="col-span-2" label="Start Date" data={data?.startDate} />
              <InfoItem className="col-span-2" label="End Date" data={data?.endDate} />
              <InfoItem className="col-span-4" label="Publish Date" data={data?.publishDate} />
              <InfoItem className="col-span-4" label="Detail Product" data={data?.detail} />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const InfoItem = ({ label, data, className }) => (
  <div className={`flex flex-col py-1 ${className}`}>
    <p className="text-lg text-gray-500 mt-4 mb-1 gap-2">{label}</p>
    <p className="text-lg">{data}</p>
  </div>
);
