import { Button, ButtonText } from "./style";
import type { SidebarButtonProps } from "./type";

const SidebarButton = ({
  icon,
  text,
  selected,
  onClick,
}: SidebarButtonProps) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {icon}

      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default SidebarButton;
