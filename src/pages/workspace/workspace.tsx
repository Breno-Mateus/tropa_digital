import MainView from "../../components/mainView/mainView";
import SideBar from "../../components/sidebar/sidebar";
import { WorkspaceContainer } from "./style";

const Workspace = () => {
  return (
    <WorkspaceContainer>
      <SideBar />
      <MainView />
    </WorkspaceContainer>
  )
};

export default Workspace;
