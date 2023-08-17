import { Tooltip } from 'flowbite-react';
import {
    MdOutlineCreate,
    MdOutlineDelete,
    MdOutlineFileCopy,
  } from 'react-icons/md';
import ToggleSwitch from 'ui/components/atoms/Toogle';

export const columns = [
    { 
        title: 'Promo Name', 
        dataIndex: 'title', 
        key: 'promoName' 
    },
    { 
        title: 'Slug', 
        dataIndex: 'slug', 
        key: 'slug' 
    },
    { 
        title: 'Date Publised', 
        dataIndex: 'datePublished', 
        key: 'datePublished' 
    },
    { 
        title: 'Category', 
        dataIndex: 'category', 
        key: 'category' 
    },
    { 
        title: 'Action', 
        dataIndex: 'action', 
        key: 'action', 
        render: () => (
            <div className="flex flex-rows hover:cursor-pointer gap-2">
                <Tooltip content="Edit">
                <MdOutlineCreate
                    className="text-2xl"
                    onClick={() => onClick('edit', index)}
                />
                </Tooltip>
                <Tooltip content="Delete">
                <MdOutlineDelete
                    className="text-2xl"
                    onClick={() => onClick('delete', index)}
                />
                </Tooltip>
                <Tooltip content="Copy">
                <MdOutlineFileCopy
                    className="text-2xl"
                    onClick={() => onClick('copy', index)}
                />
                </Tooltip>
            </div>
        ) 
    },
    { 
        title: 'Status', 
        dataIndex: 'status', 
        key: 'status', 
        render: (status, item, i) => (
            <div className="flex items-center gap-2">
                <div
                    className={`p-2 w-full h-full border border-gray-200 ${
                        item.boolean === 'active'
                        ? 'bg-gray-200'
                        : item.boolean === 'inactive'
                        ? 'bg-gray-300'
                        : item.boolean === 'waitings'
                        ? 'bg-gray-500'
                        : 'bg-gray-200'
                    } rounded-full text-black capitalized text-md flex justify-center items-center font-Montserrat`}
                >
                    {item.boolean === 'active'
                    ? 'Published'
                    : item.boolean === 'inactive'
                    ? 'Unpublished'
                    : 'Waiting'}
                </div>
                <ToggleSwitch
                        index={i}
                        disabled={item.boolean === 'waitings'}
                        value={item.boolean === 'active'}
                        onToggleChange={() => console.log('asdasd')}
                        classNameLabel={`w-11 h-6 bg-gray-200 rounded-full peer  
                        peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-[2px] after:left-[2px] 
                        after:bg-gray-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                        after:transition-all ${
                            item.boolean === 'active'
                            ? 'peer-checked:bg-gray-800 peer-checked:after:translate-x-full'
                            : 'peer-checked:after:translate-x-0'
                        } `}
                    />
            </div>
        )
    },
  ];