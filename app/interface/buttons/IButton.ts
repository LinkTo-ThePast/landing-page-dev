interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  class?: string;
  HideOnSmallViewport?: "true" | "false";
}

export default ButtonProps;
