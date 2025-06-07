import { create } from "zustand";

interface SectionStore {
  selectedSection: string;
  setSelectedSection: (section: string) => void;
}

export const useSectionStore = create<SectionStore>((set) => ({
  selectedSection: "Eventos",
  setSelectedSection: (section) => set({ selectedSection: section }),
}));
