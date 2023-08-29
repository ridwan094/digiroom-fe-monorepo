import { MdChevronRight } from 'react-icons/md';

const Breadcrumbs = ({ isMobileScreen, items, breadcrumbsClassName }) => {
  return (
    <div className={`${breadcrumbsClassName} ${isMobileScreen ? 'lg:hidden' : 'hidden lg:block'}`}>
      <div className={`flex`} aria-label="Breadcrumb">
        <ul
          className="w-full py-3 lg:border-b lg:border-[#F0EFEF
]"
        >
          <div className="container flex items-center space-x-1 md:space-x-3">
            {items.map((item, _i) => {
              return (
                <li className="truncate" key={_i}>
                  <div className="flex items-center truncate">
                    {_i !== 0 && <MdChevronRight color="#7B7979" />}

                    {_i === items.length - 1 ? (
                      // Last item
                      <span className="text-reliableBlack60 text-xs uppercase font-bold ml-1 md:ml-2 truncate lg:text-sm">
                        {item.name}
                      </span>
                    ) : (
                      // Previous item
                      <a
                        href={item.path}
                        className={`text-reliableBlack60 text-xs uppercase font-medium hover:text-gray-900 lg:text-sm ${
                          _i !== 0 && 'ml-1 md:ml-2'
                        }`}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

Breadcrumbs.defaultProps = {
  isMobileScreen: true,
  items: [],
  breadcrumbsClassName: '',
};

export default Breadcrumbs;
