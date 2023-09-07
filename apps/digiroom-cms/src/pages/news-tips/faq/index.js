import { MdAdd, MdOutlineFileCopy, MdOutlineCreate, MdOutlineDelete } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
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
import {
  getListFaqNewsTips,
  createFaqNewsTips,
  updateFaqNewsTips,
  deleteFaqNewsTips,
} from '@/service/faq/news-tips';

const FaqPage = () => {
  const [title, settitle] = useState(['title', 'description', 'action', 'visibility']);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const [faqData, setFaqData] = useState([]);
  const [sequence, setSequence] = useState(0);
  const [formFaq, setFormFaq] = useState({
    id: null,
    categoryId: 2,
    sequence: sequence + 1,
    faqtitle: '',
    desc: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [createFaq, setCreateFaq] = useState(null);
  const [editFaq, setEditFaq] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalText, setModalText] = useState('');
  const [modalHeader, setModalHeader] = useState('');
  const [caseItems, setCaseItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState();
  const [totalPages, setTotalPages] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(
    faqData.slice(currentPage - 1, itemsPerPage)
  );
  const [faqId, setFaqId] = useState();
  const [page, setPage] = useState([5, 10, 15]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFaq({
      ...formFaq,
      [name]: value,
    });
  };

  const onPageChange = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
      const displayedItems = faqData.slice(startIndex, endIndex);
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
        setEditFaq('dismissible');
        setEditData(faqData[index]);
        setFaqId(faqData[index].id);
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${displayedItems[index].title}`);
        setFaqId(displayedItems[index].id);
        break;
      case 'copy':
        const textToCopy = faqData[index].slug;
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
    var updateFaqData = [...faqData];
    switch (caseItems.newValue) {
      case 'add':
        router.push('/promo/faq');
        break;
      case 'delete':
        setOpenModal(undefined);
        break;
      case false:
        updateFaqData[caseItems.index].boolean = caseItems ? 'inactive' : 'active';
        setDisplayedItems(faqData.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateFaqData = null;
        break;
      case true:
        updateFaqData[caseItems.index].boolean = caseItems ? 'active' : 'inactive';
        setDisplayedItems(faqData.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateFaqData = null;
        break;
      default:
        setOpenModal(undefined);
        break;
    }
  };

  const hideToast = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowToast(false);
    window.location.reload();
  };

  // fetch faq news and tips list
  const fetchFaqList = async () => {
    setIsLoading(true);
    try {
      const data = await getListFaqNewsTips();

      if (data !== null) {
        const faqList = [];

        data.map((item) => {
          faqList.push({
            id: item.id,
            categoryId: item.categoryId,
            sequence: item.sequence,
            title: item.question,
            description: item.answer,
            slug: 'Copy to Clipboard',
            status: 'hidden',
            boolean: 'inactive',
          });
        });

        setFaqData(faqList);
        setTotalItems(faqList.length);
        setTotalPages(Math.ceil(faqList.length / itemsPerPage));

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, faqList.length);
        const displayedItems = faqList.slice(startIndex, endIndex);
        setDisplayedItems(displayedItems);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sequenceIndex = faqData.map((index, item) => {
      return index;
    });

    setSequence(sequenceIndex);
  }, [faqData]);

  // create faq news and tips
  const onSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      categoryId: formFaq.categoryId,
      sequence: formFaq.sequence,
      question: formFaq.faqtitle,
      answer: formFaq.desc,
    };

    try {
      await createFaqNewsTips(reqBody);
      setCreateFaq(undefined);
      setShowToast(true);
      setToastDescription('Successfully added FAQ');
      await hideToast();
    } catch (error) {
      console.error('Error when creating data:', error);
      setCreateFaq(undefined);
      setShowToast(true);
      setToastDescription('Failed to add FAQ');
      await hideToast();
    }
  };

  // update faq news and tips
  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      id: editData.id,
      sequence: editData.sequence,
      question: editData.title,
      answer: editData.description,
    };

    try {
      if (editData) {
        const updatedData = await updateFaqNewsTips(payload);
        const updatedFaqData = [...faqData];
        updatedFaqData[caseItems.index] = updatedData;
        setFaqData(updatedFaqData);
        setDisplayedItems(updatedFaqData.slice(0, itemsPerPage));

        setShowToast(true);
        setToastDescription('Successfully edited FAQ');

        setEditFaq(null);
        setEditData(null);

        await hideToast();
      }
    } catch (error) {
      console.error('Error when updating data:', error);

      setShowToast(true);
      setToastDescription('Failed to edit FAQ');

      setEditFaq(null);
      setEditData(null);

      await hideToast();
    }
  };

  const handleEdit = () => {
    // Update the faqData data with the edited data
    const updateFaqData = [...faqData];
    updateFaqData[caseItems.index] = editData;
    setDisplayedItems(updateFaqData.slice(0, itemsPerPage));

    // Close the edit modal
    setEditFaq(null);
    setEditData(null);
  };

  // delete faq news and tips
  const handleDelete = async () => {
    try {
      await deleteFaqNewsTips(faqId);
      setOpenModal(undefined);
      setShowToast(true);
      setToastDescription('Successfully delete FAQ');
      await hideToast();
    } catch (error) {
      console.error('Error when removing data:', error);
      setOpenModal(undefined);
      setShowToast(true);
      setToastDescription('Failed to delete FAQ');
      await hideToast();
    }
  };

  const handleEditInputChange = (field, value) => {
    setEditData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleToggleChange = (isChecked) => {
    setOpenModal('dismissible');
    setModalText(!isChecked.newValue ? 'hide' : 'show');
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
        <p className="px-2 py-4 relative text-lg uppercase font-bold">News and Tips</p>
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
          <Table.Body class="divide-y">
            {displayedItems.map((item, index) => (
              <Table.Row key={index} className={isLoading ? 'animate-pulse' : ''}>
                <Table.Cell className="max-w-lg">{item.title}</Table.Cell>
                <Table.Cell>{item.description}</Table.Cell>
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
                        item.boolean === 'active'
                          ? 'bg-blue-400'
                          : item.boolean === 'inactive'
                          ? 'bg-red-400'
                          : item.boolean === 'waitings'
                          ? 'bg-yellow-500'
                          : 'bg-gray-200'
                      } rounded-full text-white capitalized text-md flex justify-center items-center font-Montserrat`}
                    >
                      {item.boolean === 'active' ? (
                        <FaEye size={18} />
                      ) : item.boolean === 'inactive' ? (
                        <FaEyeSlash size={18} />
                      ) : (
                        'Waiting'
                      )}
                    </div>
                    <ToggleSwitch
                      index={index}
                      disabled={item.boolean === 'waitings'}
                      value={item.boolean === 'active'}
                      onToggleChange={handleToggleChange}
                      classNameLabel={`w-11 h-6 bg-gray-200 rounded-full peer  
                    peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] 
                    after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all ${
                      item.boolean === 'active'
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
                Are you sure you want to {modalText} this data?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => handleDelete()}>
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
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-4">
                <div className="block -mb-3">
                  <Label htmlFor="faqtitle" className="font-semibold text-reliableBlack60">
                    FAQ Title
                  </Label>
                </div>
                <TextInput
                  class="bg-reliableBlack5 w-full p-2 rounded-none border-b-2 border-reliableBlack30 focus:border focus:ring-1 focus:ring-reliableBlack30 focus:border-reliableBlack30"
                  id="faqtitle"
                  name="faqtitle"
                  value={formFaq.faqtitle}
                  onChange={handleChange}
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
                  name="desc"
                  value={formFaq.desc}
                  onChange={handleChange}
                  sizing="lg"
                  type="textarea"
                  rows={5}
                />
              </div>
              <div className="flex justify-center items-center mt-6 gap-4">
                <Button
                  className="w-1/2 rounded"
                  color="failure"
                  type="submit"
                  // onClick={() => (window.location.href = '/promo/faq')}
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
            </form>
          </Modal.Body>
        </Modal>

        {/* Edit Modal */}
        <Modal
          dismissible
          show={editFaq === 'dismissible'}
          onClose={() => {
            setEditFaq(null);
            setEditData(null);
          }}
        >
          <Modal.Header>
            <h2 className="text-3xl font-bold">Edit FAQ</h2>
          </Modal.Header>
          <form onSubmit={handleUpdate}>
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
                  value={editData ? editData.title : ''} // Set default value from editData
                  onChange={(e) => handleEditInputChange('title', e.target.value)} // Add onChange handler
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
                  value={editData ? editData.description : ''} // Set default value from editData
                  onChange={(e) => handleEditInputChange('description', e.target.value)} // Add onChange handler
                />
              </div>
              <div className="flex justify-center items-center mt-6 gap-4">
                {/* <Button className="w-1/2 rounded" color="success" onClick={() => handleEdit()}>
                Save Changes
              </Button> */}
                <Button className="w-1/2 rounded" color="success" type="submit">
                  Save Changes
                </Button>
                <Button
                  className="w-1/2 rounded"
                  color="gray"
                  onClick={() => {
                    setEditFaq(null);
                    setEditData(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Modal.Body>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default FaqPage;
