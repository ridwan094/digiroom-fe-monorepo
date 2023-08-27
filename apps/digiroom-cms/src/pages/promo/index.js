import { MdOutlineFileCopy } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columns, filterData, headerArray } from '@/constants/implement-table';
import ModalText from '../modal-text';
import ModalFilter from '../modal-filter';
import {
  deleteListDashboardPromo,
  getListDashboardPromo,
} from '../../service/promo-dashboard-homepage/promo-dashboard';

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
    if (value.key === 'Enter') {
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
    const deleteData = await deleteListDashboardPromo(value.id);
    if (deleteData) {
      const updatedList = listDashboard.filter((item) => item.id !== value.id);
      setListDashboard(updatedList);
    }
  };

  const fetchListDarhboard = async () => {
    const tokenUser = localStorage.getItem('user');
    const token = JSON.parse(tokenUser);
    setIsLoading(true);
    try {
      const data = await getListDashboardPromo(
        token.access_token,
        search,
        sortDirection,
        currentPage,
        startIndex,
        endIndex,
        activeFilters
      );
      if (data !== null) {
        setListDashboard(data.data);
        setTotalItems(data.total);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
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
          dataSource={listDashboard}
          showToast={showToast}
          toastIcons={toastIcons}
          toastDescription={toastDescription}
          pagination={{
            currentPage,
            totalPages,
            itemsPerPage,
            page,
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
