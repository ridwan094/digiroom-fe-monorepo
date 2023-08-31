import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import { columns, filterData, headerArray } from '@/constants/promo';
import ModalText from '../modal-text';
import ModalFilter from '../modal-filter';
import ModalPreview from '../modal-preview';
import { LoadingEffect } from '../loading';
import { Spinner } from 'flowbite-react';
import { typeAction } from '@/constants/type';
import {
  getListDashboardPromo,
  deletePromo,
} from '../../service/promo';

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
  const [openModalPreview, setOpenModalPreview] = useState('');
  const [dataPreview, setDataPreview] = useState([]);
  const [loadingAction, setLoadingAction] = useState(false);

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

  const onClick = async (value, items) => {
    setCaseItems(value);
    switch (value) {
      case typeAction.EDIT:
        router.push(`/promo/update-promo/${items.slug}`);
        break;
      case typeAction.DELETE:
        const response = await deletePromo(items.id)
        if(response) {
          fetchListDarhboard()
        }
        break;
      case typeAction.COPY:
        router.push(`/promo/duplicate-promo/${items.slug}`);
        break;
      case typeAction.VIEW:
        setLoadingAction(true);
        const data = await getIdListData(item.id);
        if (data !== null) {
          setDataPreview(data);
          setOpenModalPreview('dismissible');
          setLoadingAction(false);
        } else {
          setDataPreview(sampleData);
          setOpenModalPreview('dismissible');
          setLoadingAction(false);
        }
        break;
    }
  };

  const fetchListDarhboard = async () => {
    setIsLoading(true);
    try {
      const data = await getListDashboardPromo(
        search,
        sortDirection,
        currentPage,
        startIndex,
        endIndex,
        activeFilters
      );
      if (data !== null) {
        const promoList = [];

        data.map((item) => {
          promoList.push({
            id: item.id,
            title: item.titlePage,
            category: 'Mobil',
            startDate: item.startDate ? item.startDate.toString() : null,
            endDate: item.endDate ? item.endDate.toString() : null,
            slug: item.slug,
            publish: item.publish
          })
        })

        setListDashboard(promoList);
        // setTotalItems(data.total);
        // setTotalPages(Math.ceil(data.total / itemsPerPage));
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
        await deletePromo()
        setOpenModal(undefined);
        break;
    }
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

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  useEffect(() => {
    fetchListDarhboard();
  }, [currentPage, itemsPerPage, filteredItem, sortKey, sortDirection, totalItems]);

  return (
    <div className="relative w-full">
      {loadingAction && LoadingEffect(<Spinner />, 'Loading...')}

      <div className={`${loadingAction ? 'pointer-events-none' : ''} relative`}>
        <CustomTable
          columns={columns(
            (value) => handleToggleChange(value),
            (value, index, item) => onClick(value, index, item)
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

export default DashboardPromo;
