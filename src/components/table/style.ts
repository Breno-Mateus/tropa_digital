import styled from "styled-components";

export const EventsTable = styled.table``;

export const TableHeader = styled.thead``;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
  text-align: start;
  font-size: 13px;
  font-weight: 500;
  color: #cc623780;
  border-bottom: 1px solid #cc62371a;
  line-height: 15px;
  padding: 12px 20px 12px 0px;

  @media (max-width: 768px) {
    font-size: 11px;
    text-align: center;
  }
`;

export const TableBody = styled.tbody``;

export const BodyRow = styled.tr``;

export const BodyCell = styled.td`
  text-align: start;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #657593;
  padding: 12px 20px 12px 0px;
  border-bottom: 1px solid #cc62371a;

  @media (max-width: 768px) {
    font-size: 11px;
    text-align: center;
    padding: 5px;
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CircleStatus = styled.div<{ status: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: none;
  background-color: ${({ status }) => (status === "Ativo" ? "#4def00" : "red")};
`;
