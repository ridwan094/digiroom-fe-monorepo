import { MdAdd, MdOutlineFileCopy, MdOutlineCreate, MdOutlineDelete } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Button, Toast, Tooltip, Modal, Spinner } from 'flowbite-react';
import ToggleSwitch from 'ui/components/atoms/Toogle';
import Dropdown from 'ui/components/atoms/Dropdown';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columns } from '@/constants/implement-table';

const DashboardPromo = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const itemProduct = [
    {
      title: 'Promo Yaris',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo HRV',
      slug: 'OKE',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo HR',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo Yaris',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'waitings',
    },
    {
      title: 'Promo Yaris',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo Yaris',
      slug: 'wow',
      datePublished: new Date().toDateString(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [modalText, setModalText] = useState('');
  const [modalHeader, setModalHeader] = useState('');
  const [caseItems, setCaseItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(itemProduct.length);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));
  const [displayedItems, setDisplayedItems] = useState(
    itemProduct.slice(currentPage - 1, itemsPerPage)
  );
  const [page, setPage] = useState([5, 10, 15]);
  const router = useRouter();

  const onPageChange = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
      const displayedItems = itemProduct.slice(startIndex, endIndex);
      setCurrentPage(page);
      setDisplayedItems(displayedItems);
      setIsLoading(false);
    }, 1000);
  };

  const addListPromo = () => {
    router.push('/#');
  };

  const onClick = (items, index) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        router.push('/#');
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${displayedItems[index].title}`);
        break;
      case 'copy':
        const textToCopy = itemProduct[index].slug;
        copyToClipboard(textToCopy);
        setShowToast(!showToast);
        setToastDescription('Copy to Clipboard');
        setToastIcons(<MdOutlineFileCopy />);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
        break;
    }
  };

  const dropdownPageChange = (selectedValue) => {
    setItemsPerPage(selectedValue);
    setTotalPages(Math.ceil(totalItems / selectedValue));
    onPageChange(1);
  };

  const onClickModal = () => {
    var updateItemProduct = [...itemProduct];
    switch (caseItems.newValue) {
      case false:
        updateItemProduct[caseItems.index].boolean = caseItems ? 'inactive' : 'active';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
      case true:
        updateItemProduct[caseItems.index].boolean = caseItems ? 'active' : 'inactive';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
      default:
        setOpenModal(undefined);
        break;
    }
  };

  const handleToggleChange = (isChecked) => {
    console.log('isi data', isChecked);
    // setOpenModal('dismissible');
    // setModalText(!isChecked.newValue ? 'unpublished' : 'published');
    // setModalHeader(displayedItems[isChecked.index].title);
    // setCaseItems(isChecked);
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  useEffect(() => {
    onPageChange(1);
  }, [itemsPerPage]);

  return (
    <div className="relative w-full">
      <div
        className={`fixed inset-x-0 top-10 right-10 z-50 flex justify-end items-left ${
          showToast
            ? 'opacity-100 transition-opacity duration-300'
            : 'opacity-0 transition-opacity duration-300'
        }`}
      >
        {showToast && (
          <Toast className="bg-white border border-gray-300 p-3 rounded-md shadow-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white text-2xl">
              {toastIcons}
            </div>
            <div className="ml-3 text-sm font-normal text-gray-800">{toastDescription}</div>
            <Toast.Toggle
              onDismiss={() => setShowToast(false)}
              className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer"
            />
          </Toast>
        )}
      </div>
      <div className={`flex items-center justify-between ${isLoading ? 'opacity-50' : ''}`}>
        <p className="px-2 py-4 relative text-lg uppercase font-bold">promo</p>
        <Button color="light" onClick={() => addListPromo()}>
          <p className="flex items-center gap-2">
            <MdAdd /> Add
          </p>
        </Button>
      </div>
      <div className="relative">
        <CustomTable
          columns={columns}
          dataSource={itemProduct}
          pagination={{
            currentPage,
            totalPages,
            itemsPerPage,
            page,
            displayedItems,
          }}
          onPageChange={onPageChange}
          onAddListPromo={addListPromo}
          onClick={onClick}
          onToggleChange={handleToggleChange}
          loading={isLoading}
          onDropdownPageChange={dropdownPageChange}
        />
      </div>
      {/* <div className="mt-2 text-gray-600 flex flex-row justify-end gap-2">
        <div className="flex items-center border border-grey-200 rounded-lg px-2 mt-1.5">
          Showing {itemsPerPage * (currentPage - 1) + 1} to{' '}
          <Dropdown
            text={Math.min(itemsPerPage * currentPage, totalItems)}
            onSelect={dropdownPageChange}
            selectedOption={itemsPerPage}
            options={page}
            size="w-11"
          />{' '}
          of {totalItems} items
        </div>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons
          totalPages={totalPages}
          className="flex justify-center items-center"
        />
      </div> */}

      {/* Modal */}
      <div>
        <Modal
          dismissible
          show={openModal === 'dismissible'}
          onClose={() => setOpenModal(undefined)}
        >
          <Modal.Header>{modalHeader}</Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500">
                Are you sure you want to {modalText} this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => onClickModal()}>
                  Yes, I&apos;m sure
                </Button>
                <Button color="gray" onClick={() => setOpenModal(undefined)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default DashboardPromo;
