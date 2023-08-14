import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <button
            className={`flex items-center ${currentPage === 1 && 'text-[#C7C7C7]'}`}
            disabled={currentPage === 1}
            onClick={goToPrevPage}
          >
            <MdChevronLeft size="18px" />
            <span>Previous</span>
          </button>
        </li>
        {Array(totalPages)
          .fill(0)
          .map((num, i) => (
            <li key={i}>
              <button
                className={`py-2 px-4 text-sm font-regular text-reliableBlack rounded ${
                  currentPage === i + 1 && 'bg-reliableBlack text-white'
                }`}
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        <li>
          <button
            className={`flex items-center ${currentPage === totalPages && 'text-[#C7C7C7]'}`}
            disabled={currentPage === totalPages}
            onClick={goToNextPage}
          >
            <span>Next</span>
            <MdChevronRight size="18px" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
