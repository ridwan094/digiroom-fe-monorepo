import {
    MdWork,
    MdTrendingUp,
    MdLocalOffer,
    MdInsertDriveFile,
    MdDirectionsCar,
    MdList,
    MdQuestionAnswer,
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
            }
        ]
    },
    {
        name: 'Articles',
        icon: MdInsertDriveFile,
        subMenu: [
            {
                name: 'List Article',
                path: '/article',
                icon: MdList,
            },
            {
                name: 'FAQ Article',
                path: '/article/faq',
                icon: MdQuestionAnswer,
            }
        ]
    },
    {
        name: 'Product Knowladge',
        path: '/product-knowladge',
        icon: MdDirectionsCar,
    },
]

export default menu;