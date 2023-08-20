import React from 'react';
import { Table, Pagination, Spinner } from 'flowbite-react';
import Dropdown from 'ui/components/atoms/Dropdown';

const CustomTable = ({
  dataSource,
  columns,
  pagination,
  isLoading,
}) => {
  const {
    currentPage = 1,
    totalPages = 1,
    itemsPerPage = 0,
    page = 0,
    displayedItems = dataSource,
    onPageChange = () => {},
    onDropdownPageChange = () => {},
  } = pagination;

  return (
    <div className="relative overflow-x-auto">
      <div className="relative">

        <Table>
          <Table.Head>
            {columns.map((item, index) => (
              <Table.HeadCell key={index}>{item.title}</Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {displayedItems.map((item, rowIndex) => (
              <Table.Row key={rowIndex} className={isLoading ? 'animate-pulse' : ''}>
                {columns.map((column) => (
                  <Table.Cell key={column.key}>
                    {column.render
                      ? column.render(
                          item[column.dataIndex],
                          item,
                          rowIndex,
                        )
                      : item[column.dataIndex]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
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
        <div className="mt-2 text-gray-600 flex flex-row justify-end gap-2">
          <div className="flex items-center border border-grey-200 rounded-lg px-2 mt-1.5">
            Showing {itemsPerPage * (currentPage - 1) + 1} to{' '}
            <Dropdown
              text={Math.min(itemsPerPage * currentPage, dataSource.length)}
              onSelect={onDropdownPageChange}
              selectedOption={itemsPerPage}
              options={page}
              size="w-11"
            />{' '}
            of {dataSource.length} items
          </div>

          <Pagination
            currentPage={currentPage}
            onPageChange={onPageChange}
            showIcons
            totalPages={totalPages}
            className="flex justify-center items-center"
          />
        </div>
      )}
    </div>
  );
};

export default CustomTable;
