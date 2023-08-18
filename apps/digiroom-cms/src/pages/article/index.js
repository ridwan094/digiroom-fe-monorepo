import { useState } from 'react';
import { Button } from 'flowbite-react';
import {
  MdAdd,
  MdSearch,
  MdFilterList,
  MdOutlineCreate,
  MdOutlineDelete,
  MdOutlineFileCopy,
} from 'react-icons/md';
import { Table, Pagination, Toast, Tooltip, Modal, Spinner } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import ToggleSwitch from 'ui/components/atoms/Toogle';
import Link from 'next/link';

const DashboardNewsAndTips = () => {
  const router = useRouter();
  const [title, settitle] = useState([
    'Article Name',
    'slug',
    'date publised',
    'Category',
    'action',
    'status',
  ]);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const itemProduct = [
    {
      title: 'Promo Yaris',
      image: 'https://placehold.co/368x220',
      slug: 'wow',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo HRV',
      image: 'https://placehold.co/368x220',
      slug: 'shy',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo CRT',
      image: 'https://placehold.co/368x220',
      slug: 'soemthing liek that',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo CDR',
      image: 'https://placehold.co/368x220',
      slug: 'big ben',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Toyota Camry',
      image: 'https://placehold.co/368x220',
      slug: 'i try to',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'waitings',
    },
    {
      title: 'Promo Raize',
      image: 'https://placehold.co/368x220',
      slug: 'ultima',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo Corolla Cross',
      image: 'https://placehold.co/368x220',
      slug: 'coffee',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
  ];
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [openModal, setOpenModal] = useState(null);
  const [modalHeader, setModalHeader] = useState('');
  const [modalText, setModalText] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [caseItems, setCaseItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(itemProduct.length);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / itemsPerPage));
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

  const addListPromo = () => {
    router.push('/#');
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
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

  const handleToggleChange = (isChecked) => {
    setOpenModal('dismissible');
    setModalText(!isChecked.newValue ? 'unpublished' : 'published');
    setModalHeader(displayedItems[isChecked.index].title);
    setCaseItems(isChecked);
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

      <div className="relative overflow-x-auto mt-10">
        <div className="p-5 border-x border-t border-black w-full">
          <div className="flex justify-between items-center">
            <p className="text-black text-lg text-gray-800 font-bold">List Article</p>
            <div className="flex justify-between items-center space-x-6">
              <MdSearch size="20" onClick={() => {}} className="cursor-pointer" />

              <MdFilterList size="20" onClick={() => {}} className="cursor-pointer" />

              <Link href="/article/add-article">
                <Button color="light">
                  <p className="flex items-center gap-2">
                    <MdAdd /> Add
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <Table
            className={`${isLoading ? 'opacity-20' : ''}`}
            theme={{
              root: {
                base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400 border-y border-x border-b border-black',
                wrapper: 'relative',
              },
            }}
          >
            <Table.Head>
              {title.map((title, index) => (
                <Table.HeadCell key={index}>{title}</Table.HeadCell>
              ))}
            </Table.Head>
            <Table.Body className="divide-y">
              {displayedItems.map((itemProduct, index) => (
                <Table.Row key={index} className={isLoading ? 'animate-pulse' : ''}>
                  <Table.Cell>
                    <div className="inline-flex items-center justify-between">
                      <img src={itemProduct.image} alt="product images" className="w-14 h-14" />
                      <p className="pl-3">{itemProduct.title}</p>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{itemProduct.slug}</Table.Cell>
                  <Table.Cell>{itemProduct.datePublished.toDateString()}</Table.Cell>
                  <Table.Cell>{itemProduct.category}</Table.Cell>
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
                          itemProduct.boolean === 'active'
                            ? 'bg-gray-200'
                            : itemProduct.boolean === 'inactive'
                            ? 'bg-gray-300'
                            : itemProduct.boolean === 'waitings'
                            ? 'bg-gray-500'
                            : 'bg-gray-200'
                        } rounded-full text-black capitalized text-md flex justify-center items-center font-Montserrat`}
                      >
                        {itemProduct.boolean === 'active'
                          ? 'Published'
                          : itemProduct.boolean === 'inactive'
                          ? 'Unpublished'
                          : 'Waiting'}
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
        </div>
        <div className="p-5 border-x border-b border-black w-full flex items-center justify-end">
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons
            totalPages={totalPages}
            className="flex justify-center items-center"
          />
        </div>
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

export default DashboardNewsAndTips;
