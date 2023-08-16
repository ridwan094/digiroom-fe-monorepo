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

const DashboardNewsAndTips = () => {
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
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'wow',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo HRV',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'shy',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo CRT',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'soemthing liek that',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
    {
      title: 'Promo CDR',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'big ben',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Toyota Camry',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'i try to',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'waitings',
    },
    {
      title: 'Promo Raize',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'ultima',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'inactive',
    },
    {
      title: 'Promo Corolla Cross',
      image: '../../../../../packages/shared/ui/assets/images/news/2.webp',
      slug: 'coffee',
      datePublished: new Date(),
      category: 'Body & Paint',
      status: 'Published',
      boolean: 'active',
    },
  ];
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
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

      {/* Title */}
      <div className={`flex items-center justify-between ${isLoading ? 'opacity-50' : ''}`}>
        <h3 className="px-2 py-4 relative text-2xl text-gray-800 uppercase font-bold">Article</h3>
        <nav class="flex items-center" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-600 md:ml-2 dark:text-black dark:hover:text-gray-600"
                >
                  List Promo
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div class="relative overflow-x-auto mt-10">
        <div class="p-5 border-x border-t border-black w-full">
          <div className="flex justify-between items-center">
            <p className="text-black text-lg text-gray-800 font-bold">List Article</p>
            <div className="flex justify-between items-center space-x-6">
              <MdSearch size="20" onClick={() => {}} className="cursor-pointer" />

              <MdFilterList size="20" onClick={() => {}} className="cursor-pointer" />

              <Button className="flex items-center gap-2 border border-black">
                <p className="flex items-center text-black gap-2">
                  <MdAdd /> Add
                </p>
              </Button>
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
            <Table.Body class="divide-y">
              {displayedItems.map((itemProduct, index) => (
                <Table.Row key={index} className={isLoading ? 'animate-pulse' : ''}>
                  <Table.Cell>
                    <div className="inline-flex items-center justify-between">
                      <img src={itemProduct.image} alt="product images" />
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
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div class="p-5 border-x border-b border-black w-full flex items-center justify-end">
          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons
            totalPages={totalPages}
            className="flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNewsAndTips;
