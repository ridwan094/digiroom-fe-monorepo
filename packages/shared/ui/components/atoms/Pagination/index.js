import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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
        {Array(totalPages)
          .fill(0)
          .map((num, i) => (
            <li key={i}>
              <button
                className={`py-2 px-4 text-sm font-normal text-reliableBlack border border-[#E9E9E9] rounded lg:border-transparent ${
                  currentPage === i + 1 && 'text-supportiveRed !border-supportiveRed'
                }`}
                onClick={() => onPageChange(i + 1)}
              >
                {i + 1}
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
