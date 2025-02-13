import Image from "next/image";
import Button from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-16 w-full">
      <Image
        src={"/assets/logo.png"}
        width={135}
        height={36}
        quality={85}
        alt="Empleo digno para todos."
      />
      <Button text="Iniciar sesión" variant="secondary" onClick={() => {}} />
    </header>
  );
};

export default Header;
