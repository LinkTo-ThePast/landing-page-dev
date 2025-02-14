import ButtonProps from "@/app/interface/buttons/IButton";

const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  const styles = {
    primary: "bg-[#7302E3] text-white",
    secondary: "bg-[#ECE2F6] text-black",
    outline: "border border-gray-400 text-black",
  };

  return (
    <button
      className={`w-[150px] h-[32px] rounded-[24px] font-semibold ${styles[variant]} ${onClick}`}
    >
      {text}
    </button>
  );
};

export default Button;
