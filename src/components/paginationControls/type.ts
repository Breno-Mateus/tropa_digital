export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
}