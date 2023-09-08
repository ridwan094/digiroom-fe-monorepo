import { MdClear, MdDoneOutline } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columnsNewsTips, headerArrayNewsTips } from '@/constants/news-tips';
import ModalText from '@/components/modal-text';
import ModalFilter from '@/components/modal-filter';
import ModalPreview from '@/components/modal-preview';
import {
  getListDashboardNewsTips,
  getIdListData,
  deleteDataTable,
  getCategory,
  getStatus,
  editNewsTips,
} from '@/service/news-tips';
import { LoadingEffect } from '../loading';
import { Spinner, Toast } from 'flowbite-react';

const DashboardNewsTips = () => {
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
  const [itemsPerPage, setItemsPerPage] = useState(page[0]);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [searchBoolean, setSearchBoolean] = useState(false);
  const [listDashboard, setListDashboard] = useState([]);
  const [sortKey, setSortKey] = useState([]);
  const [sortDirection, setSortDirection] = useState([]);
  const [dataDirection, setDataDirection] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [openModalPreview, setOpenModalPreview] = useState('');
  const [dataPreview, setDataPreview] = useState([]);
  const [loadingAction, setLoadingAction] = useState(false);
  const [deleteData, setDeleteData] = useState();
  const [dataFilter, setDataFilter] = useState([]);
  const [filterModal, setFilterModal] = useState([]);
  const [changeData, setChangeData] = useState([]);

  const onPageChange = async (page) => {
    setCurrentPage(page);
  };

  const onClickCheck = (value) => {
    switch (value) {
      case 'add':
        router.push('/news-tips/add-news-tips');
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
    }
  };

  const onClick = async (items, index, item) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        router.push({
          pathname: '/news-tips/edit-news-tips',
          query: { id: JSON.stringify(item.slug) },
        });
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(item.titlePage);
        setDeleteData(item);
        break;
      case 'copy':
        router.push({
          pathname: '/news-tips/duplicate-news-tips',
          query: { id: JSON.stringify(item.slug) },
        });
        break;
    }
  };

  const fetchListDashboard = async () => {
    setIsLoading(true);
    try {
      const payload = {
        filters: filterModal,
        sorts: dataDirection.length > 0 ? dataDirection : [{ key: 'id', direction: 'DESC' }],
        page: currentPage - 1,
        size: itemsPerPage,
      };
      const data = await getListDashboardNewsTips(payload);
      if (data !== null) {
        setListDashboard(data.content);
        setTotalItems(data.totalElements);
        setTotalPages(Math.ceil(data.totalElements / itemsPerPage));
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const getListCategoryStatus = async () => {
    try {
      const categoryData = await getCategory();
      const categoryItems = categoryData.map((item) => ({
        column: 'category',
        key: item.name.toLowerCase().replace(/ /g, ''),
        label: item.name,
        id: item.id,
      }));
      const statusData = await getStatus();
      const statusItems = statusData.map((item) => ({
        column: 'status',
        key: item.toLowerCase(),
        label: item.charAt(0) + item.slice(1).toLowerCase(),
      }));
      const dateRangeItem = {
        column: 'daterange',
        key: 'dateRange',
        label: 'Date Range',
      };
      const filterDataNewsTips = [
        {
          title: 'Category',
          items: categoryItems,
        },
        {
          title: 'Status',
          items: statusItems,
        },
        {
          title: 'Date Range',
          items: [dateRangeItem],
        },
      ];
      setDataFilter(filterDataNewsTips);
    } catch (error) {
      console.log('Error Getting Data');
    }
  };

  const dropdownPageChange = (selectedValue) => {
    setItemsPerPage(selectedValue);
    onPageChange(1);
  };

  const onClickModal = async () => {
    switch (caseItems.newValue) {
      case false:
        caseItems.index.cmsStatusType = 'DRAFT';
        const edit = await editNewsTips(caseItems.index);
        if (edit.status.includes('Success')) {
        } else {
          caseItems.index.cmsStatusType = 'PUBLISH';
        }
        setOpenModal(undefined);

        break;
      case true:
        caseItems.index.cmsStatusType = 'PUBLISH';
        const update = await editNewsTips(caseItems.index);
        if (update.status.includes('Success')) {
        } else {
          caseItems.index.cmsStatusType = 'DRAFT';
        }
        setOpenModal(undefined);

        break;
      default:
        const data = await deleteDataTable(deleteData.id);
        if (data.status.includes('Success')) {
          setShowToast(true);
          setToastIcons(<MdDoneOutline />);
          setToastDescription('Delete News Tips Success');
          fetchListDashboard();
        } else {
          setShowToast(true);
          setToastIcons(<MdClear />);
          setToastDescription('Delete News Tips Error');
        }
        setOpenModal(undefined);
        break;
    }
  };

  const handleToggleChange = (index) => {
    const { value, data } = index;
    setOpenModal('dismissible');
    setModalText(!value ? 'unpublished' : 'published');
    setModalHeader(data.titlePage);
    setCaseItems({
      newValue: value,
      index: data,
    });
  };

  const handleFilter = async (filterData, startDate, endDate) => {
    event.preventDefault();
    const categoryIds = [];
    const statusKeys = [];
    const filters = [];

    if (filterData.length > 0) {
      filterData.forEach((filter) => {
        if (filter.column === 'category' && filter.id) {
          categoryIds.push(filter.id);
        } else if (filter.column === 'status' && filter.key) {
          statusKeys.push(filter.key.toUpperCase());
        }
      });

      if (categoryIds.length > 0) {
        filters.push({
          key: 'contentCategory.id',
          operator: 'IN',
          fieldType: 'INTEGER',
          values: categoryIds,
        });
      }

      if (statusKeys.length > 0) {
        filters.push({
          key: 'cmsStatusType',
          operator: 'IN',
          fieldType: 'STATUSTYPEENUM',
          value: null,
          valueTo: null,
          values: statusKeys,
        });
      }

      if (startDate !== null) {
        filters.push({
          key: 'startDate',
          operator: 'GREATEROREQUAL',
          fieldType: 'DATE',
          value: startDate.toISOString(),
          valueTo: null,
          values: null,
        });
      }

      if (endDate !== null) {
        filters.push({
          key: 'endDate',
          operator: 'LESSOREQUAL',
          fieldType: 'DATE',
          value: endDate.toISOString(),
          valueTo: null,
          values: null,
        });
      }
    }
    setFilterModal(filters);
  };

  const handleSort = (key) => {
    const keyIndex = sortKey.indexOf(key);

    if (keyIndex !== -1) {
      let newDirection;

      if (sortDirection[keyIndex] === 'ASC') {
        newDirection = 'DESC';
      } else if (sortDirection[keyIndex] === 'DESC') {
        newDirection = null;
      }

      if (newDirection === null) {
        setSortKey(sortKey.filter((k) => k !== key));
        setSortDirection(sortDirection.filter((direction, index) => index !== keyIndex));
        setDataDirection(dataDirection.filter((item) => item.key !== key));
      } else {
        setSortDirection(
          sortDirection.map((direction, index) => (index === keyIndex ? newDirection : direction))
        );
        setDataDirection(
          dataDirection.map((item) =>
            item.key === key ? { ...item, direction: newDirection } : item
          )
        );
      }
    } else {
      setSortKey([...sortKey, key]);
      setSortDirection([...sortDirection, 'ASC']);
      setDataDirection([...dataDirection, { key, direction: 'ASC' }]);
    }
  };

  useEffect(() => {
    fetchListDashboard();
  }, [currentPage, itemsPerPage, sortKey, sortDirection, filterModal]);

  useEffect(() => {
    getListCategoryStatus();
  }, []);

  return (
    <div className="relative w-full">
      {loadingAction && LoadingEffect(<Spinner />, 'Loading...')}
      <div className={`${loadingAction ? 'pointer-events-none' : ''} relative`}>
        <CustomTable
          columns={columnsNewsTips(
            itemsPerPage,
            currentPage,
            (value) => handleToggleChange(value),
            (value, index, item) => onClick(value, index, item),
            sortKey,
            sortDirection,
            handleSort
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
          headerData={headerArrayNewsTips(
            searchBoolean,
            search,
            (value) => setSearch(value),
            (value) => onClickCheck(value),
            searchTable
          )}
          setShowToast={setShowToast}
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
          filterData={dataFilter}
          onClickFilter={handleFilter}
          activeFilters={activeFilters}
        />
      </div>
      <div>
        <ModalPreview
          isOpen={openModalPreview === 'dismissible'}
          onClose={() => setOpenModalPreview(false)}
          onConfirm={onClickModal}
          dataPreview={dataPreview}
        ></ModalPreview>
      </div>
    </div>
  );
};

export default DashboardNewsTips;
