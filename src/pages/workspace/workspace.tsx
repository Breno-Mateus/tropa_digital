import HeaderMobile from "../../components/headerMobile/headerMobile";
import MainView from "../../components/mainView/mainView";
import SideBar from "../../components/sidebar/sidebar";
import { WorkspaceContainer } from "./style";

const Workspace = () => {
  return (
    <WorkspaceContainer>
      <HeaderMobile />
      <SideBar />
      <MainView />
    </WorkspaceContainer>
  )
};

export default Workspace;
