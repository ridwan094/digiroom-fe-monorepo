import { MdChevronRight } from 'react-icons/md';

const BreadCrumbs = ({ items, border }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ul
          className={`w-full py-3 ${border ? 'lg:border-b lg:border-[#F0EFEF]' : null }`}
      >
        <div className="container flex items-center space-x-1 md:space-x-3">
          {items.map((item, _i) => {
            return (
              <li key={_i}>
                <div className="flex items-center">
                  {_i !== 0 && <MdChevronRight color="#7B7979" />}

                  {_i === items.length - 1 ? (
                    // Last item
                    <span className="text-reliableBlack60 text-xs uppercase font-bold ml-1 md:ml-2 lg:text-sm">
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
    </nav>
  );
};

BreadCrumbs.defaultProps = {
  border: true
};
export default BreadCrumbs;
