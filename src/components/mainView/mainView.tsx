import {
  MainContent,
  PageHeader,
  DescriptionText,
  HighlightText,
  PageTitle,
  ContentSection,
} from "./style";
import { useSectionStore } from "../../store/sectionStore";
import CardContent from "../cardContent/cardContent";

const MainView = () => {
  const { selectedSection } = useSectionStore();

  return (
    <MainContent>
      <PageHeader>
        <DescriptionText>
          Bem vindo de volta, <HighlightText>Kaique Steck</HighlightText>
        </DescriptionText>
        <PageTitle>{selectedSection}</PageTitle>
      </PageHeader>

      <ContentSection>
        <CardContent />
      </ContentSection>
    </MainContent>
  );
};

export default MainView;
