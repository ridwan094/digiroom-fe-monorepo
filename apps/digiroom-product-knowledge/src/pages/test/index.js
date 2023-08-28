import { useEffect, useState } from 'react';
import { ModalShare, OfferCard } from 'ui';

export default function Test() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    console.log(openModal);
  });

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <button
        className="bg-supportiveRed text-white font-bold text-lg px-12 py-3 rounded-md"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>

      {openModal && <OfferCard close={handleCloseModal} />}
    </div>
  );
}
