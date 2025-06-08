import styled from "styled-components";

export const Button = styled.button<{ selected: boolean }>`
  border-radius: 5px;
  border: none;
  padding: 10px;
  transition: background-color 0.3s;
  display: flex;
  gap: 10px;
  background-color: ${({ selected }) => (selected ? "#cc6237" : "#FFFFFF")};
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#252525")};
`;

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
