import {
  EventsTable,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  BodyRow,
  BodyCell,
} from "./style";
import { BsThreeDotsVertical } from "react-icons/bs";
import { events } from "../../data/events";
import { usePagination } from "../../hooks/usePagination";

const Table = () => {

  const { currentItems } = usePagination(events, 2);

  return (
    <EventsTable>
      <TableHeader>
        <HeaderRow>
          <HeaderCell>Nome do evento</HeaderCell>
          <HeaderCell>Total de equipes</HeaderCell>
          <HeaderCell>Status</HeaderCell>
          <HeaderCell>Data</HeaderCell>
          <HeaderCell></HeaderCell>
        </HeaderRow>
      </TableHeader>

      <TableBody>
        {currentItems.map((event) => (
          <BodyRow key={event.id}>
            <BodyCell>{event.name}</BodyCell>
            <BodyCell>{event.total}</BodyCell>
            <BodyCell>{event.status}</BodyCell>
            <BodyCell>{event.date}</BodyCell>
            <BodyCell>
              <BsThreeDotsVertical size={16} color="#CC6237" />
            </BodyCell>
          </BodyRow>
        ))}
      </TableBody>
    </EventsTable>
  );
};

export default Table;
