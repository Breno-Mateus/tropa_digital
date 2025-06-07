import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #09428F2B;
  border-radius: 10px;
  padding: 20px;
  background-color: #FFFFFF;
  width: 100%;
`

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

export const Search = styled.div`
  border-radius: 33px;
  border: none;
  padding: 10px 15px;
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #00000033;
`

export const SearchInput = styled.input`
  border: none;
  background-color: #F6F6F6;
  color: #00000033;
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;

  &::placeholder{
    color: #00000033;
  }

  &:focus{
    border: none;
    outline: none;
  }
`

export const AddEventButton = styled.button`
  background: #CC6237;
  color: #FFFFFF;
  padding: 10px 15px;
  border-radius: 33px;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;

export const SpanButton = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  color: #FFFFFF;
`