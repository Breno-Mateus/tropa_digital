import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: none;
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid #09428f2b;
  width: 100vw;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 10;
`;

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-right: 1px solid #0000001a;
  width: 210px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  transition: transform 500ms ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
`;

export const SidebarHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IconsMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Logo = styled.img`
  padding: 10px 15px;
`;

export const SidebarFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 38px 15px 10px 15px;
  border-top: 1px solid #0000001a;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

export const MenuTitle = styled.p`
  font-size: 9px;
  font-weight: 900;
  line-height: 15px;
  letter-spacing: 12%;
  color: #a3a3a3;
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
  font-size: 12px;
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
