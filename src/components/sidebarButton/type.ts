import type { ReactNode } from "react";

export interface SidebarButtonProps {
  icon: ReactNode;
  text: string;
  selected: boolean;
  onClick: () => void;
}
