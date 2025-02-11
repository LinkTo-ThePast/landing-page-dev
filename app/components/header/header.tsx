import Image from "next/image";
import LoginButton from "../buttons/LoginButton";

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-16 w-full">
      <Image
        src={"/assets/logo.png"}
        width={122}
        height={20}
        alt="Empleo digno para todos."
      />
      <LoginButton />
    </header>
  );
};

export default Header;
