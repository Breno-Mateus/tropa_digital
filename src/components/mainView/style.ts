import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 30px;
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  color: #00000099;
`;

export const HighlightText = styled.span`
  font-weight: 500;
  color: #101010;
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: #CC6237E5;
`;

export const ContentSection = styled.div`
  padding: 30px;
  width: 100%;
`