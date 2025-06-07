import type { PaginationProps } from "./type";
import { PaginationContainer, PaginationButton, ActivePageButton } from "./style";

const PaginationControls = ({
  currentPage,
  totalPages,
  goToPage,
  goToNext,
  goToPrevious,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={goToPrevious} disabled={currentPage === 1}>
        Anterior
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, index) => (
        <ActivePageButton
          key={index + 1}
          onClick={() => goToPage(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </ActivePageButton>
      ))}

      <PaginationButton onClick={goToNext} disabled={currentPage === totalPages}>
        Próximo
      </PaginationButton>
    </PaginationContainer>
  );
};

export default PaginationControls;
