import { MdOutlineFileCopy } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columns, filterData, headerArray } from '@/constants/implement-table';
import ModalText from '../modal-text';
import ModalFilter from '../modal-filter';
import { getListDashboardPromo } from '../../service/promo-dashboard-homepage/promo-dashboard';

const DashboardPromo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastDescription, setToastDescription] = useState('');
  const [toastIcons, setToastIcons] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [openModalFilter, setOpenModalFilter] = useState(null);
  const [modalText, setModalText] = useState('');
  const [modalHeader, setModalHeader] = useState('');
  const [caseItems, setCaseItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState([10, 20, 30]);
  const [displayedItems, setDisplayedItems] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(page[0]);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [filteredItem, setFilteredItem] = useState(null);
  const [listDashboard, setListDashboard] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [tableDelete, setTableDelete] = useState();
  const [activeFilters, setActiveFilters] = useState([]);

  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + itemsPerPage;

  const onPageChange = async (page) => {
    setCurrentPage(page);
    fetchListDarhboard();
  };

  const onClickCheck = (value) => {
    switch (value) {
      case 'add':
        router.push('/promo/add-promo');
        break;
      case 'filter':
        setOpenModalFilter('dismissible');
        break;
      case 'search':
        setSearchBoolean(!searchBoolean);
        break;
    }
  };

  const searchTable = async (value) => {
    if (search.length === 0 && value.key === 'Enter') {
      setFilteredItem(null);
      setDisplayedItems(0, 10);
      setCurrentPage(1);
    } else if (search !== null && value.key === 'Enter') {
      event.preventDefault();
      const filtered = listDashboard.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItem(filtered);
      setCurrentPage(1);
      fetchListDarhboard();
    }
  };

  const onClick = async (items, index) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        router.push('/#');
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${listDashboard[index + startIndex].title}`);
        setTableDelete(listDashboard[index + startIndex]);
        break;
      case 'copy':
        const textToCopy = listDashboard[index + startIndex].slug;
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

  const onDeleteData = async (value) => {
    const indexToDelete = displayedItems.findIndex((item) => item === value);
    const updatedListDashboard = displayedItems.filter((item, index) => index !== indexToDelete);
    setDisplayedItems(updatedListDashboard);
  };

  const fetchListDarhboard = async () => {
    const tokenUser = localStorage.getItem('user');
    const token = JSON.parse(tokenUser);
    setIsLoading(true);

    try {
      const data = await getListDashboardPromo(token.access_token);

      if (data !== null) {
        let sortedData = data;

        if (sortKey) {
          sortedData = sortData(data, sortKey, sortDirection);
        }

        const displayed = filteredItem
          ? filteredItem.slice(startIndex, endIndex)
          : sortedData.slice(startIndex, endIndex);

        setListDashboard(sortedData);
        setDisplayedItems(displayed);
        setTotalItems(sortedData.length);
        setTotalPages(Math.ceil(sortedData.length / itemsPerPage));
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };
  const dropdownPageChange = (selectedValue) => {
    setItemsPerPage(selectedValue);
    onPageChange(1);
    fetchListDarhboard();
  };

  const onClickModal = async () => {
    const updatedListDashboard = [...listDashboard];
    switch (caseItems.newValue) {
      case false:
        updatedListDashboard[caseItems.index + startIndex].boolean =
          caseItems.newValue === false ? 'inactive' : 'active';
        setOpenModal(undefined);
        break;
      case true:
        updatedListDashboard[caseItems.index + startIndex].boolean = caseItems.newValue
          ? 'active'
          : 'inactive';
        setOpenModal(undefined);
        break;
      default:
        await onDeleteData(tableDelete);
        setOpenModal(undefined);
        break;
    }
    // setDisplayedItems(updatedListDashboard);
  };

  const handleToggleChange = (value) => {
    const { test, indexTest } = value;
    setOpenModal('dismissible');
    setModalText(!test ? 'unpublished' : 'published');
    setModalHeader(listDashboard[indexTest + itemsPerPage * (currentPage - 1)].title);
    setCaseItems({
      newValue: test,
      index: indexTest,
    });
  };

  const handleFilter = (filterData) => {
    event.preventDefault();
    setActiveFilters(filterData);
    const filterFunctions = {
      category: (item, key) => item.category.toLowerCase() === key.toLowerCase(),
      status: (item, key) => item.boolean === 'active',
    };
    const filtered = listDashboard.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
      if (filterData.length > 0) {
        return filterData.every((filter) => {
          const filterFunction = filterFunctions[filter.column];
          return filterFunction ? filterFunction(item, filter.key) : true;
        });
      }

      return matchesSearch;
    });
    setFilteredItem(filtered);
    setCurrentPage(1);
    setOpenModalFilter(false);
    fetchListDarhboard();
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortData = (data, key, direction) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  };

  useEffect(() => {
    fetchListDarhboard();
  }, [currentPage, itemsPerPage, filteredItem, sortKey, sortDirection, totalItems]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <CustomTable
          columns={columns(
            (value) => handleToggleChange(value),
            (value, index) => onClick(value, index)
          )}
          dataSource={displayedItems}
          showToast={showToast}
          toastIcons={toastIcons}
          toastDescription={toastDescription}
          pagination={{
            currentPage,
            totalPages,
            itemsPerPage,
            page,
            displayedItems,
            totalItems,
            onPageChange: (page) => onPageChange(page),
            onDropdownPageChange: (value) => dropdownPageChange(value),
            onClickCheck: onClickCheck,
            searchBoolean: searchBoolean,
          }}
          isLoading={isLoading}
          onSort={handleSort}
          sortKey={sortKey}
          sortDirection={sortDirection}
          headerData={headerArray(
            searchBoolean,
            search,
            (value) => setSearch(value),
            (value) => onClickCheck(value),
            searchTable
          )}
        />
      </div>

      {/* Modal */}
      <div>
        <ModalText
          isOpen={openModal === 'dismissible'}
          onClose={() => setOpenModal(false)}
          modalHeader={modalHeader}
          modalText={modalText}
          onConfirm={onClickModal}
        />
      </div>
      <div>
        <ModalFilter
          isOpen={openModalFilter === 'dismissible'}
          onClose={() => setOpenModalFilter(false)}
          filterData={filterData}
          onClickFilter={handleFilter}
          activeFilters={activeFilters}
        />
      </div>
    </div>
  );
};

export default DashboardPromo;
