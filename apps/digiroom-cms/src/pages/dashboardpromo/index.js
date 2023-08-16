import {
  MdSearch,
  MdAdd,
  MdOutlineFileCopy,
  MdOutlineCreate,
  MdDeleteOutline,
  MdOutlineDelete,
  MdCheckCircleOutline,
} from 'react-icons/md';
import React, { useState } from 'react';
import { Table, Pagination, Button, Toast, Tooltip, Modal, Spinner } from 'flowbite-react';
import ToggleSwitch from 'ui/components/atoms/Toogle';
import { Dropdown } from 'ui';

const DashboardPromo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const props = { showToast, setShowToast };

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const Title = ['promo name', 'slug', 'date publised', 'expired date', 'action', 'status'];

  const itemProduct = [
    {
      Title: 'Promo Yaris',
      Slug: 'wow',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'inactive',
    },
    {
      Title: 'Promo HRV',
      Slug: 'shy',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'active',
    },
    {
      Title: 'Promo CRT',
      Slug: 'soemthing liek that',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'active',
    },
    {
      Title: 'Promo CDR',
      Slug: 'big ben',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'inactive',
    },
    {
      Title: 'Toyota Camry',
      Slug: 'i try to',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'waitings',
    },
    {
      Title: 'Promo Raize',
      Slug: 'ultima',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'inactive',
    },
    {
      Title: 'Promo Corolla Cross',
      Slug: 'coffee',
      DatePublished: new Date(),
      ExpiredDate: currentDate,
      Status: 'Published',
      Boolean: 'active',
    },
  ];

  //   const itemsPerPage = 5;
  //   const totalItems = itemProduct.length;
  //   const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [openModal, setOpenModal] = useState();
  const [modalText, setModalText] = useState('');
  const [modalHeader, setModalHeader] = useState('');
  const [caseItems, setCaseItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(itemProduct.length);
  const [totalPages, setTotalPage] = useState(Math.ceil(totalItems / itemsPerPage));
  const [displayedItems, setDisplayedItems] = useState(
    itemProduct.slice(currentPage - 1, itemsPerPage)
  );

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

  const onClick = (items, index) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${displayedItems[index].Title}`);
        break;
      case 'copy':
        const textToCopy = itemProduct[index].Slug;
        copyToClipboard(textToCopy);
        props.setShowToast(!props.showToast);
        setToastDescription('Copy to Clipboard');
        setToastIcons(<MdOutlineFileCopy />);
        setTimeout(() => {
          props.setShowToast(false);
        }, 2000);
        break;
    }
  };

  const dropdownPageChange = (selectedValue) => {
    console.log('Selected Rows per Page:', selectedValue);
    setitemsPerPage(selectedValue);
    setDisplayedItems(itemProduct.slice(currentPage - 1, selectedValue));
  };

  const page = [5, 10, 15];

  const onClickModal = () => {
    var updateItemProduct = [...itemProduct];
    switch (caseItems ? caseItems.newValue : caseItems) {
      case 'delete':
        setOpenModal(undefined);
        break;
      case false:
        updateItemProduct[caseItems.index].Boolean = caseItems ? 'inactive' : 'active';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
      default:
        updateItemProduct[caseItems.index].Boolean = caseItems ? 'active' : 'inactive';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
    }
  };

  const handleToggleChange = (isChecked) => {
    console.log('isi index', isChecked.index);
    setOpenModal('dismissible');
    setModalText(!isChecked.newValue ? 'unpublished' : 'published');
    setModalHeader(displayedItems[isChecked.index].Title);
    setCaseItems(isChecked);
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <div className="relative w-3/4">
      <div
        className={`fixed inset-x-0 top-10 right-10 z-50 flex justify-end items-left ${
          props.showToast
            ? 'opacity-100 transition-opacity duration-300'
            : 'opacity-0 transition-opacity duration-300'
        }`}
      >
        {props.showToast && (
          <Toast className="bg-white border border-gray-300 p-3 rounded-md shadow-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white text-2xl">
              {toastIcons}
            </div>
            <div className="ml-3 text-sm font-normal text-gray-800">{toastDescription}</div>
            <Toast.Toggle
              onDismiss={() => props.setShowToast(false)}
              className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer"
            />
          </Toast>
        )}
      </div>
      <div className={`flex items-center justify-between ${isLoading ? 'opacity-50' : ''}`}>
        <p className="px-2 py-4 relative text-lg uppercase font-bold">promo</p>
        <Button color="light">
          <p className="flex items-center gap-2">
            <MdAdd /> Add
          </p>
        </Button>
      </div>
      <div className="relative">
        <Table className={`${isLoading ? 'opacity-20' : ''}`}>
          <Table.Head>
            {Title.map((title, index) => (
              <Table.HeadCell key={index}>{title}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body class="divide-y">
            {displayedItems.map((itemProduct, index) => (
              <Table.Row key={index} className={isLoading ? 'animate-pulse' : ''}>
                <Table.Cell>{itemProduct.Title}</Table.Cell>
                <Table.Cell>{itemProduct.Slug}</Table.Cell>
                <Table.Cell>{itemProduct.DatePublished.toDateString()}</Table.Cell>
                <Table.Cell>{itemProduct.ExpiredDate.toDateString()}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-rows hover:cursor-pointer gap-2">
                    <Tooltip content="Edit">
                      <MdOutlineCreate
                        className="text-2xl"
                        onClick={() => onClick('edit', index)}
                      />
                    </Tooltip>
                    <Tooltip content="Delete">
                      <MdOutlineDelete
                        className="text-2xl"
                        onClick={() => onClick('delete', index)}
                      />
                    </Tooltip>
                    <Tooltip content="Copy">
                      <MdOutlineFileCopy
                        className="text-2xl"
                        onClick={() => onClick('copy', index)}
                      />
                    </Tooltip>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 w-full h-full border border-gray-200 ${
                        itemProduct.Boolean === 'active'
                          ? 'bg-gray-200'
                          : itemProduct.Boolean === 'inactive'
                          ? 'bg-gray-300'
                          : itemProduct.Boolean === 'waitings'
                          ? 'bg-gray-500'
                          : 'bg-gray-200'
                      } rounded-full text-black capitalized text-md flex justify-center items-center font-Montserrat`}
                    >
                      {itemProduct.Boolean === 'active'
                        ? 'Published'
                        : itemProduct.Boolean === 'inactive'
                        ? 'Unpublished'
                        : 'Waiting'}
                    </div>
                    <ToggleSwitch
                      index={index}
                      disabled={itemProduct.Boolean === 'waitings'}
                      value={itemProduct.Boolean === 'active'}
                      onToggleChange={handleToggleChange}
                      classNameLabel={`w-11 h-6 bg-gray-200 rounded-full peer  
                    peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all ${
                      itemProduct.Boolean === 'active'
                        ? 'peer-checked:bg-gray-800 peer-checked:after:translate-x-full'
                        : 'peer-checked:after:translate-x-0'
                    } `}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
            <Spinner aria-label="Loading" size="lg" />
          </div>
        )}
      </div>
      <div className="mt-2 text-gray-600 flex flex-row justify-end gap-2">
        <p className="flex items-center border border-grey-200 rounded-lg px-2 mt-1.5">
          Showing {itemsPerPage * (currentPage - 1) + 1} to{' '}
          <Dropdown
            text={Math.min(itemsPerPage * currentPage, totalItems)}
            onSelect={dropdownPageChange}
            selectedOption={itemsPerPage}
            options={page}
            size="w-11"
          />{' '}
          of {totalItems} items
        </p>
        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          showIcons
          totalPages={totalPages}
          className="flex justify-center items-center"
        />
      </div>

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
