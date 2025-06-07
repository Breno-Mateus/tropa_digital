import {
  MainContent,
  PageHeader,
  DescriptionText,
  HighlightText,
  PageTitle,
  ContentSection
} from "./style";
import { useSectionStore } from "../../store/sectionStore";
import CardContent from "../cardContent/cardContent";

const MainView = () => {
  const { selectedSection } = useSectionStore();

  const title =
    selectedSection === "Eventos" ? "Todos os eventos" : selectedSection;

  return (
    <MainContent>
      <PageHeader>
        <DescriptionText>
          Bem vindo de volta, <HighlightText>Kaique Steck</HighlightText>
        </DescriptionText>
        <PageTitle>{title}</PageTitle>
      </PageHeader>

      <ContentSection>
        <CardContent />
      </ContentSection>
    </MainContent>
  );
};

export default MainView;
