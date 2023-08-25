import { Modal, Button } from 'flowbite-react';

export default function ModalText({
  isOpen,
  onClose,
  modalHeader,
  modalText,
  onConfirm,
  modalTemplate,
}) {
  return (
    <Modal dismissible show={isOpen} onClose={onClose}>
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
