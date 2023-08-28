import { Modal, Button } from 'flowbite-react';

export default function ModalText({ isOpen, onClose, modalHeader, modalText, onConfirm }) {
  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={onClose}
      className={`transform transition-all ease-in-out ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90' // Adjust the scale value as needed
      }`}
    >
      <Modal.Header>{modalHeader}</Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500">
            Are you sure you want to {modalText} this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Yes, I&apos;m sure
            </Button>
            <Button color="gray" onClick={onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
