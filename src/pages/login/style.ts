import styled from "styled-components";

export const BodyLogin = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

export const CardLogin = styled.section`
  width: 756px;
  height: 498px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 100px 200px 0px #00000040;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

export const LoginContent = styled.div`
  width: 339px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const IllustrationWrapper = styled.div`
  width: 355.5px;
  background-color: #cc6237;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 40.5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 15px;
  font-weight: 700;
  color: #cc6237;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  color: #2a4d8e80;
`;
