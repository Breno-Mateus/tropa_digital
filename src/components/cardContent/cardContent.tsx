import {
  Card,
  CardActions,
  Search,
  SearchInput,
  AddEventButton,
  SpanButton,
} from "./style";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import Table from "../table/table";
import PaginationControls from "../paginationControls/paginationControls";
import { usePagination } from "../../hooks/usePagination";
import { events } from "../../data/events";

const CardContent = () => {
  const {
    currentPage,
    totalPages,
    goToPage,
    goToNext,
    goToPrevious,
  } = usePagination(events, 2);

  return (
    <Card>
      <CardActions>
        <Search>
          <CiSearch size={16} />
          <SearchInput type="text" placeholder="Buscar eventos" />
        </Search>

        <AddEventButton>
          <FaPlus size={16} />
          <SpanButton>Inserir novo</SpanButton>
        </AddEventButton>
      </CardActions>

      <Table />

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
      />
    </Card>
  );
};

export default CardContent;
