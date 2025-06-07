import {
  EventsTable,
  TableHeader,
  HeaderRow,
  HeaderCell,
  TableBody,
  BodyRow,
  BodyCell,
  ContainerStatus,
  CircleStatus
} from "./style";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { TableProps } from "./type";

const Table = ({ currentItems } : TableProps) => {
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
            <BodyCell>
              <ContainerStatus>
                <CircleStatus status={event.status}/>
                {event.status}
              </ContainerStatus>
            </BodyCell>
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
