import ButtonProps from "@/app/interface/buttons/IButton";

const Button = ({
  text,
  variant = "primary",
  onClick,
  HideOnSmallViewport = "false",
}: ButtonProps) => {
  const styles = {
    primary: "bg-[#B782ED] text-[#520138]",
    secondary: "bg-[#ECE2F6] text-black",
    outline: "border border-gray-400 text-black",
  };

  const isHidden = {
    true: "hidden md:block",
    false: "",
  };

  return (
    <button
      className={`${isHidden[HideOnSmallViewport]} md:w-40 md:h-8 md:rounded-3xl w-36 h-6 rounded-2xl font-semibold ${styles[variant]} ${onClick}`}
    >
      {text}
    </button>
  );
};

export default Button;
