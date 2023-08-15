import { Button } from 'flowbite-react';
import {
  MdSearch,
  MdFilterList,
  MdEdit,
  MdOutlineContentCopy,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import { HiOutlinePlus } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import Images from '../../../../../packages/shared/ui/assets/images/banner.webp';

const MOCK_DATA = [
  {
    id: 1,
    articleName: 'Promo yaris Cross Special Rate',
    slug: 'auto2000.co.id/promosi/pilih-mobil-..',
    date: '01 Juli 2023',
    category: 'Body & Paint',
    status: 'Published',
  },
  {
    id: 2,
    articleName: 'Promo yaris Cross Special Rate',
    slug: 'auto2000.co.id/promosi/pilih-mobil-..',
    date: '01 Juli 2023',
    category: 'Body & Paint',
    status: 'Waiting',
  },
  {
    id: 3,
    articleName: 'Promo yaris Cross Special Rate',
    slug: 'auto2000.co.id/promosi/pilih-mobil-..',
    date: '01 Juli 2023',
    category: 'Body & Paint',
    status: 'Unpublished',
  },
  {
    id: 4,
    articleName: 'Promo yaris Cross Special Rate',
    slug: 'auto2000.co.id/promosi/pilih-mobil-..',
    date: '01 Juli 2023',
    category: 'Body & Paint',
    status: 'Unpublished',
  },
  {
    id: 5,
    articleName: 'Promo yaris Cross Special Rate',
    slug: 'auto2000.co.id/promosi/pilih-mobil-..',
    date: '01 Juli 2023',
    category: 'Body & Paint',
    status: 'Unpublished',
  },
];

const DashboardNewsAndTips = () => {
  return (
    <div className="relative px-4 container">
      <div className="flex justify-between items-center">
        <h2 className="text-black text-3xl font-bold">Article</h2>
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
            <h3 className="text-black text-2xl font-bold">List Article</h3>
            <div className="flex justify-between items-center space-x-6">
              <MdSearch size="30" onClick={() => {}} className="cursor-pointer" />

              <MdFilterList size="30" onClick={() => {}} className="cursor-pointer" />

              <Button className="text-black text-center inline-flex items-center px-1 border-black text-base font-bold">
                <HiOutlinePlus size="18" className="mr-2" />
                ADD
              </Button>
            </div>
          </div>
        </div>
        <table class="w-full text-sm text-left text-black-500 border border-black">
          <thead class="text-xs text-gray-700 uppercase border-b border-black bg-gray-100">
            <tr>
              <th scope="col" class="px-4 py-4">
                Article Name
              </th>
              <th scope="col" class="px-4 py-4">
                Slug
              </th>
              <th scope="col" class="px-4 py-4 text-center">
                Date Published
              </th>
              <th scope="col" class="px-4 py-4 text-center">
                Category
              </th>
              <th scope="col" class="px-4 py-4 text-center">
                Action
              </th>
              <th scope="col" class="px-4 py-4 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DATA.map((items) => (
              <tr class="bg-white border-b" key={items.id}>
                <th class="px-4 py-4">
                  <div className="inline-flex items-center justify-between">
                    <img
                      src="../../../../../packages/shared/ui/assets/images/banner.webp"
                      alt="product"
                    />
                    <p className="pl-3">{items.articleName}</p>
                  </div>
                </th>
                <td class="px-4 py-4">{items.slug}</td>
                <td class="px-4 py-4 text-center">{items.date}</td>
                <td class="px-4 py-4 text-center">{items.category}</td>
                <td class="px-4 py-4">
                  <div className="inline-flex items-center justify-between space-x-2 w-full">
                    <MdEdit size="20" onClick={() => {}} className="cursor-pointer" />

                    <IoMdTrash size="20" onClick={() => {}} className="cursor-pointer" />

                    <MdOutlineContentCopy size="20" onClick={() => {}} className="cursor-pointer" />
                  </div>
                </td>
                <td class="px-4 py-4">
                  <div className="inline-flex items-center justify-start w-full space-x-4">
                    {items.status !== 'Waiting' ? (
                      <span className="w-2/3 text-center text-sm text-gray-600 bg-gray-200 px-1 py-2 rounded-full">
                        {items.status}
                      </span>
                    ) : (
                      <span className="w-2/3 text-center text-sm text-gray-400 bg-gray-500 px-1 py-2 rounded-full">
                        {items.status}
                      </span>
                    )}

                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" />
                      <div class="w-11 h-4 bg-gray-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-400 dark:peer-focus:bg-gray-400 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[-2px] after:left-[2px] after:bg-gray-300 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-100 peer-checked:bg-gray-300"></div>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="p-5 border-x border-b border-black w-full flex justify-end">
          <ul class="flex items-center space-x-2 h-8 text-sm">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-2 h-8 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <MdChevronLeft size="18" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                ....
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                9
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                10
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-2 h-8 text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <MdChevronRight size="18" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNewsAndTips;
