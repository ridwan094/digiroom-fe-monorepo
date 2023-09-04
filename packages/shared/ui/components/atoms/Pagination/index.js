import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const lastPage = Math.min(Math.max(currentPage + 2, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);

  const range = (start, end) => {
    if (start >= end) {
      return [];
    }

    return [...Array(end - start + 1).keys()].map((key) => key + start);
  };

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
            className={`flex items-center text-sm text-reliableBlack30 border border-[#E9E9E9] rounded lg:border-transparent ${
              currentPage === 1 && 'text-[#C7C7C7]'
            }`}
            disabled={currentPage === 1}
            onClick={goToPrevPage}
          >
            <MdChevronLeft size="18px" color="#323232" />
            <span className="hidden lg:inline-block">Sebelumnya</span>
          </button>
        </li>
        {range(firstPage, lastPage).map((page) => (
          <li key={page}>
            <button
              className={`py-2 px-4 text-sm font-normal text-reliableBlack border border-[#E9E9E9] rounded lg:border-transparent ${
                currentPage === page && 'text-supportiveRed !border-supportiveRed'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`flex items-center text-sm text-reliableBlack30 border border-[#E9E9E9] rounded lg:border-transparent ${
              currentPage === totalPages && 'text-[#C7C7C7]'
            }`}
            disabled={currentPage === totalPages}
            onClick={goToNextPage}
          >
            <span className="hidden lg:inline-block">Berikutnya</span>
            <MdChevronRight size="18px" color="#323232" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.defaulProps = {
  currentPage: 1,
  totalPages: 5,
};

export default Pagination;
