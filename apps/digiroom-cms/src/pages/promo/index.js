import { MdOutlineFileCopy } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columns, filterData, headerArray } from '@/constants/implement-table';
import { itemProduct } from '@/constants/promo';
import ModalText from '../modal-text';
import ModalFilter from '../modal-filter';
import { getListDashboardPromo } from '../api/promo-dashboard';

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
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedItems, setDisplayedItems] = useState(0);
  const [page, setPage] = useState([10, 20, 30]);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [filteredItem, setFilteredItem] = useState([]);
  const [listDashboard, setListDashboard] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const onPageChange = async (page) => {
    setCurrentPage(page);
    await fetchDashboardData();
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
    if (search !== null && event.key === 'Enter') {
      event.preventDefault();
      const filtered = listDashboard.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItem(filtered);
      setCurrentPage(1);
      await fetchDashboardData();
    }
  };

  const onClick = (items, index) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        router.push('/#');
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${displayedItems[index].title}`);
        break;
      case 'copy':
        const textToCopy = itemProduct[index].slug;
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

  const dropdownPageChange = (selectedValue) => {
    setItemsPerPage(selectedValue);
    setTotalPages(Math.ceil(totalItems / selectedValue));
    onPageChange(1);
  };

  const onClickModal = () => {
    var updateItemProduct = [...itemProduct];
    switch (caseItems.newValue) {
      case false:
        updateItemProduct[caseItems.index].boolean = caseItems ? 'inactive' : 'active';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
      case true:
        updateItemProduct[caseItems.index].boolean = caseItems ? 'active' : 'inactive';
        setDisplayedItems(itemProduct.slice(0, itemsPerPage));
        setOpenModal(undefined);
        updateItemProduct = null;
        break;
      default:
        setOpenModal(undefined);
        break;
    }
  };

  const handleToggleChange = (value) => {
    const { test, indexTest } = value;
    setOpenModal('dismissible');
    setModalText(!test ? 'unpublished' : 'published');
    setModalHeader(displayedItems[indexTest].title);
    setCaseItems({
      newValue: test,
      index: indexTest,
    });
  };

  const handleFilter = (filterData) => {
    setOpenModalFilter(false);
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const token = localStorage.getItem('user');
  const fetchDashboardData = async () => {
    setIsLoading(true);
    // const data = await getListDashboardPromo(JSON.parse(token));
    // if (data !== null) {
    // setListDashboard(search ? filteredItem : data);
    // setTotalItems(data.length);
    // setItemsPerPage(page[0]);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const currentPageData = listDashboard;
    // const endIndex = startIndex + itemsPerPage;
    // const displayedItems = currentPageData.slice(startIndex, endIndex);
    // setTotalPages(totalItems ? Math.ceil(totalItems / itemsPerPage) : 0);
    // setDisplayedItems(displayedItems || []);
    //   setIsLoading(false);
    // } else {
    setIsLoading(false);
    // }
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [currentPage, itemsPerPage, filteredItem, sortKey, sortDirection]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <CustomTable
          columns={columns(
            (value) => handleToggleChange(value),
            (value, index) => onClick(value, index)
          )}
          dataSource={listDashboard}
          pagination={{
            currentPage,
            totalPages,
            itemsPerPage,
            page,
            listDashboard,
            totalItems,
            onselect: (value) => onselect(value),
            onPageChange: (page) => onPageChange(page),
            onDropdownPageChange: (value) => dropdownPageChange(value),
            onClickCheck: onClickCheck,
            searchBoolean: searchBoolean,
            setSearch: searchTable,
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
        />
      </div>
    </div>
  );
};

export default DashboardPromo;
