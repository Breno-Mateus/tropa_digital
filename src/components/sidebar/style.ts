import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-right: 1px solid #0000001a;
  padding: 30px 15px;
  width: 210px;
  height: 100vh;
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SidebarFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 38px;
  border-top: 1px solid #0000001a;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuTitle = styled.p`
  font-size: 9px;
  font-weight: 900;
  line-height: 15px;
  letter-spacing: 12%;
  color: #A3A3A3;
  padding-left: 10px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export const TextLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameUser = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
`;

export const PositionUser = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
`;

export const UserButton = styled.button`
  padding: 10px;
  display: flex;
  gap: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc6237;
    color: #ffffff;
  }
`;
export const UserImage = styled.div`
  border: 1px solid #cc6237;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
