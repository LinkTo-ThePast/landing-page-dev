interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  class?: string;
}

export default ButtonProps;
