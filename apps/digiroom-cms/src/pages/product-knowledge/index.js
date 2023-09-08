import { MdOutlineFileCopy } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import CustomTable from '@/components/Table';
import { useRouter } from 'next/navigation';
import {
  columnsProductKnowledge,
  filterProductKnowledge,
  headerArrayProductKnowledge,
} from '@/constants/product-knowledge';
import ModalText from '@/components/modal-text';
import ModalFilter from '@/components/modal-filter';
import ModalPreview from '@/components/modal-preview';
import {
  getListDashboardProductKnowledge,
  getIdListData,
  deleteDataTable,
} from '@/service/product-knowledge';
import { LoadingEffect } from '../loading';
import { Spinner } from 'flowbite-react';

const DashboardProductKnowledge = () => {
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

  const onPageChange = async (page) => {
    setCurrentPage(page);
    fetchListDashboard();
  };

  const onClickCheck = (value) => {
    switch (value) {
      case 'add':
        router.push('/product-knowledge/add-product-knowledge');
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
      fetchListDashboard();
    }
  };

  const onClick = async (items, index, item) => {
    setCaseItems(items);
    switch (items) {
      case 'edit':
        router.push(`/product-knowledge/${item.slug}`);
        break;
      case 'delete':
        setOpenModal('dismissible');
        setModalText('delete');
        setModalHeader(`Delete ${listDashboard[index + startIndex].title}`);
        setTableDelete(listDashboard[index + startIndex]);
        setDeleteData(item.id);
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
      case 'view':
        setLoadingAction(true);
        const data = await getIdListData(item);
        if (data !== null) {
          setDataPreview(data);
          setOpenModalPreview('dismissible');
          setLoadingAction(false);
        } else {
          setDataPreview(null);
          setOpenModalPreview('dismissible');
          setLoadingAction(false);
        }
        setLoadingAction(false);
        break;
    }
  };

  const fetchListDashboard = async () => {
    // setIsLoading(true);
    // try {
    //   const payload = {
    //     filters: [],
    //     sorts: dataDirection,
    //     page: currentPage - 1,
    //     size: itemsPerPage,
    //   };
    //   const data = await getListDashboardNewsTips(payload);
    //   if (data !== null) {
    //     setListDashboard(data.content);
    //     setTotalItems(data.totalElements);
    //     setTotalPages(Math.ceil(data.totalPages / itemsPerPage));
    //   }
    //   setIsLoading(false);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   setIsLoading(false);
    // }
    const dataTemporary = [
      {
        id: 2,
        heroImageLink:
          'https://astradigitaldigiroomstg.blob.core.windows.net/storage-general-001/image.jpg',
        titlePage: 'Title Promo',
        startDate: '2023-08-27T17:00:00',
        endDate: '2023-08-27T17:00:00',
        publishedDate: null,
        titleHeader: 'title promo header',
        slug: 'title-slug-test-newsandtips-1',
        category: {
          id: 2,
          categoryType: 'NEWS_AND_TIPS',
          name: 'NEWS AND TIPS',
          description: null,
        },
        contentCategory: {
          id: 4,
          contentCategoryType: 'BERITA_TIPS',
          name: 'Berita And Tips',
          description: null,
          categoryId: 2,
          priority: 1,
        },
        keyword: 'this for keyword',
        metaDescription: 'this for metaDescription',
        altImage: 'this for altImage',
        ordering: 1,
        tag: null,
        metaRobotList: [],
        cmsStatusType: null,
        groupType: null,
        region: null,
        city: null,
        branch: null,
        detailContent: null,
      },
    ];

    setListDashboard(dataTemporary);
  };

  const dropdownPageChange = (selectedValue) => {
    setItemsPerPage(selectedValue);
    onPageChange(1);
    fetchListDashboard();
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
        const data = await deleteDataTable(deleteData);
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
    fetchListDashboard();
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
    fetchListDashboard();
  };

  useEffect(() => {
    fetchListDashboard();
  }, []);

  return (
    <div className="relative w-full">
      {loadingAction && LoadingEffect(<Spinner />, 'Loading...')}
      <div className={`${loadingAction ? 'pointer-events-none' : ''} relative`}>
        <CustomTable
          columns={columnsProductKnowledge(
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
          headerData={headerArrayProductKnowledge(
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
          filterData={filterProductKnowledge}
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

export default DashboardProductKnowledge;
