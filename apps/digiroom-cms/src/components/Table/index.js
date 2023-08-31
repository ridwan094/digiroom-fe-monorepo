import React, { useState } from 'react';
import { Table, Pagination, Spinner, Toast } from 'flowbite-react';
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
  showToast = true,
  toastIcons,
  toastDescription,
  setShowToast = () => {},
}) => {
  const {
    currentPage,
    totalPages,
    itemsPerPage,
    page,
    displayedItems = dataSource,
    onPageChange = () => {},
    onDropdownPageChange = () => {},
    totalItems,
    searchBoolean,
    setSearch,
    onClickCheck,
  } = pagination;

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
                className={`${
                  item.sortable && totalItems
                    ? 'cursor-pointer hover:bg-gray-200'
                    : 'pointer-events-none'
                } ${sortKey === item.dataIndex ? 'bg-gray-200 font-semibold' : 'font-normal'}`}
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
          {totalPages > 0 && (
            <div className="flex justify-center mt-2">
              <Pagination
                currentPage={1}
                onPageChange={(value) => onPageChange(value)}
                showIcons
                totalPages={totalPages}
                className="flex justify-center items-center"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomTable;
