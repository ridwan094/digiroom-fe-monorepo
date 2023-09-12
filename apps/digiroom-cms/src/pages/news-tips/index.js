import { MdClear, MdDoneOutline } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import {
  columnsNewsTips,
  headerArrayNewsTips,
} from '@/helpers/utils/news-tips-page/NewsTipsPageList';
import ModalText from '@/components/modal-text';
import ModalFilter from '@/components/modal-filter';
import ModalPreview from '@/components/modal-preview';
import {
  getListDashboardNewsTips,
  deleteDataTable,
  getCategory,
  getStatus,
  editNewsTips,
} from '@/service/news-tips';
import { LoadingEffect } from '../loading';
import { Spinner } from 'flowbite-react';

const DashboardNewsTips = () => {
  const router = useRouter();
  const [state, setState] = useState({
    currentPage: 1,
    showToast: false,
    toastDescription: '',
    toastIcons: null,
    openModal: null,
    openModalFilter: null,
    modalText: '',
    modalHeader: '',
    caseItems: null,
    isLoading: false,
    totalItems: 0,
    totalPages: 0,
    page: [10, 20, 30],
    itemsPerPage: 10, // Default items per page
    search: '',
    searchBoolean: false,
    listDashboard: [],
    sortKey: [],
    sortDirection: [],
    dataDirection: [],
    activeFilters: [],
    openModalPreview: '',
    dataPreview: [],
    loadingAction: false,
    deleteData: null,
    dataFilter: [],
    filterModal: [],
    changeData: [],
  });

  const onPageChange = async (page) => {
    setState((prevState) => ({ ...prevState, currentPage: page }));
  };

  const onClickCheck = (value) => {
    switch (value) {
      case 'add':
        router.push('/news-tips/add-news-tips');
        break;
      case 'filter':
        setState((prevState) => ({ ...prevState, openModalFilter: 'dismissible' }));
        break;
      case 'search':
        setState((prevState) => ({ ...prevState, searchBoolean: !prevState.searchBoolean }));
        break;
    }
  };

  const searchTable = async (value) => {
    if (value.key === 'Enter') {
      setState((prevState) => ({ ...prevState, currentPage: 1 }));
    }
  };

  const onClick = async (items, index, item) => {
    setState((prevState) => ({ ...prevState, caseItems: items }));

    switch (items) {
      case 'edit':
        router.push({
          pathname: '/news-tips/edit-news-tips',
          query: { id: JSON.stringify(item.slug) },
        });
        break;
      case 'delete':
        setState((prevState) => ({
          ...prevState,
          openModal: 'dismissible',
          modalText: 'delete',
          modalHeader: item.titlePage,
          deleteData: item,
        }));
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
    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const payload = {
        filters: state.filterModal,
        sorts:
          state.dataDirection.length > 0 ? state.dataDirection : [{ key: 'id', direction: 'DESC' }],
        page: state.currentPage - 1,
        size: state.itemsPerPage,
      };
      const data = await getListDashboardNewsTips(payload);

      if (data !== null) {
        setState((prevState) => ({
          ...prevState,
          listDashboard: data.content,
          totalItems: data.totalElements,
          totalPages: Math.ceil(data.totalElements / state.itemsPerPage),
        }));
      }

      setState((prevState) => ({ ...prevState, isLoading: false }));
    } catch (error) {
      console.error('Error fetching data:', error);
      setState((prevState) => ({ ...prevState, isLoading: false }));
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
      setState((prevState) => ({ ...prevState, dataFilter: filterDataNewsTips }));
    } catch (error) {
      console.log('Error Getting Data');
    }
  };

  const dropdownPageChange = (selectedValue) => {
    setState((prevState) => ({
      ...prevState,
      itemsPerPage: selectedValue,
      currentPage: 1,
    }));
  };

  const onClickModal = async () => {
    switch (state.caseItems.newValue) {
      case false:
        state.caseItems.index.cmsStatusType = 'DRAFT';
        const edit = await editNewsTips(state.caseItems.index);
        if (edit.status.includes('Success')) {
        } else {
          state.caseItems.index.cmsStatusType = 'PUBLISH';
        }
        setState((prevState) => ({ ...prevState, openModal: undefined }));

        break;
      case true:
        state.caseItems.index.cmsStatusType = 'PUBLISH';
        const update = await editNewsTips(state.caseItems.index);
        if (update.status.includes('Success')) {
        } else {
          state.caseItems.index.cmsStatusType = 'DRAFT';
        }
        setState((prevState) => ({ ...prevState, openModal: undefined }));

        break;
      default:
        const data = await deleteDataTable(state.deleteData.id);
        if (data.status.includes('Success')) {
          setState((prevState) => ({
            ...prevState,
            showToast: true,
            toastIcons: <MdDoneOutline />,
            toastDescription: 'Delete News Tips Success',
          }));
          fetchListDashboard();
        } else {
          setState((prevState) => ({
            ...prevState,
            showToast: true,
            toastIcons: <MdClear />,
            toastDescription: 'Delete News Tips Error',
          }));
        }
        setState((prevState) => ({ ...prevState, openModal: undefined }));
        break;
    }
  };

  const handleToggleChange = (index) => {
    const { value, data } = index;
    setState((prevState) => ({
      ...prevState,
      openModal: 'dismissible',
      modalText: !value ? 'unpublished' : 'published',
      modalHeader: data.titlePage,
      caseItems: {
        newValue: value,
        index: data,
      },
    }));
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
    setState((prevState) => ({ ...prevState, filterModal: filters }));
  };

  const handleSort = (key) => {
    const keyIndex = state.sortKey.indexOf(key);

    if (keyIndex !== -1) {
      let newDirection;

      if (state.sortDirection[keyIndex] === 'ASC') {
        newDirection = 'DESC';
      } else if (state.sortDirection[keyIndex] === 'DESC') {
        newDirection = null;
      }

      if (newDirection === null) {
        setState((prevState) => ({
          ...prevState,
          sortKey: prevState.sortKey.filter((k) => k !== key),
          sortDirection: prevState.sortDirection.filter((direction, index) => index !== keyIndex),
          dataDirection: prevState.dataDirection.filter((item) => item.key !== key),
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          sortDirection: prevState.sortDirection.map((direction, index) =>
            index === keyIndex ? newDirection : direction
          ),
          dataDirection: prevState.dataDirection.map((item) =>
            item.key === key ? { ...item, direction: newDirection } : item
          ),
        }));
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        sortKey: [...prevState.sortKey, key],
        sortDirection: [...prevState.sortDirection, 'ASC'],
        dataDirection: [...prevState.dataDirection, { key, direction: 'ASC' }],
      }));
    }
  };

  useEffect(() => {
    fetchListDashboard();
  }, [
    state.currentPage,
    state.itemsPerPage,
    state.sortKey,
    state.sortDirection,
    state.filterModal,
  ]);

  useEffect(() => {
    getListCategoryStatus();
  }, []);

  return (
    <div className="relative w-full">
      {state.loadingAction && LoadingEffect(<Spinner />, 'Loading...')}
      <div className={`${state.loadingAction ? 'pointer-events-none' : ''} relative`}>
        <CustomTable
          columns={columnsNewsTips(
            state.itemsPerPage,
            state.currentPage,
            (value) => handleToggleChange(value),
            (value, index, item) => onClick(value, index, item),
            state.sortKey,
            state.sortDirection,
            handleSort
          )}
          dataSource={state.listDashboard}
          showToast={state.showToast}
          toastIcons={state.toastIcons}
          toastDescription={state.toastDescription}
          pagination={{
            currentPage: state.currentPage,
            totalPages: state.totalPages,
            itemsPerPage: state.itemsPerPage,
            page: state.page,
            totalItems: state.totalItems,
            onPageChange: (page) => onPageChange(page),
            onDropdownPageChange: (value) => dropdownPageChange(value),
            onClickCheck: onClickCheck,
            searchBoolean: state.searchBoolean,
          }}
          isLoading={state.isLoading}
          headerData={headerArrayNewsTips(
            state.searchBoolean,
            state.search,
            (value) => setState((prevState) => ({ ...prevState, search: value })),
            (value) => onClickCheck(value),
            searchTable
          )}
          setShowToast={(show) => setState((prevState) => ({ ...prevState, showToast: show }))}
        />
      </div>
      {/* Modal */}
      <div>
        <ModalText
          isOpen={state.openModal === 'dismissible'}
          onClose={() => setState((prevState) => ({ ...prevState, openModal: false }))}
          modalHeader={state.modalHeader}
          modalText={state.modalText}
          onConfirm={onClickModal}
        />
      </div>
      <div>
        <ModalFilter
          isOpen={state.openModalFilter === 'dismissible'}
          onClose={() => setState((prevState) => ({ ...prevState, openModalFilter: false }))}
          filterData={state.dataFilter}
          onClickFilter={handleFilter}
          activeFilters={state.activeFilters}
        />
      </div>
      <div>
        <ModalPreview
          isOpen={state.openModalPreview === 'dismissible'}
          onClose={() => setState((prevState) => ({ ...prevState, openModalPreview: false }))}
          onConfirm={onClickModal}
          dataPreview={state.dataPreview}
        ></ModalPreview>
      </div>
    </div>
  );
};

export default DashboardNewsTips;
