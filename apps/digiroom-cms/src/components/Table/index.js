import { Table, Pagination } from 'flowbite-react';
import Dropdown from 'ui/components/atoms/Dropdown';

export default function CustomTable(props) {
    const { 
        dataSource,
        columns,
        pagination
    } = props;

    const { 
        currentPage = 1, 
        totalPages = 1,
        onPageChange = () => {},
        itemsPerPage = 1,
        dropdownPageChange = () => {},
        page = [5],
    } = pagination;

    return (
        <>
            <div className="relative">
                <Table
                    // className={`${isLoading ? 'opacity-20' : ''}`}
                    theme={{
                    root: {
                        base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400 border-y border-x border-b border-black',
                        wrapper: 'relative',
                    },
                    }}
                >
                    <Table.Head>
                    {columns.map((item, index) => (
                        <Table.HeadCell key={index}>{item.title}</Table.HeadCell>
                    ))}
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {dataSource.map((item, rowIndex) => (
                            <Table.Row 
                                key={rowIndex} 
                                // className={isLoading ? 'animate-pulse' : ''}
                            >
                            {columns.map((column) => (
                                <Table.Cell key={column.key}>
                                    {
                                        column.render ? 
                                        column.render(item[column.dataIndex], item, rowIndex)
                                        : item[column.dataIndex]
                                    }
                                </Table.Cell>
                            ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>

            {/* Add pagination controls */}
            {pagination && (
                <div className="mt-2 text-gray-600 flex flex-row justify-end gap-2">
                    <div className="flex items-center border border-grey-200 rounded-lg px-2 mt-1.5">
                        Showing {itemsPerPage * (currentPage - 1) + 1} to{' '}
                        <Dropdown
                            text={Math.min(itemsPerPage * currentPage, dataSource.length)}
                            onSelect={dropdownPageChange}
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
            
        </>
        
    )
}