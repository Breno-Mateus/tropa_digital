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
  font-weight: 400;
  background-color: #f6f6f6;
  color: #657593;
  font-size: 12px;
  line-height: 15px;

  &::placeholder {
    color: #657593;
  }

  &:focus{
    border: none;
    outline: none;
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 10px;
  font-weight: 400;
`;

export const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 100px;
  border: none;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #cc6237;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
