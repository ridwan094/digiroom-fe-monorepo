import {
  MdWork,
  MdTrendingUp,
  MdLocalOffer,
  MdInsertDriveFile,
  MdDirectionsCar,
  MdList,
  MdQuestionAnswer,
  MdOutlineStorage,
} from 'react-icons/md';

const menu = [
  {
    name: 'Master Data',
    path: '/master-data',
    icon: MdWork,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: MdTrendingUp,
  },
  {
    name: 'Promo',
    icon: MdLocalOffer,
    subMenu: [
      {
        name: 'List Promo',
        path: '/promo',
        icon: MdList,
      },
      {
        name: 'FAQ Promo',
        path: '/promo/faq',
        icon: MdQuestionAnswer,
      },
    ],
  },
  {
    name: 'News & Tips',
    icon: MdInsertDriveFile,
    subMenu: [
      {
        name: 'Dashboard',
        path: '/news-tips',
      },
      {
        name: 'Display',
        path: '/news-tips/display',
      },
      {
        name: 'FAQ',
        path: '/news-tips/faq',
      },
    ],
  },
  {
    name: 'Product Knowladge',
    path: '/product-knowladge',
    icon: MdDirectionsCar,
  },
  {
    name: 'Landing Page',
    path: '/landingpage',
    icon: MdOutlineStorage,
  },
];

export default menu;
