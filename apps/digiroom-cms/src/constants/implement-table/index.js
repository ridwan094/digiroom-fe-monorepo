import { Tooltip, TextInput, Button } from 'flowbite-react';
import {
  MdOutlineCreate,
  MdOutlineDelete,
  MdOutlineFileCopy,
  MdSearch,
  MdFilterList,
  MdAdd,
  MdRemoveRedEye,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import ToggleSwitch from 'ui/components/atoms/Toogle';
import Image from 'next/image';

//Promo
export const headerArray = (
  searchBoolean,
  searchTable,
  setSearchTable = () => {},
  onClickCheck = () => {},
  searchTableData
) => {
  return [
    {
      title: 'List Promo',
      render: (index, item) => (
        <div className="flex flex-row justify-between items-center">
          <p className="relative text-lg capitalize font-bold justify-start">{titleTable}</p>
          <div className="flex flex-row items-center gap-2">
            {searchBoolean && (
              <TextInput
                value={searchTable}
                sizing="xl"
                id="disabledInput1"
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  setSearchTable(e.currentTarget.value);
                }}
                onKeyDown={searchTableData}
              />
            )}
            <Button color="light" className="border-none" onClick={() => onClickCheck('search')}>
              <p className="flex items-center text-xl">
                <MdSearch />
              </p>
            </Button>
            <Button color="light" className="border-none" onClick={() => onClickCheck('filter')}>
              <p className="flex items-center text-xl">
                <MdFilterList />
              </p>
            </Button>
            <Button color="light" onClick={() => onClickCheck('add')}>
              <p className="flex items-center gap-2 text-lg">
                <MdAdd /> Add
              </p>
            </Button>
          </div>
        </div>
      ),
    },
  ];
};

export const titleTable = '';

export const filterData = [
  {
    title: 'Category',
    items: [
      { column: 'category', key: 'mobilbaru', label: 'Mobil Baru' },
      { column: 'category', key: 'service', label: 'Service' },
      { column: 'category', key: 'lainnya', label: 'Lainnya' },
    ],
  },
  {
    title: 'Status',
    items: [
      { column: 'status', key: 'waiting', label: 'Waiting' },
      { column: 'status', key: 'unpublish', label: 'Unpublished' },
      { column: 'status', key: 'published', label: 'Published' },
      { column: 'status', key: 'draft', label: 'Draft' },
      { column: 'status', key: 'expired', label: 'Expired' },
    ],
  },
];

export const columns = (
  itemsPerPage,
  currentPage,
  onToggleChange = () => {},
  onClick = () => {},
  sortKey,
  sortDirection,
  onSort
) => {
  return [
    {
      title: 'No',
      dataIndex: '',
      key: 'id',
      render: (empty, items, index) => {
        const rowNumber = (currentPage - 1) * itemsPerPage + index + 1;
        return <span>{rowNumber}</span>;
      },
    },
    {
      title: 'Promo Page',
      dataIndex: 'titlePage',
      key: 'titlePage',
      sortable: 'ASC',
      isSortable: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sortable: 'asc',
      isSortable: true,
      render: (category) => category.name,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sortable: 'asc',
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      sortable: 'asc',
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, item, i) => (
        <div className="flex items-center gap-2">
          <div
            className={`p-2 w-full h-full border border-gray-200 ${
              item.boolean === 'active'
                ? 'bg-gray-200'
                : item.boolean === 'inactive'
                ? 'bg-gray-300'
                : item.boolean === 'waitings'
                ? 'bg-gray-500'
                : 'bg-gray-200'
            } rounded-full text-black capitalized text-md flex justify-center items-center font-Montserrat`}
          >
            {item.boolean === 'active'
              ? 'Published'
              : item.boolean === 'inactive'
              ? 'Unpublished'
              : 'Waiting'}
          </div>
        </div>
      ),
    },
    {
      title: 'Publish',
      dataIndex: 'publish',
      key: 'publish',
      render: (status, item, i) => (
        <div className="flex items-center gap-2">
          <ToggleSwitch
            index={i}
            disabled={item.boolean === 'waitings'}
            value={item.boolean === 'active'}
            onToggleChange={onToggleChange}
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
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, item, index) => (
        <div className="flex flex-rows hover:cursor-pointer gap-2">
          <Tooltip content="View">
            <MdRemoveRedEye className="text-2xl" onClick={() => onClick('view', index, item)} />
          </Tooltip>
          <Tooltip content="Edit">
            <MdOutlineCreate className="text-2xl" onClick={() => onClick('edit', index, item)} />
          </Tooltip>
          <Tooltip content="Delete">
            <MdOutlineDelete className="text-2xl" onClick={() => onClick('delete', index, item)} />
          </Tooltip>
          <Tooltip content="Copy">
            <MdOutlineFileCopy className="text-2xl" onClick={() => onClick('copy', index, item)} />
          </Tooltip>
        </div>
      ),
    },
  ];
};

export const sampleData = [
  {
    img: 'localhost:3004/images/Auto2000.webp',
    title: 'Promo 1',
    startDate: '2023-08-25',
    endDate: '2023-08-28',
    publishDate: '2023-08-23',
    category: 'Body & Paint',
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...',
  },
];

//News & Tips
export const headerArrayNewsTips = (
  searchBoolean,
  searchTable,
  setSearchTable = () => {},
  onClickCheck = () => {},
  searchTableData
) => {
  return [
    {
      title: 'News & Tips',
      render: (index, item) => (
        <div className="flex flex-row justify-between items-center">
          <p className="relative text-lg capitalize font-bold justify-start">{titleTable}</p>
          <div className="flex flex-row items-center gap-2">
            {searchBoolean && (
              <TextInput
                value={searchTable}
                sizing="xl"
                id="disabledInput1"
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  setSearchTable(e.currentTarget.value);
                }}
                onKeyDown={searchTableData}
              />
            )}
            <Button color="light" className="border-none" onClick={() => onClickCheck('search')}>
              <p className="flex items-center text-xl">
                <MdSearch />
              </p>
            </Button>
            <Button color="light" className="border-none" onClick={() => onClickCheck('filter')}>
              <p className="flex items-center text-xl">
                <MdFilterList />
              </p>
            </Button>
            <Button color="light" onClick={() => onClickCheck('add')}>
              <p className="flex items-center gap-2 text-lg">
                <MdAdd /> Add
              </p>
            </Button>
          </div>
        </div>
      ),
    },
  ];
};

export const columnsNewsTips = (
  itemsPerPage,
  currentPage,
  onToggleChange = () => {},
  onClick = () => {},
  sortKey,
  sortDirection,
  onSort
) => {
  return [
    {
      title: 'No',
      dataIndex: '',
      key: 'id',
      render: (empty, items, index) => {
        const rowNumber = (currentPage - 1) * itemsPerPage + index + 1;
        return <span>{rowNumber}</span>;
      },
    },
    {
      title: 'News & Tips Name',
      dataIndex: 'titlePage',
      key: 'titlePage',
      sortable: 'ASC',
      isSortable: true,
      render: (titlePage, item) => (
        <div className="flex flex-row items-center gap-5">
          <div>
            <a href={item.slug}>
              <Image src={item.heroImageLink} alt={titlePage} width={75} height={75} />
            </a>
          </div>
          <div>
            <p>{titlePage}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sortable: 'ASC',
      isSortable: true,
      render: (category) => category.name,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sortable: 'ASC',
      isSortable: true,
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      sortable: 'ASC',
      isSortable: true,
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'Status',
      dataIndex: 'cmsStatusType',
      key: 'status', //change this status, use cmsStatusType from api dont forget to change it
      render: (cmsStatusType) => (
        <div className="flex items-center gap-2">
          <div
            className={`p-2 w-full h-full border border-gray-200 bg-gray-200 ${
              cmsStatusType === 'PUBLISH'
                ? 'bg-gray-200'
                : cmsStatusType === 'DRAFT'
                ? 'bg-gray-300'
                : 'bg-gray-500'
            } rounded-full text-black capitalize text-md  flex justify-center items-center font-Montserrat`}
          >
            {cmsStatusType ? cmsStatusType : 'WAITING'}
          </div>
        </div>
      ),
    },
    {
      title: 'Publish',
      dataIndex: 'cmsStatusType',
      key: 'publishStatus',
      render: (cmsStatusType, item, i) => (
        <div className="flex items-center gap-2">
          <ToggleSwitch
            index={item}
            disabled={cmsStatusType === null}
            value={cmsStatusType === 'PUBLISH'}
            onToggleChange={onToggleChange}
            classNameLabel={`w-11 h-6 bg-gray-200 rounded-full peer  
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-[2px] after:left-[2px] 
              after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
              after:transition-all ${
                cmsStatusType === 'PUBLISH'
                  ? 'peer-checked:bg-gray-800 peer-checked:after:translate-x-full'
                  : 'peer-checked:after:translate-x-0'
              } `}
          />
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, item, index) => (
        <div className="flex flex-rows hover:cursor-pointer gap-2">
          <Tooltip content="View">
            <MdRemoveRedEye className="text-2xl" onClick={() => onClick('view', index, item)} />
          </Tooltip>
          <Tooltip content="Edit">
            <MdOutlineCreate className="text-2xl" onClick={() => onClick('edit', index, item)} />
          </Tooltip>
          <Tooltip content="Delete">
            <MdOutlineDelete className="text-2xl" onClick={() => onClick('delete', index, item)} />
          </Tooltip>
          <Tooltip content="Copy">
            <MdOutlineFileCopy className="text-2xl" onClick={() => onClick('copy', index, item)} />
          </Tooltip>
        </div>
      ),
    },
  ].map((column) => ({
    ...column,
    onClickSort: column.isSortable ? () => onSort(column.key) : undefined,
    sortIndicator: column.isSortable ? (
      <span>
        {sortKey.includes(column.key) ? (
          <span className="">
            {sortDirection[sortKey.indexOf(column.key)] === 'ASC' ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </span>
        ) : (
          <span>
            <MdKeyboardArrowUp />
            <MdKeyboardArrowDown />
          </span>
        )}
      </span>
    ) : undefined,
  }));
};

export const sampleDataNewsTips = [
  {
    img: '',
    title: 'Promo 1',
    startDate: '2023-08-25',
    endDate: '2023-08-28',
    publishDate: '2023-08-23',
    category: 'Body & Paint',
    detail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...',
  },
];

export const filterDataNewsTips = [
  {
    title: 'Category',
    items: [
      { column: 'category', key: 'berita', label: 'Mobil Baru' },
      { column: 'category', key: 'ulasanproduk', label: 'Ulasan Produk' },
      { column: 'category', key: 'tipstrik', label: 'TIps & Trik' },
      { column: 'category', key: 'event', label: 'Event' },
    ],
  },
  {
    title: 'Status',
    items: [
      { column: 'status', key: 'waiting', label: 'Waiting' },
      { column: 'status', key: 'unpublish', label: 'Unpublished' },
      { column: 'status', key: 'published', label: 'Published' },
      { column: 'status', key: 'draft', label: 'Draft' },
      { column: 'status', key: 'expired', label: 'Expired' },
    ],
  },
  {
    title: 'Date Range',
    items: [
      {
        column: 'daterange',
        key: 'dateRange',
        label: 'Date Range',
      },
    ],
  },
];

//Product-Knowledge
export const headerArrayProductKnowledge = (
  searchBoolean,
  searchTable,
  setSearchTable = () => {},
  onClickCheck = () => {},
  searchTableData
) => {
  return [
    {
      title: 'Product Knowledge',
      render: (index, item) => (
        <div className="flex flex-row justify-between items-center">
          <p className="relative text-lg capitalize font-bold justify-start">{titleTable}</p>
          <div className="flex flex-row items-center gap-2">
            {searchBoolean && (
              <TextInput
                value={searchTable}
                sizing="xl"
                id="disabledInput1"
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  setSearchTable(e.currentTarget.value);
                }}
                onKeyDown={searchTableData}
              />
            )}
            <Button color="light" className="border-none" onClick={() => onClickCheck('search')}>
              <p className="flex items-center text-xl">
                <MdSearch />
              </p>
            </Button>
            <Button color="light" className="border-none" onClick={() => onClickCheck('filter')}>
              <p className="flex items-center text-xl">
                <MdFilterList />
              </p>
            </Button>
            <Button color="light" onClick={() => onClickCheck('add')}>
              <p className="flex items-center gap-2 text-lg">
                <MdAdd /> Add
              </p>
            </Button>
          </div>
        </div>
      ),
    },
  ];
};

export const columnsProductKnowledge = (
  itemsPerPage,
  currentPage,
  onToggleChange = () => {},
  onClick = () => {},
  sortKey,
  sortDirection,
  onSort
) => {
  return [
    {
      title: 'No',
      dataIndex: '',
      key: 'id',
      render: (empty, items, index) => {
        const rowNumber = (currentPage - 1) * itemsPerPage + index + 1;
        return <span>{rowNumber}</span>;
      },
    },
    {
      title: 'Product Knowledge Name',
      dataIndex: 'titlePage',
      key: 'titlePage',
      sortable: 'ASC',
      isSortable: true,
      render: (titlePage, item) => (
        <div className="flex flex-row items-center gap-5">
          <div>
            <a href={item.slug}>
              <Image src={item.heroImageLink} alt={titlePage} width={75} height={75} />
            </a>
          </div>
          <div>
            <p>{titlePage}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sortable: 'ASC',
      isSortable: true,
      render: (category) => category.name,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sortable: 'ASC',
      isSortable: true,
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      sortable: 'ASC',
      isSortable: true,
      render: (startDate) => {
        const formattedDate = new Date(startDate).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, item, i) => (
        <div className="flex items-center gap-2">
          <div
            className={`p-2 w-full h-full border border-gray-200 ${
              item.boolean === 'active'
                ? 'bg-gray-200'
                : item.boolean === 'inactive'
                ? 'bg-gray-300'
                : item.boolean === 'waitings'
                ? 'bg-gray-500'
                : 'bg-gray-200'
            } rounded-full text-black capitalized text-md flex justify-center items-center font-Montserrat`}
          >
            {item.boolean === 'active'
              ? 'Published'
              : item.boolean === 'inactive'
              ? 'Unpublished'
              : 'Waiting'}
          </div>
        </div>
      ),
    },
    {
      title: 'Publish',
      dataIndex: 'publish',
      key: 'publish',
      render: (status, item, i) => (
        <div className="flex items-center gap-2">
          <ToggleSwitch
            index={i}
            disabled={item.boolean === 'waitings'}
            value={item.boolean === 'active'}
            onToggleChange={onToggleChange}
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
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, item, index) => (
        <div className="flex flex-rows hover:cursor-pointer gap-2">
          <Tooltip content="View">
            <MdRemoveRedEye className="text-2xl" onClick={() => onClick('view', index, item)} />
          </Tooltip>
          <Tooltip content="Edit">
            <MdOutlineCreate className="text-2xl" onClick={() => onClick('edit', index, item)} />
          </Tooltip>
          <Tooltip content="Delete">
            <MdOutlineDelete className="text-2xl" onClick={() => onClick('delete', index, item)} />
          </Tooltip>
        </div>
      ),
    },
  ].map((column) => ({
    ...column,
    onClickSort: column.isSortable ? () => onSort(column.key) : undefined,
    sortIndicator: column.isSortable ? (
      <span>
        {sortKey.includes(column.key) ? (
          <span className="">
            {sortDirection[sortKey.indexOf(column.key)] === 'ASC' ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </span>
        ) : (
          <span>
            <MdKeyboardArrowUp />
            <MdKeyboardArrowDown />
          </span>
        )}
      </span>
    ) : undefined,
  }));
};

export const filterProductKnowledge = [
  {
    title: 'Category',
    items: [
      { column: 'category', key: 'berita', label: 'Mobil Baru' },
      { column: 'category', key: 'service', label: 'Service' },
      { column: 'category', key: 'lainnya', label: 'Lainnya' },
    ],
  },
  {
    title: 'Status',
    items: [
      { column: 'status', key: 'waiting', label: 'Waiting' },
      { column: 'status', key: 'unpublish', label: 'Unpublished' },
      { column: 'status', key: 'published', label: 'Published' },
      { column: 'status', key: 'draft', label: 'Draft' },
    ],
  },
  {
    title: 'Date Range',
    items: [
      {
        column: 'daterange',
        key: 'dateRange',
        label: 'Date Range',
      },
    ],
  },
];
