import React, { useState } from 'react';
import { Table, Pagination, Spinner } from 'flowbite-react';
import Dropdown from 'ui/components/atoms/Dropdown';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const CustomTable = ({
  dataSource,
  columns,
  pagination,
  isLoading,
  onSort,
  sortKey,
  sortDirection,
  headerData,
}) => {
  const {
    currentPage = 0,
    totalPages = 0,
    itemsPerPage = 0,
    page = 0,
    displayedItems = dataSource,
    onPageChange = () => {},
    onDropdownPageChange = () => {},
    totalItems = 0,
    searchBoolean,
    setSearch,
    onClickCheck,
  } = pagination;

  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState('');
  const [searchTable, setSearchTable] = useState();

  const searchTableData = async (event) => {
    if (searchTable !== null && event.key === 'Enter') {
      event.preventDefault();
      setSearch(searchTable, event);
    }
  };

  const itemsToRender = Array.isArray(displayedItems) ? displayedItems : [];

  return (
    <div className="w-full px-4 py-4">
      {headerData.map((headerComponent, index) => (
        <div
          key={index}
          className={`p-2 items-center justify-between ${isLoading ? 'opacity-50' : ''}`}
        >
          {headerComponent.render()}
        </div>
      ))}
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <Table.Head>
            {columns.map((item, index) => (
              <Table.HeadCell
                key={index}
                onClick={() => item.sortable && onSort(item.dataIndex)}
                className={`${item.sortable ? 'cursor-pointer hover:bg-gray-200' : ''} ${
                  sortKey === item.dataIndex ? 'bg-gray-200 font-semibold' : 'font-normal'
                }`}
              >
                <div className="flex items-center">
                  {item.title}
                  <div className="px-1 flex flex-col text-sm">
                    {item.sortable && (
                      <>
                        {sortKey === item.dataIndex && (
                          <span className="flex flex-col">
                            {sortDirection === 'asc' ? (
                              <MdKeyboardArrowUp />
                            ) : (
                              <MdKeyboardArrowDown />
                            )}
                          </span>
                        )}
                        {sortKey !== item.dataIndex && (
                          <>
                            <MdKeyboardArrowUp />
                            <MdKeyboardArrowDown />
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Table.HeadCell>
            ))}
          </Table.Head>
          {itemsToRender.length === 0 ? (
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={columns.length} className="text-left font-medium text-xl py-4">
                  No data available.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ) : (
            <Table.Body className="divide-y">
              {itemsToRender.map((item, rowIndex) => (
                <Table.Row key={rowIndex} className={isLoading ? 'animate-pulse' : ''}>
                  {columns.map((column) => (
                    <Table.Cell key={column.key}>
                      {column.render
                        ? column.render(item[column.dataIndex], item, rowIndex)
                        : item[column.dataIndex]}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          )}
        </Table>
        {/* Loading state */}
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 z-50">
            <Spinner aria-label="Loading" size="lg" />
          </div>
        )}
      </div>
      {/* Add pagination controls */}
      {pagination && (
        <div className="mt-2 text-gray-600 flex flex-col sm:flex-row justify-between items-center">
          <div
            className={`flex items-center border border-grey-200 rounded-lg px-2 mt-1.5 mb-2 sm:mb-0`}
          >
            Showing {Math.min(totalItems, 1)} to{' '}
            <Dropdown
              text={Math.min(itemsPerPage, totalItems)}
              onSelect={(value) => onDropdownPageChange(value)}
              selectedOption={itemsPerPage}
              options={page}
              size="w-11"
            />{' '}
            of {totalItems} items
          </div>
          <div className="flex justify-center mt-2">
            {totalItems !== 0 && (
              <Pagination
                currentPage={currentPage}
                onPageChange={(value) => onPageChange(value)}
                showIcons
                totalPages={totalPages}
                className="flex justify-center items-center"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
