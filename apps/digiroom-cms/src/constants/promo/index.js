import { Tooltip, TextInput, Button } from 'flowbite-react';
import {
  MdOutlineCreate,
  MdOutlineDelete,
  MdOutlineFileCopy,
  MdSearch,
  MdFilterList,
  MdAdd,
} from 'react-icons/md';
import ToggleSwitch from 'ui/components/atoms/Toogle';

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

export const titleTable = 'List Promo';

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

export const columns = (onToggleChange = () => {}, onClick = () => {}) => {
  return [
    {
      title: 'Promo Name',
      dataIndex: 'title',
      key: 'promoName',
      sortable: 'asc',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      sortable: 'asc',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sortable: 'asc',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      sortable: 'asc',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, item, index) => (
        <div className="flex flex-rows hover:cursor-pointer gap-2">
          <Tooltip content="Edit">
            <MdOutlineCreate className="text-2xl" onClick={() => onClick('edit', item, index)} />
          </Tooltip>
          <Tooltip content="Delete">
            <MdOutlineDelete className="text-2xl" onClick={() => onClick('delete', item, index)} />
          </Tooltip>
          <Tooltip content="Copy">
            <MdOutlineFileCopy className="text-2xl" onClick={() => onClick('copy', item, index)} />
          </Tooltip>
        </div>
      ),
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
  ];
};
