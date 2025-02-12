import IButtonProps from "@/app/interface/buttons/IButton";

const Button = ({ text, variant = "primary", onClick }: IButtonProps) => {
  const styles = {
    primary: "bg-[#ECE2F6] text-black",
    secondary: "bg-primary text-[#fffdf7]",
    outline: "border border-gray-400 text-black",
  };

  return (
    <button
      className={`w-[150px] h-[32px] rounded-[24px] py-[8px] px-[12px] gap-[4px] font-semibold ${styles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
