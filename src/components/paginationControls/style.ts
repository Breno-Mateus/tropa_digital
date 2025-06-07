import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  background-color: #F5F5F5;
  color: #000000;
  border-radius: 200px;
  border: none;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;

  &:hover{
    background-color: #CC6237;
    color: #FFFFFF;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ActivePageButton = styled.button`
  background-color: #F5F5F5;
  color: #000000;
  border-radius: 50%;
  border: none;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;

  &.active{
    background-color: #CC6237;
    color: #FFFFFF;
  }
`;