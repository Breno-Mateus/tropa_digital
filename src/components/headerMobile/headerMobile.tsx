import { useState } from "react";
import {
  HeaderContainer,
  SidebarContainer,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  Menu,
  MenuTitle,
  UserContainer,
  TextLabel,
  NameUser,
  PositionUser,
  UserButton,
  UserImage,
  Overlay,
  IconsMenu
} from "./style";
import Hamburger from "hamburger-react";

import Logo from "../../assets/logo_sidebar.png";
import SidebarButton from "../sidebarButton/sidebarButton";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlinePoweroff, AiOutlineTeam } from "react-icons/ai";
import User from "../../assets/user.png";
import { useSectionStore } from "../../store/sectionStore";

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const { selectedSection, setSelectedSection } = useSectionStore();

  return (
    <>
      <HeaderContainer>
        {isOpen && <Overlay />}

        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          color="#cc6237"
        />
      </HeaderContainer>

      {isOpen && (
        <SidebarContainer isOpen={isOpen}>
          <SidebarHeader>
            <IconsMenu>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={20}
                color="#cc6237"
              />

              <img src={Logo} alt="Logo da tropa digital"/>
            </IconsMenu>

            <SidebarMenu>
              <MenuTitle>MENU</MenuTitle>

              <Menu>
                <SidebarButton
                  icon={<RxDashboard size={13} />}
                  text="Dashboard"
                  selected={selectedSection === "Dashboard"}
                  onClick={() => {
                    setSelectedSection("Dashboard");
                    setOpen(false);
                  }}
                />
                <SidebarButton
                  icon={<MdOutlineCalendarMonth size={13} />}
                  text="Eventos"
                  selected={selectedSection === "Eventos"}
                  onClick={() => {
                    setSelectedSection("Eventos");
                    setOpen(false);
                  }}
                />
                <SidebarButton
                  icon={<RiTeamLine size={13} />}
                  text="Equipes"
                  selected={selectedSection === "Equipes"}
                  onClick={() => {
                    setSelectedSection("Equipes");
                    setOpen(false);
                  }}
                />
                <SidebarButton
                  icon={<AiOutlineTeam size={13} />}
                  text="Inscrições"
                  selected={selectedSection === "Inscrições"}
                  onClick={() => {
                    setSelectedSection("Inscrições");
                    setOpen(false);
                  }}
                />
              </Menu>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarFooter>
            <UserContainer>
              <UserImage>
                <img src={User} />
              </UserImage>

              <TextLabel>
                <NameUser>Kaique Steck</NameUser>
                <PositionUser>Administrador</PositionUser>
              </TextLabel>
            </UserContainer>

            <UserButton>
              <HiOutlineUser size={15} />
              <NameUser>Alterar dados</NameUser>
            </UserButton>

            <UserButton>
              <AiOutlinePoweroff size={15} />
              <NameUser>Sair</NameUser>
            </UserButton>
          </SidebarFooter>
        </SidebarContainer>
      )}
    </>
  );
};

export default HeaderMobile;
