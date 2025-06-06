import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 100px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  background-color: #f6f6f6;
  color: #657593;
  font-size: 12px;
  line-height: 15px;

  &::placeholder {
    color: #657593;
  }
`;

export const Button = styled.button`
  background-color: #cc6237;
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 10px 25px;
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Label = styled.label`
  color: #cc6237;
  font-size: 13px;
  line-height: 15px;
  font-weight: 600;
`;
