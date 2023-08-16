'use client';

import { MdAdd, MdOutlineFileCopy, MdOutlineCreate, MdOutlineDelete } from 'react-icons/md';
import React, { useState } from 'react';
import {
  Table,
  Pagination,
  Button,
  Toast,
  Tooltip,
  Modal,
  Spinner,
  Label,
  TextInput,
  Textarea,
} from 'flowbite-react';
import ToggleSwitch from 'ui/components/atoms/Toogle';
import Dropdown from 'ui/components/atoms/Dropdown';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const FaqPage = () => {
  const [title, settitle] = useState(['title', 'description', 'action', 'visibility']);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const itemProduct = [
    {
      title: 'This is FAQ 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'hidden',
      boolean: 'inactive',
    },
    {
      title: 'Mengapa danu ganteng banget unch ikeh ikeh rraaawwwrrr',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'hidden',
      boolean: 'inactive',
    },
    {
      title: 'This is FAQ 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'hidden',
      boolean: 'inactive',
    },
    {
      title: 'This is FAQ 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'showed',
      boolean: 'active',
    },
    {
      title: 'This is FAQ 5',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'hidden',
      boolean: 'inactive',
    },
    {
      title: 'This is FAQ 6',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'hidden',
      boolean: 'inactive',
    },
    {
      title: 'This is FAQ 7',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ullam! Libero in necessitatibus ad fugit?',
      status: 'showed',
      boolean: 'active',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [createFaq, setCreateFaq] = useState(null);
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
      case 'add':
        setCreateFaq('dismissible');
        break;
      case 'edit':
        setCreateFaq('dismissible');
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
    switch (caseItems.newValue ? caseItems.newValue : caseItems) {
      case 'add':
        router.push('/promo/faq');
        break;
      case 'delete':
        setOpenModal(undefined);
        break;
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
    }
  };

  const handleToggleChange = (isChecked) => {
    setOpenModal('dismissible');
    setModalText(!isChecked.newValue ? 'hidden' : 'showed');
    setModalHeader(displayedItems[isChecked.index].title);
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
    <div className="relative w-full bg-white p-6">
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
        <Button
          className="p-0 border border-sky-300"
          color="light"
          onClick={() => setCreateFaq('dismissible')}
        >
          <span className="flex items-center gap-2">
            <MdAdd /> Add
          </span>
        </Button>
      </div>
      <div className="relative overflow-x-auto">
        <Table striped hoverable className={`${isLoading ? 'opacity-20' : ''}`}>
          <Table.Head>
            {title.map((title, index) => (
              <Table.HeadCell className="bg-red-50" key={index}>
                {title}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {displayedItems.map((itemProduct, index) => (
              <Table.Row key={index} className={isLoading ? 'animate-pulse' : ''}>
                <Table.Cell className="max-w-lg">{itemProduct.title}</Table.Cell>
                <Table.Cell>{itemProduct.description}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-rows hover:cursor-pointer gap-2">
                    <Tooltip content="Edit">
                      <MdOutlineCreate
                        className="text-2xl text-blue-500"
                        onClick={() => onClick('edit', index)}
                      />
                    </Tooltip>
                    <Tooltip content="Delete">
                      <MdOutlineDelete
                        className="text-2xl text-red-500"
                        onClick={() => onClick('delete', index)}
                      />
                    </Tooltip>
                    <Tooltip content="Copy">
                      <MdOutlineFileCopy
                        className="text-2xl text-black"
                        onClick={() => onClick('copy', index)}
                      />
                    </Tooltip>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`p-1.5 w-full h-full border border-gray-200 ${
                        itemProduct.boolean === 'active'
                          ? 'bg-blue-400'
                          : itemProduct.boolean === 'inactive'
                          ? 'bg-red-400'
                          : itemProduct.boolean === 'waitings'
                          ? 'bg-yellow-500'
                          : 'bg-gray-200'
                      } rounded-full text-white capitalized text-md flex justify-center items-center font-Montserrat`}
                    >
                      {itemProduct.boolean === 'active' ? (
                        <FaEye size={18} />
                      ) : itemProduct.boolean === 'inactive' ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        'Waiting'
                      )}
                    </div>
                    <ToggleSwitch
                      index={index}
                      disabled={itemProduct.boolean === 'waitings'}
                      value={itemProduct.boolean === 'active'}
                      onToggleChange={handleToggleChange}
                      classNameLabel={`w-11 h-6 bg-gray-200 rounded-full peer  
                    peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all ${
                      itemProduct.boolean === 'active'
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
      </div>

      {/* Modal delete & toogle */}
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
                <Button color="failure" onClick={() => onClickModal('add')}>
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

      {/* Create Modal */}
      <div>
        <Modal
          dismissible
          show={createFaq === 'dismissible'}
          onClose={() => setCreateFaq(undefined)}
        >
          <Modal.Header>
            <h2 className="text-3xl font-bold">Create FAQ</h2>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-col gap-4">
              <div className="block -mb-3">
                <Label htmlFor="faqtitle" className="font-semibold text-reliableBlack60">
                  FAQ Title
                </Label>
              </div>
              <TextInput
                class="bg-reliableBlack5 w-full p-2 rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
                id="faqtitle"
                type="text"
              />
              <div className="block -mb-3">
                <Label htmlFor="desc" className="font-semibold text-reliableBlack60">
                  FAQ Description
                </Label>
              </div>
              <Textarea
                className="bg-reliableBlack5 p-2 rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
                id="desc"
                sizing="lg"
                type="textarea"
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-6 gap-4">
              <Button
                className="w-1/2 rounded"
                color="failure"
                onClick={() => (window.location.href = '/promo/faq')}
              >
                Submit
              </Button>
              <Button
                className="w-1/2 rounded"
                color="gray"
                onClick={() => setCreateFaq(undefined)}
              >
                Cancel
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default FaqPage;
