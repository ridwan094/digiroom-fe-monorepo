
import { MdChevronRight } from "react-icons/md";

const BreadCrumbs = () => {
 const data = ["Home", "Promo", "cicilan-mobil-calya"]
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {data.map((item, _i) => {
          return (
            <>
              {_i === 0 ? (
                <li className="inline-flex items-center" key={_i}>
                  <a
                    href="#"
                    className="text-[#333333] text-sm font-bold hover:text-gray-900 inline-flex items-center uppercase"
                  >
                    {item}
                  </a>
                </li>
              ) : (
                <li key={_i}>
                  <div className="flex items-center">
                    <MdChevronRight />

                    {_i === data.length - 1 ? (
                      <span className="text-[#828282] ml-1 md:ml-2 text-sm font-medium uppercase">
                        {item}
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="text-[#333333] font-bold hover:text-gray-900 ml-1 md:ml-2 uppercase text-sm"
                      >
                        {item}
                      </a>
                    )}
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
